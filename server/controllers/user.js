const User = require('../models/user');
const Policy = require('../models/policy');
const Claim = require('../models/claimant');
const jwt = require('jsonwebtoken')

// Controller function to create a new user
// exports.createUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const newUser = new User({ name, email, password });
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };


// Controller function to create a new user
exports.createUser = async (req, res) => {
    try {
        const { name, email, password, policy_ids } = req.body;
        const newUser = new User({ name, email, password, policy_ids });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


// Controller function to get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function for user login
exports.loginUser = async (req, res) => {
    
    try {
        const {name, email, password } = req.body;

        // Check if a user with the provided email and password exists
        const user = await User.findOne({ name, email, password });
        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ name: user.name }, 'f4c5892d04d8c9afe6d42dc066649e64fb34aacf7d2c574a1abfa1a3157d7f46', {expiresIn : '1h'});
        console.log(token);
        // Return user details
        res.status(200).json({ message: 'Successful login', token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Controller function to update a user by ID
exports.updateUserById = async (req, res) => {
    try {
        const { name, email, password, policy_ids  } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, password, policy_ids  }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to delete a user by ID
exports.deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to get user specific policies
exports.getUserPolicies = async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOne({name}).populate('policy_ids');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.policy_ids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get user specific claims
exports.getUserClaims = async (req, res) => {
    try {
        const name = req.params.name;
        const user = await User.findOne({name}).populate('claim_ids');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user.claim_ids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
