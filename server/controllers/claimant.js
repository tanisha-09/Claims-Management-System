const Claimant = require('../models/claimant');
const User = require('../models/user');

// Controller function to create a new claimant
exports.createClaimant = async (req, res) => {
    try {
        const newClaimant = await Claimant.create(req.body);

        const user = await User.findOne({name : req.body.name})
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Add the new claim ID to the user's claim_ids array
        user.claim_ids.push(newClaimant._id);
        await user.save();


        res.status(201).json(newClaimant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller function to get all claimants
exports.getAllClaimants = async (req, res) => {
    try {
        const claimants = await Claimant.find();
        res.status(200).json(claimants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to get a single claimant by ID
exports.getClaimantById = async (req, res) => {
    try {
        const claimant = await Claimant.findById(req.params.id);
        if (!claimant) {
            return res.status(404).json({ message: 'Claimant not found' });
        }
        res.status(200).json(claimant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to update a claimant by ID
exports.updateClaimantById = async (req, res) => {
    try {
        const updatedClaimant = await Claimant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClaimant) {
            return res.status(404).json({ message: 'Claimant not found' });
        }
        res.status(200).json(updatedClaimant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to delete a claimant by ID
exports.deleteClaimantById = async (req, res) => {
    try {
        const deletedClaimant = await Claimant.findByIdAndDelete(req.params.id);
        if (!deletedClaimant) {
            return res.status(404).json({ message: 'Claimant not found' });
        }
        res.status(200).json({ message: 'Claimant deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
