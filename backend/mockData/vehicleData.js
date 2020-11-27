const vehicleData = [
    {
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Verna',
        vehicleType: 'Car',
        capacity: 5,
        registrationNo: 'WB22U9999',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '3'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '4'
            }
        ],
        Owner: 'John'
    },
    {
        image: 'https://images.unsplash.com/photo-1569508795614-4185eaebd1b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Jeep',
        vehicleType: 'Van',
        capacity: 50,
        registrationNo: 'RJ22U9899',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '30'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '50'
            }
        ],
        Owner: 'Ram'
    },
    {
        image: 'https://images.unsplash.com/photo-1546955870-9fc9e5534349?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Maruti Swift',
        vehicleType: 'Bus',
        capacity: 90,
        registrationNo: 'UP22U9899',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '40'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '55'
            }
        ],
        Owner: 'Mohan'
    },
    {
        image: 'https://images.unsplash.com/photo-1546955870-9fc9e5534349?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Hyundai i10',
        vehicleType: 'Bus',
        capacity: 40,
        registrationNo: 'WB22U9099',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '30'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '40'
            }
        ],
        Owner: 'Sam'
    },
    {
        image: 'https://images.unsplash.com/photo-1525878880878-b5c9dd615de4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Ford Polo',
        vehicleType: 'Car',
        capacity: 4,
        registrationNo: 'DL22U9999',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '4'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '3'
            }
        ],
        Owner: 'Charlie'
    },
    {
        image: 'https://images.unsplash.com/photo-1525878880878-b5c9dd615de4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Ford Endevour',
        vehicleType: 'Car',
        capacity: 4,
        registrationNo: 'MP22U9199',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '3'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '2'
            }
        ],
        Owner: 'Barvo'
    },
    {
        image: 'https://images.unsplash.com/photo-1569508795614-4185eaebd1b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Porche',
        vehicleType: 'Van',
        capacity: 80,
        registrationNo: 'WB22U1899',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '30'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '45'
            }
        ],
        Owner: 'Peter'
    },
    {
        image: 'https://images.unsplash.com/photo-1569508795614-4185eaebd1b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'BMW',
        vehicleType: 'Van',
        capacity: 65,
        registrationNo: 'WB22U9009',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '30'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '45'
            }
        ],
        Owner: 'John D'
    },
    {
        image: 'https://images.unsplash.com/photo-1569508795614-4185eaebd1b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'ABCD',
        vehicleType: 'Van',
        capacity: 88,
        registrationNo: 'WB22U1199',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '30'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '45'
            }
        ],
        Owner: 'Mike'
    },
    {
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60',
        vehicleName: 'Ford',
        vehicleType: 'Car',
        capacity: 6,
        registrationNo: 'WB22U1099',
        details: [
            {
                source: 'Kolkata',
                destination: 'Bangalore',
                filledCapacity: '5'
            },
            {
                source: 'Kolkata',
                destination: 'Chennai',
                filledCapacity: '4'
            }
        ],
        Owner: 'John V'
    }
];

module.exports = vehicleData;
