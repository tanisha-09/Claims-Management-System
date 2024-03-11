const express = require("express");
const app = express();

// const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, loginUser } = require("../controllers/user");
const { createUser, getAllUsers, updateUserById, deleteUserById, loginUser, getUserPolicies, getUserClaims } = require("../controllers/user");
const authMiddleware = require('../middleware/user');

const router = express.Router();

router.route("/post/user").post(createUser);
router.route("/getall/user").get(authMiddleware, getAllUsers);
// router.route("/getByusername/user/:id").get(authMiddleware, getUserById);
// router.route("/getByusername/user/:name").get(authMiddleware, getUserByUsername);

router.route("/upById/user/:id").put(authMiddleware, updateUserById);
router.route("/delById/user/:id").delete(authMiddleware, deleteUserById);
router.route("/login/user").post(loginUser);

router.route('/pol/:name').get(getUserPolicies);
router.route('/claim/:name').get(getUserClaims);

module.exports = router;