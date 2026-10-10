import mongoose from "mongoose";
const wardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true, unique: true },
});
export default mongoose.model("Ward", wardSchema);
