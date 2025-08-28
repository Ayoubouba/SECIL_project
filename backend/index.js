import mongoose from "mongoose";

import express from "express";

import cookieParser from "cookie-parser";

import cors from "cors";

import USERS from "./models/USERS.js";

import Course from "./models/COURSES.js";

import Certificate from "./models/CERTIFICATES.js";
import COURSES from "./models/COURSES.js";
import Activity from "./models/ACTIVITIES.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/SECIL_database");

app.post("/logout", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await USERS.findOne({ email });
        if (user) {
            user.active = false;
            await user.save();
        }
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

app.post("/login", (req, res) => {
    const { email, password,first_name,last_name,department,employee_id,} = req.body;
    const user = USERS.findOne({ email })
        .then(user => {
            if(user){
                if(user.password === password){
                    user.active=true;
                    user.save();
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


// Get all certificates
app.get("/certificates", async (req, res) => {
    try {
        const certs = await Certificate.find()
            .populate("userId", "first_name last_name email")
            .populate("courseId", "title");

        res.json(certs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch certificates" });
    }
});

// Issue new certificate
app.post("/certificates", async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        const newCert = new Certificate({ userId, courseId });
        await newCert.save();

        res.status(201).json(newCert);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to issue certificate" });
    }
});

// Get all users
app.get("/users", async (req, res) => {
    try {
        const users = await USERS.find();

        // Optional: format for frontend
        const formatted = users.map(u => ({
            id: u._id,
            first_name: u.first_name,
            last_name: u.last_name,
            email: u.email,
            department: u.department,
            employee_id: u.employee_id,
            role: u.role,
            active: u.active ?? true  // 👈 assuming you might track active users
        }));

        res.json(formatted);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});
// delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {id_admin,password} = req.body;
        const user = await USERS.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        if (user.role === "admin") {
            return res.status(403).json({ error: "Admin users cannot be deleted" });
        }
        const admin=USERS.findOne({id_admin});
        if(password!==admin.password){
            return res.status(405).json({ error: "wrong password" });
        }
        await USERS.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete user" });
    }
});
//update user role
app.patch("/users/:id/role", async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        // Find the user being updated
        const user = await USERS.findOne({ employee_id: id });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Prevent role change if user is super admin
        if (user.role === "super admin") {
            return res.status(403).json({ error: "Super Admin role cannot be changed" });
        }

        user.role = role;
        await user.save();

        res.json({ role: user.role });
    } catch (err) {
        console.error("Error updating role:", err);
        res.status(500).json({ error: "Failed to update role" });
    }
});
// Get all courses
app.get("/courses", async (req, res) => {
    const courses = await COURSES.find();
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

        await Activity.create({
            type: "Course Created",
            user: author || "Admin",
            target: title,
        });

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

        // Log activity
        await Activity.create({
            type: "Course Deleted",
            user: "Admin",   // or fetch current logged in user
            target: deleted.title,
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete course" });
    }
});
//update profile
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
//update password
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
//get activities
app.get("/activities", async (req, res) => {
    try {
        const activities = await Activity.find()
            .sort({ timestamp: -1 })  // newest first
            .limit(3);                // last 3 modifications
        res.json(activities);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch activities" });
    }
});

//update course state
app.patch("/courses/:id", async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;

    if (!["active", "draft"].includes(state)) {
        return res.status(400).json({ error: "Invalid state value" });
    }

    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { state },
            { new: true } // return updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.json(updatedCourse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(3001,()=>{
    console.log("server running on port 3001");
})
