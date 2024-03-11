const Policy = require('../models/policy');

// Controller function to create a new policy
exports.createPolicy = async (req, res) => {
    try {
        const policy = req.body;
        const newPolicy = new Policy(policy);
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// Controller function to get all policies
exports.getAllPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json(policies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Controller function to get a single policy by ID
exports.getPolicyById = async (req, res) => {
    const { id } = req.params;
    try {
        const policy = await Policy.findById(id);
        res.status(200).json(policy);
    } catch (error) {
        res.status(404).json({ message: 'Policy not found' });
    }
};

// Controller function to update a policy by ID
exports.updatePolicyById = async (req, res) => {
    const { id } = req.params;
    const { name, policy_no, coverage_amount, claimed_amount } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No policy with that id');

    const updatedPolicy = { name, policy_no, coverage_amount, claimed_amount, _id: id };

    await Policy.findByIdAndUpdate(id, updatedPolicy, { new: true });

    res.json(updatedPolicy);
};

// Controller function to delete a policy by ID
exports.deletePolicyById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No policy with that id');

    await Policy.findByIdAndRemove(id);

    res.json({ message: 'Policy deleted successfully' });
};

module.exports = exports;
