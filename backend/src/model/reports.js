const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  issue:      { type: mongoose.Schema.Types.ObjectId, ref: "Issue", required: true },
  user:       { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  damageType: { type: String, enum: ["pothole", "crack", "other"], required: true },
  photo:      String,    // file name, optional
  note:       String
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);