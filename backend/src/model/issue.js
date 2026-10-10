const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    road: { type: mongoose.Schema.Types.ObjectId, ref: "Road", required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
    damageType: {
      type: String,
      enum: ["pothole", "crack", "other"],
      required: true,
    },
    severity: { type: Number, min: 1, max: 3, default: 1 },
    reportCount: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ["Pending", "In progress", "Fixed"],
      default: "Pending",
    },
    priorityScore: { type: Number, default: 0 },
    assignedEngineer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fixedAt: Date,
  },
  { timestamps: true },
);
issueSchema.index({ road: 1, damageType: 1, status: 1 });

module.exports = mongoose.model("Issue", issueSchema);
