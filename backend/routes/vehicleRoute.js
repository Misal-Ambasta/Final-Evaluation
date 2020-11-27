const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { getVehicle, getbyIDVehicle, removeVehicle, addNewVehicle } = require('../controllers/vehicleController')

router.get('/get', getVehicle);
router.get('/byid', getbyIDVehicle )
router.get('/delete', removeVehicle )
router.post('/addData', addNewVehicle )

module.exports = router;