import mongoose from "mongoose";

const USERSSchema= new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name:  { type: String, required: true },
    email:      { type: String, required: true, unique: true },   // UNIQUE
    department: { type: String, required: true },
    employee_id:{ type: String, required: true, unique: true },   // UNIQUE
    password:   { type: String, required: true },
    confirm_password: { type: String, required: true },
    agree:   { type: String ,required: true},
    role: { type: String, enum: ["user", "admin"], default: "user" }
})

const USERModel=mongoose.model("USERS",USERSSchema);
export default USERModel;