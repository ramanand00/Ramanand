// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ TEST ROUTE
router.get("/test", (req, res) => {
  res.send("✅ Contact route is working.");
});

// ✉️ POST - Add new contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// 📥 GET - All contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts." });
  }
});

// 🗑️ DELETE - By ID ✅ THIS IS IMPORTANT!
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error while deleting." });
  }
});

module.exports = router;
