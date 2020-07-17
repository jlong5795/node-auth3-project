const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const secret = jwtSecret;

    if (authorization){
        jwt.verify(authorization, secret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'Invalid Credentials'});
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'No credentials provided.'});
    };
};