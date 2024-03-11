const mongoose = require("mongoose");

const claimantSchema = new mongoose.Schema({
    name: String,
    hname: String,
    age: Number,
    contact: Number,
    diagnosis: String,
    bill_no: Number,
    bill_amount: Number,
    date_addmission: {
        type: Date,
        default: Date.now
      },
    date_discharge: {
        type: Date,
        default: Date.now
      },
    treatment_details: String,
    status: {
      type: String,
      default: "Pending"
    },
    tpa_status: {
      type: String,
      default: "Pending"
    }
});

module.exports = mongoose.model("Claim", claimantSchema);