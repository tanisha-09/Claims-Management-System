const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
    pol_name: String,
    pol_id: Number,
    policy_no: Number,
    coverage_amount: Number
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Policy", policySchema);