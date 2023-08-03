const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteUser,
  getMyProfile,
  getUserProfile,
  getAllUsers,
} = require("../controllers/user");
const User = require("../models/user");
const { isAuthenticated } = require("../middlewares/auth");

var express = require("express");
var router = express.Router();

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/register").post(register);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/delete/me").delete(isAuthenticated, deleteUser);
router.route("/myprofile").get(isAuthenticated, getMyProfile);
router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);

module.exports = router;
