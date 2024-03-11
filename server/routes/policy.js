const express = require("express");
const { createPolicy, getAllPolicies, getPolicyById, updatePolicyById, deletePolicyById } = require("../controllers/policy");

const router = express.Router();

router.route("/post/policy").post(createPolicy);
router.route("/getall/policy").get(getAllPolicies);
router.route("/getById/policy/:id").get(getPolicyById);
router.route("/upById/policy/:id").put(updatePolicyById);
router.route("/delById/policy/:id").delete(deletePolicyById);


module.exports = router;