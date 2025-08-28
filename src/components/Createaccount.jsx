import React from 'react'
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Createaccount = ({Onloginchange}) => {
    const [Fname,setFname] = useState("");
    const [Lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [department,setDepartment] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("False");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/USERS", {
            first_name: Fname,
            last_name: Lname,
            email,
            department,
            employee_id: employeeId,
            password,
            confirm_password: ConfirmPassword,
            agree
        })
            .then(response => {
                if (response.data.success) {
                    toast.success("✅ account created successfully!");
                    // Optionally redirect after short delay
                    setTimeout(() => {Onloginchange(true);}, 1500);
                }else{
                    toast.error(response.data.message);
                }
            })
            .catch(error => {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("⚠️ Something went wrong. Please try again.");
                }
            });
    };
    return (
        <>
            <div className=" w-fit h-fit flex flex-col justify-center items-left rounded-2xl shadow-2xl  text-black p-7 gap-2">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
                    <p className="text-gray-500 text-center">Join SECIL's professional development platform
                    </p>
                </div>
                <div className="flex justify-center items-center min-h-screen  p-4 gap-2">
                    <form
                        onSubmit={handleSubmit}
                        className="p-8 shadow-lg w-full max-w-lg"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign up Form</h2>

                        {/* First + Last Name */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={Fname}
                                    placeholder="Enter first name"
                                    onChange={(e) => setFname(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={Lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    placeholder="Enter last name"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <label className="block mb-2 text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                            required
                        />

                        {/* Department */}
                        <label className="block mb-2 text-gray-700 font-medium">
                            Department
                        </label>
                        <select
                            name="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                            required
                        >
                            <option value="">Select Department</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Finance">Finance</option>
                        </select>

                        {/* Employee ID */}
                        <label className="block mb-2 text-gray-700 font-medium">
                            Employee ID
                        </label>
                        <input
                            type="text"
                            name="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            placeholder="Enter employee ID"
                            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                            required
                        />

                        {/* Password + Confirm Password */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={ConfirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm password"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Agree to Terms */}
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={agree}
                                onChange={(e) => setAgree("True")}
                                className="mr-2"
                                required
                            />
                            <label className="text-gray-700">
                                I agree to the terms and conditions
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <div className="text-center space-y-3 pt-4 border-t border-gray-200 gap-2">
                        <p className="text-sm text-gray-500">Already have an account
                            <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9 has-[&gt;svg]:px-3 p-0 text-blue-600 font-medium" onClick={() => Onloginchange(true)}>login</button></p>
                        <p className="text-sm text-gray-500">Need access? <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9 has-[&gt;svg]:px-3 p-0 text-blue-600 font-medium">Contact
                            IT Support</button></p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Createaccount
