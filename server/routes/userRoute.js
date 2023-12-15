const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

// Created Register
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error signing up" });
  }
});

// Get Register
router.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: "User Get successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to get user" });
  }
});

module.exports = router;
