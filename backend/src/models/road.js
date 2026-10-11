import mongoose from "mongoose";
const roadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
    roadType: { type: String, enum: ["Main", "Local"], default: "Local" },
    busRoute: { type: Boolean, default: false },
    nearSchoolOrHospital: { type: Boolean, default: false },
  },
  { timestamps: true }
);
// same road name can't repeat inside one ward
roadSchema.index({ name: 1, ward: 1 }, { unique: true });

export default mongoose.model("Road", roadSchema);