import mongoose from "mongoose";
import moduleSchema from "./schema.js";
const model = mongoose.model("moduleModel", moduleSchema);
export default model;