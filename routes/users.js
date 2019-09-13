const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const patient = require('../models/patient')

//login

router.post('/auth', (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    const query = { email }

    //Check the user exists
    patient.findOne(query, (err, user) => {
        //Error during exuting the query
        if (err) {
            return res.send({
                success: false,
                message: 'Error, please try again'
            });
        }

        if (!user) {
            return res.send({
                success: false,
                message: 'Error, Account not found'
            });
        }

        user.isPasswordMatch(password,user.password,(err,isMatch)=>{
            if (!isMatch) {
                return res.send({
                    success: false,
                    message: 'Error, Invalid Password'
                });
            }
            //user is valid
            //generate token
            const token = jwt.sign({ user }, process.env.SECRET ,{expiresIn:604800});

            // don't return the password
            let returntouser = {
                name: user.name,
                email: user.email,
                id: user._id,
                token
            }
            return res.send({
                success: true,
                message: 'you, can login now',
                user: returntouser
            });
        });
    });
});



//registeration

router.post('/register', (req, res, next) => {
    let newpatient = new patient({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });

    newpatient.save((err, patient) => {
        if (err) {
            return res.send({ success: false, message: 'Failed to save the user' });
        }
        res.send({ success: true, message: 'User Saved', patient });
    });
});

module.exports = router ;