import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import axios from '../Redux/axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        margin: '20px'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function VehicleCard({ data, handleRenderDetails }) {
    const classes = useStyles();
    const history = useHistory();

    const { image, vehicleName, registrationNo, vehicleType, details, _id, capacity } = data;
    // console.log(details);
    return (
        <Card className={classes.root}>
            <CardHeader avatar={<Avatar aria-label="cars" src={image} className={classes.avatar} />} title={vehicleName} subheader={registrationNo} />

            <CardContent style={{ textAlign: 'center' }}>
                <Typography>
                    Capacity: {capacity}
                    {', '}
                    Vehicle Type: {vehicleType}
                </Typography>
                <br />
                {details && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        Total trips taken : {details.length}
                    </Typography>
                )}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="view">
                    <Link to={`/details/${_id}`}>
                        {' '}
                        <VisibilityIcon onClick={() => handleRenderDetails(_id)} />
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    );
}
