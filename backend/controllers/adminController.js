const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerVehicle = async (req, res) => {
    
    try {
        const { adminName, email, password } = req.body;
        console.log(adminName, req.body)
        const emailExists = await Admin.findOne({ email: email });
        if (emailExists) {
            return res.status(400).send('A User is already exists with this email id');
        }

        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const user = new Admin({
            adminName: adminName,
            email: email,
            password: hashedPassword,
            
        });

        const savedUser = await user.save();
        const tokenisedUser = { email: savedUser.email };
        const accessToken = await jwt.sign(tokenisedUser, process.env.SECRET_KEY_TO_ACCESS);
        
        const userDetails = {
            adminName,
            email,
            
        };
        console.log('here', userDetails);
        return res.status(201).send({ accessToken, userDetails });
    } catch (err) {
        res.status(400).send(err);
    }
};

const loginVehicle = async (req, res) => {
    

    try {
        const user = await Admin.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Email or password is wrong');
        }

        const { adminName, email } = user;

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid password');

        const userDetails = {
            adminName,
            email,
            
        };

        // const email = req.body.email;
        const newUser = { email: email };
        const accessToken = jwt.sign(newUser, process.env.SECRET_KEY_TO_ACCESS, { expiresIn: '60000s' });
        res.status(200).send({ accessToken, userDetails });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};

module.exports = { registerVehicle, loginVehicle };
