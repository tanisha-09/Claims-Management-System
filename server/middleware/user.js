
const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const { promisify } = require('util');
//import { secretKey } from '../config/jwt.js'; // Assuming you have a config file with a secret key

// const authMiddleware = async (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
    
//     if (!token) {
//         return res.status(401).json({ message: 'Token not provided' });
//     }

//     try {
//         const decoded = await promisify(jwt.verify)(token, 'f4c5892d04d8c9afe6d42dc066649e64fb34aacf7d2c574a1abfa1a3157d7f46');
//         req.user = decoded;
//         next();
//     } catch (error) {
//         return res.status(403).json({ message: 'Invalid token' });
//     }
// };

const authMiddleware = (req, res, next) => {
    
    // Get the token from the Authorization header
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    // Verify the token
    jwt.verify(token, 'f4c5892d04d8c9afe6d42dc066649e64fb34aacf7d2c574a1abfa1a3157d7f46', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        // If verification is successful, store the decoded username in the request object
        req.name = decoded.name;
        next();
    });
};

module.exports = authMiddleware;