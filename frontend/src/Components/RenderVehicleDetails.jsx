import React, { useState, useEffect } from 'react';
import axios from '../Redux/axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Paper } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { getByIDVehicleData, deleteVehicleData } from '../Redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        marginTop: '10%'
    },

    avatar: {
        backgroundColor: red[500]
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginBottom: '20px',
        position: 'fixed',
        top: '10%',
        left: '35%',
        width: '300px',
        textAlign: 'center'
    }
}));
export default function RenderVehicleDetails(props) {
    const classes = useStyles();
    const id = props.match.params.id;
    const { singleData, items } = useSelector((state) => state.app);
    const [ data, setData ] = useState([]);
    const { image, vehicleName, registrationNo, vehicleType, details, Owner, _id } = items;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // axios({
        //     method: 'get',
        //     url: `/api/vehicle/byid?id=${id}`
        // }).then((res) => setData(res.data));
        dispatch(getByIDVehicleData(id));
    }, []);

    // console.log(data);
    // console.log("items",items);
    const handleDelete = async (id) => {
        console.log('entered delete');
        await dispatch(deleteVehicleData(id));
        history.push('/');
    };
    return (
        <div>
            <Grid container item justify="center">
                <Card className={classes.root}>
                    <CardHeader avatar={<Avatar aria-label="recipe" src={image} className={classes.avatar} />} title={vehicleName} subheader={registrationNo} />

                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography>
                            Registration No: {registrationNo}
                            {', '}
                            Vehicle Type: {vehicleType}
                        </Typography>
                        <br />
                        {details &&
                            details.map((item) => (
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Source: {item.source}
                                    {', '} Destination: {item.destination}
                                    {', '} Filled Capacity: {item.filledCapacity}
                                </Typography>
                            ))}
                        <Typography>Owner: {Owner}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteForeverIcon onClick={() => handleDelete(id)} />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}
