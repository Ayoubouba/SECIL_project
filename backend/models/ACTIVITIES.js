// models/ACTIVITY.js
import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema({
    type: { type: String, required: true },      // e.g., "Course Created", "Course Deleted"
    user: { type: String, required: true },      // e.g., "Admin"
    target: { type: String, required: true },    // e.g., "Cement Production Excellence"
    timestamp: { type: Date, default: Date.now },
});

const Activity = mongoose.model("Activity", ActivitySchema);
export default Activity;