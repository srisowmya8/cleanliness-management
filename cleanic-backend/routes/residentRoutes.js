const express = require("express");
const bcrypt = require("bcryptjs");
const Resident = require("../models/Resident");

const router = express.Router();

// Resident Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, phone, area, flatNo, buildingName } = req.body;

    // Check if user already exists
    const existingResident = await Resident.findOne({ email });
    if (existingResident) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new resident
    const newResident = new Resident({ name, email, password, phone, area, flatNo, buildingName });
    await newResident.save();

    res.status(201).json({ message: "Resident registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering resident", error: error.message });
  }
});

module.exports = router;
