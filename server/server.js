// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/auth");
const activityRoutes = require("./routes/activityRoutes");
const contactRoutes = require("./routes/contactRoutes"); // ✅ correctly named

const app = express();

const allowedOrigins = [
  "https://www.ramanandmandal.com.np",
  "http://localhost:5173",
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());
app.use(helmet());

// Mount routes
app.use("/api/activities", activityRoutes);
app.use("/api/contact", contactRoutes);  // ✅ contact route registered
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
