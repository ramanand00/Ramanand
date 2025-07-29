const express = require("express");
const Activity = require("../models/Activity"); // Make sure the path is correct

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(10);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
