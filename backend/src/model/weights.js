const mongoose = require("mongoose");

const weightsSchema = new mongoose.Schema({
  damage: { type: Number, default: 0.4 },
  road: { type: Number, default: 0.3 },
  reports: { type: Number, default: 0.2 },
  waiting: { type: Number, default: 0.1 },
});

module.exports = mongoose.model("Weights", weightsSchema);
