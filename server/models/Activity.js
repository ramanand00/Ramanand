const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);
