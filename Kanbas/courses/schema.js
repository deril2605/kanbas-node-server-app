import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    department: { type: String, required: false },
    credits: { type: Number, required: false },
    description: String
}, {
    collection: "courses"
});

export default courseSchema;