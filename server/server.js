const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
