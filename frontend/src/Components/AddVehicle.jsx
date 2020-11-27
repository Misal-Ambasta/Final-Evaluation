import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField, Box, Grid, Paper } from '@material-ui/core';
import axios from '../Redux/axios';
import { useSelector } from 'react-redux';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign:"center"
    }
}));

export default function AddTeacher() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [ modalStyle ] = React.useState(getModalStyle);
    const [ open, setOpen ] = React.useState(false);
    const [ data, setData ] = React.useState({ vehicleName: '', registrationNo: '', vehicleType: '', capacity: '', image: '', Owner: '', source: '', destination: '', filledCapacity: '' });
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = () => {
        axios({
            method: 'post',
            url: `/api/vehicle/addData`,
            data: data
        }).then((res) => {
            alert("Added Succesfully");
            
        });
    };

    console.log(data);
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Add details</h2>

            <TextField type="text" onChange={handleChange} placeholder="Vehicle Name" name="vehicleName" label="Vehicle name" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="registrationNo" name="registrationNo" label="registrationNo" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="vehicleType" name="vehicleType" label="vehicleType" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="capacity" name="capacity" label="capacity" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="image" name="image" label="image" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="Owner" name="Owner" label="Owner" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="source" name="source" label="source" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="destination" name="destination" label="destination" required={true} />
            <br />
            <TextField type="text" onChange={handleChange} placeholder="filledCapacity" name="filledCapacity" label="filledCapacity" required={true} />
            <br />
            <br />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
                Close
            </Button>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Add new Vehicle
            </button>
            <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    );
}
