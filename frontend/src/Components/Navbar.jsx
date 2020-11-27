import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddVehicle from "./AddVehicle"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    },
    buttonColor: {
        textDecoration: 'none',
        color: 'white'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();
    // const { isAuth, accessToken } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleHome = () => {
        history.push('/');
    };

    const handleLogout = () => {
        // dispatch(userLogout());
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={handleHome}>
                        Home
                    </Typography>
                    <Typography variant="h6" className={classes.title} onClick={handleHome}>
                       <AddVehicle  />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
