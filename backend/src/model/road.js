const mongoose = require("mongoose");

const roadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ward: { type: mongoose.Schema.Types.ObjectId, ref: "Ward", required: true },
  roadType: { type: String, enum: ["Main", "Local"], default: "Local" },
  importance: {
    busRoute: { type: Boolean, default: false },
    nearSchoolHospital: { type: Boolean, default: false },
    twoPlusLanes: { type: Boolean, default: false },
    connectsWards: { type: Boolean, default: false },
  },
  importanceScore: { type: Number, default: 1 }, // 1 to 3
  location: {
    lat: Number,
    lng: Number,
  },
});

// calculate importanceScore before saving
roadSchema.pre("save", function (next) {
  if (this.roadType === "Main") {
    this.importanceScore = 3;
  } else {
    const anyChecked = Object.values(this.importance.toObject()).some(Boolean);
    this.importanceScore = anyChecked ? 2 : 1;
  }
  next();
});

module.exports = mongoose.model("Road", roadSchema);
