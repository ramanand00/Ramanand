const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/auth");
const activityRoutes = require("./routes/activityRoutes");
const contactRoutes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/activities", activityRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
