import mongoose from "mongoose";
// Course schema
const courseSchema = new mongoose.Schema({
    title: String,
    category: String,
    img: String,
    author: String,
    duration: String,
    evalution: Number,
    diff: String
});

const Course = mongoose.model("Course", courseSchema);
export default Course;