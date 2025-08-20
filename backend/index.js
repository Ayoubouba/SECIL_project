import mongoose from "mongoose";

import express from "express";

import cookieParser from "cookie-parser";

import cors from "cors";

import USERS from "./models/USERS.js";

import Course from "./models/COURSES.js";
import bcrypt from "bcrypt";
import {User} from "lucide-react";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/SECIL_database");

app.post("/login", (req, res) => {
    const { email, password,first_name,last_name,department,employee_id,} = req.body;
    const user = USERS.findOne({ email })
        .then(user => {
            if(user){
                if(user.password === password){
                    res.json({
                        success: true,
                        email: user.email,
                        password:user.password,
                        role: user.role,
                        name: user.first_name + " " +user.last_name,
                        department: user.department,
                        id:user.employee_id,
                    });
                }else{
                    res.json("password incorrect")
                }
            }else{
                res.json("error")
            }
        })
})

app.post("/USERS", async (req, res) => {
    try {
        const { first_name, last_name, email, department, employee_id, password, confirm_password, agree } = req.body;

        // 1. Check if email exists
        const existingEmail = await USERS.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ success: false, message: "❌ This email is already registered" });
        }

        // 2. Check if employee_id exists
        const existingEmployee = await USERS.findOne({ employee_id });
        if (existingEmployee) {
            return res.status(400).json({ success: false, message: "❌ This employee ID is already taken" });
        }

        // 3. Check if passwords match
        if (password !== confirm_password) {
            return res.status(400).json({ success: false, message: "❌ Passwords do not match" });
        }

        // ✅ Create user
        const newUser = await USERS.create({
            first_name,
            last_name,
            email,
            department,
            employee_id,
            password,
            confirm_password,
            agree
        });

        return res.status(201).json({ success: true, message: "✅ Account created successfully!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "⚠️ Server error, please try again later." });
    }
});
// Get all courses
app.get("/courses", async (req, res) => {
    const courses = await Course.find();
    // map _id into id
    const formatted = courses.map(c => ({
        id: c._id,    // 👈 new field
        title: c.title,
        category: c.category,
        img: c.img,
        author: c.author,
        duration: c.duration,
        diff: c.diff
    }));
    res.json(formatted);
});
// Create course (admin only)
app.post("/courses", async (req, res) => {
    try {
        const { title, category, img, author, duration, diff } = req.body;

        if (!title || !category || !author || !img || !duration || !diff ) {
            return res.status(400).json({ error: "All fields required" });
        }

        const newCourse = new Course({ title, category, img, author, duration, evalution:0 , diff });
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create course" });
    }
});
// DELETE course by ID
app.delete("/courses/:id", async (req, res) => {
    try {
        const deleted = await Course.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Course not found" });
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete course" });
    }
});

app.put("/update-profile", async (req, res) => {
    try {
        const { email, password, updates } = req.body;

        const user = await USERS.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "❌ User not found" });
        }

        // ✅ Confirm password
        if (user.password !== password) {
            return res.status(401).json({ success: false, message: "❌ Incorrect password" });
        }

        // ✅ Update fields
        if (updates.first_name) user.first_name = updates.first_name;
        if (updates.last_name) user.last_name = updates.last_name;
        if (updates.department) user.department = updates.department;

        await user.save();

        res.json({
            success: true,
            message: "✅ Profile updated successfully",
            updatedUser: {
                email: user.email,
                name: user.first_name + " " + user.last_name,
                department: user.department,
                id: user.employee_id,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "⚠️ Server error" });
    }
});

app.put("/update-password", async (req, res) => {
    try {
        const { email,currentpass, newPassword } = req.body;

        // find user
        const user = await USERS.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // check current password
        if (!(currentpass===user.password)) return res.status(400).json({ message: "Incorrect current password" });

        // update
        user.password = newPassword;
        await user.save();

        res.json({
            success: true,
            message: "✅ Profile updated successfully",
            updatedUser: {
                email: user.email,
                password: newPassword,
                name: user.first_name + " " + user.last_name,
                department: user.department,
                id: user.employee_id,
                role: user.role
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(3001,()=>{
    console.log("server running on port 3001");
})
