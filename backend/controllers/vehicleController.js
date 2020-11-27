const Vehicle = require('../models/vehicle');

const getVehicle = async (req, res) => {
    // Filter by: Vehicle type,  sort by: capacity, Search by: Registration
    let { vehicleType, sortCapacity, searchByRegistration } = req.query;
    console.log('Entered in get', sortCapacity, searchByRegistration);
    if (vehicleType == null) {
        vehicleType = '';
    }
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    let sortByCapacity = sortCapacity == 'asc' ? 1 : sortCapacity == 'desc' ? -1 : 0;
    // console.log(sortCapacity, vehicleType)

    searchByRegistration = searchByRegistration.toUpperCase();

    const vehicleCount = await Vehicle.countDocuments(
        {
            vehicleType: { $regex: vehicleType },
            registrationNo: { $regex: searchByRegistration }
        },
        (err) => {
            if (err) console.log(err);
        }
    );

    const finalPage = Math.ceil(vehicleCount / limit);

    try {
        const results = await Vehicle.find({
            vehicleType: { $regex: vehicleType },
            registrationNo: { $regex: searchByRegistration }
        })
            .sort({ capacity: sortByCapacity })
            .skip((page - 1) * limit)
            .limit(limit);

        return res.status(200).send({ data: results, currentPage: page, finalPage });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Something went wrong!');
    }
};

const getbyIDVehicle = async (req, res) => {
    console.log('inside get vehicle by ID', req.query.id);
    Vehicle.findById(req.query.id).then((data) => res.json(data)).catch((err) => res.status(400).json('Error' + err));
};

const removeVehicle = (req, res) => {
    console.log('inside remove ');
    Vehicle.findByIdAndDelete(req.query.id).then((data) => res.json(data)).catch((err) => res.status(400).json('Error' + err));
};

const addNewVehicle = async (req, res) => {
    console.log('entered in Vehicle addition function', req.body);

    console.log('inside add new Vehicle');
    let { vehicleName, image, registrationNo, vehicleType, capacity, Owner, source, destination, filledCapacity } = req.body;
    console.log(vehicleName, image, registrationNo, vehicleType, capacity, Owner, source, destination, filledCapacity )
    const vehicle = new Vehicle({
        vehicleName,
        image,
        registrationNo,
        vehicleType,
        capacity,
        Owner,
        details: [
            {
                source,
                destination,
                filledCapacity
            }
        ]
    });

    console.log(vehicle);

    try {
        const savedVehicle = await vehicle.save();
        res.status(200).send({ message: 'added successfully', data: savedVehicle });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = { getVehicle, getbyIDVehicle, removeVehicle, addNewVehicle };
