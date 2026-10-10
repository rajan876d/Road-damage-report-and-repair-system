const mongoose = require("mongoose");

const wardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Ward", wardSchema);
