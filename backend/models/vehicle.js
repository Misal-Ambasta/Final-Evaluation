const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        vehicleName: {
            type: String,
            required: true
        },
        registrationNo: {
            type: String,
            required: true
        },
        vehicleType: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        details: {
            type: Array,
            required: true
        },
        Owner: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('VehiclesData', vehicleSchema);
