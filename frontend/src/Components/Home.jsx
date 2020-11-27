import React, { useEffect, useState } from 'react';
import axios from '../Redux/axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import VehicleCard from './VehicleCard';
import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { getAllVehicleData } from '../Redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
        color: theme.palette.text.secondary,
        marginBottom: '20px'
    }
}));

const Capacity = [
    {
        value: '',
        label: 'Sort By '
    },
    {
        value: 'asc',
        label: 'Low to High'
    },
    {
        value: 'desc',
        label: 'High to low'
    }
];

const VehicleTypes = [
    {
        value: '',
        label: 'Filter By '
    },
    {
        value: 'Bus',
        label: 'Bus'
    },
    {
        value: 'Van',
        label: 'Van'
    },
    {
        value: 'Car',
        label: 'Car'
    }
];

export default function Home() {
    let query = new URLSearchParams(useLocation().search);
    console.log(query.get('capacity'));
    const classes = useStyles();
    const [ capacity, setCapacity ] = React.useState(query.get('sortCapacity') || '');
    const [ renderID, setRenderID ] = useState('');
    const [ vehicleType, setVehicleType ] = React.useState(query.get('vehicleType') || '');
    const [ searchByRegistration, setSearchByRegistration ] = useState(query.get('searchByRegistration') || '');
    const [ page, setPage ] = useState(query.get('page') || 1);
    // const [ total, setTotal ] = useState(1);
    const history = useHistory();
    const dispatch = useDispatch();
    const { data, total } = useSelector((state) => state.app);

    const handleChange = (event) => {
        setVehicleType(event.target.value);
    };

    const handleCapacity = (event) => {
        setCapacity(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchByRegistration(event.target.value);
    };

    useEffect(
        () => {
            const values = { capacity: capacity, vehicleType: vehicleType, searchByRegistration: searchByRegistration, page: page };
            dispatch(getAllVehicleData(values));

            history.push(`/?vehicleType=${vehicleType}&sortCapacity=${capacity}&searchByRegistration=${searchByRegistration}&limit=6&page=${page}`);
        },
        [ capacity, vehicleType, searchByRegistration, page ]
    );

    const handleRenderDetails = (id) => {
        setRenderID(id);
    };

    const handlePagiination = (e) => {
        const values = { capacity: capacity, vehicleType: vehicleType, searchByRegistration: searchByRegistration, page: Number(e.target.textContent) };
        dispatch(getAllVehicleData(values));
    };
    // console.log(capacity, vehicleType);
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item lg={12}>
                    <Paper className={classes.paper}>
                        <TextField id="standard-select-currency" select label="Select" value={vehicleType} onChange={handleChange} helperText="Please select for filter">
                            {VehicleTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>{' '}
                        <TextField id="standard-basic" label="Search here" value={searchByRegistration} onChange={handleSearch} />
                        <TextField id="standard-select-currency" select label="Select" value={capacity} onChange={handleCapacity} helperText="Please select for sorting">
                            {Capacity.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>{' '}
                    </Paper>
                </Grid>

                {data &&
                    data.map((item) => (
                        <Grid item xs={12} sm={4}>
                            <VehicleCard data={item} handleRenderDetails={handleRenderDetails} />
                        </Grid>
                    ))}
            </Grid>
            <Pagination count={total} style={{ position: 'fixed', bottom: '0px', marginLeft: '45%' }} onChange={handlePagiination} color="primary" />
        </div>
    );
}
