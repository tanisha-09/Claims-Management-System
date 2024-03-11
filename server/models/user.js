const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter a name"],
    },
    email: {
        type: String,
        required: [true,"Please enter an email"],
    },
    password: {
        type: String,
        required: [true,"Please enter a password"],
    },
    policy_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Policy' }],
    claim_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Claim' }]
});

module.exports = mongoose.model("User", userSchema);