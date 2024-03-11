const express = require("express");
const { createClaimant, getAllClaimants, getClaimantById, updateClaimantById, deleteClaimantById } = require("../controllers/claimant");

const router = express.Router();

router.route("/post/claim").post(createClaimant);
router.route("/getall/claim").get(getAllClaimants);
router.route("/getById/claim/:id").get(getClaimantById);
router.route("/upById/claim/:id").put(updateClaimantById);
router.route("/delById/claim/:id").delete(deleteClaimantById);


module.exports = router;