import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "USERS", required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "COURSES", required: true },
    issueDate: { type: Date, default: Date.now }
});

export default mongoose.model("CERTIFICATES", CertificateSchema);