import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
    road: { type: mongoose.Schema.Types.ObjectId, ref: "Road", required: true },
    damageType: {
      type: String,
      enum: ["pothole", "crack", "other"],
      required: true,
    },
    description: { type: String, default: "" },
    photo: { type: String, default: "" },
    location: { lat: Number, lng: Number },
    reporters: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    reportCount: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ["Pending", "In progress", "Fixed"],
      default: "Pending",
    },
    priorityScore: { type: Number, default: 0 },
    fixedAt: { type: Date },
  },
  { timestamps: true },
);

export default mongoose.model("Issue", issueSchema);
