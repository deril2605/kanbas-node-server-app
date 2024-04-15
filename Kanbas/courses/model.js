import mongoose from "mongoose";
import courseSchema from "./schema.js";
const model = mongoose.model("courseModel", courseSchema);
export default model;