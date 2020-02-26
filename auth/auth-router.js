const router = require('express').Router();
const bcrypt = require('bcrypt.js');
const jwt = require('jsonwebtoken');

// need to bring in user-model
const { jwtSecret } = require('../config/secrets');

// endpoints go here

function generateToken(user){
    const payload = {
        username: user.username,
    };

    const options = {
        expiresIn: '1h'
    };

    return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;