const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const Vehicle = require('./models/vehicle')
const VehicleData = require('./mockData/vehicleData')
const VehicleRoute = require('./routes/vehicleRoute')
const adminRoute = require('./routes/adminRoute')

const app = express()
const db = mongoose.connection;

app.use(express.json())
app.use(cors())
dotenv.config()

mongoose.connect(
    //process.env.ATLAS_URI
    'mongodb://localhost/vehicleSystem', 
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("Error in connection to database");
    } else {
        console.log("Successfully connected to database");
    }
})
 
db.once('open', async (req, res) => {
    if ((await Vehicle.countDocuments().exec()) > 0) {
        console.log('Vehicle Data already added in the collection');
        return;
    }

    Vehicle.insertMany(VehicleData)
        .then(() => console.log('Vehicles added Successfully'))
        .catch((err) => console.log(`Error : ${err}`));
});


app.use('/api/vehicle', VehicleRoute)
app.use('/api/newuser', adminRoute)

app.listen(5000, () => {
    console.log("Server is up and running");
})