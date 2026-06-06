const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
  changePassword
} = require("../controllers/authController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.post(
  "/register",
  registerUser
);

router.post("/login", loginUser);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

router.put(
  "/change-password",
  authMiddleware,
  changePassword
);

module.exports = router;