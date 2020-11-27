const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { registerVehicle, loginVehicle } = require('../controllers/adminController');

dotenv.config();

router.post('/register', registerVehicle);
router.post('/login', loginVehicle);

module.exports = router;
