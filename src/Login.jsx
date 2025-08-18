import React from 'react'
import { useState } from "react";
import "./login.css"
import LoginForm from "./components/LoginForm.jsx";
import Createaccount from "./components/Createaccount.jsx";
const Login = () => {
    const [loginstate, setloginstate] = useState(true);
    return (
        <>
            <div className="w-full h-fit ">
                <div className="flex justify-start w-full h-fit border-b-2 shadow-2xl">
                    <div className="flex mt-3 ml-3" >
                        <img src="https://cimentsdegabes.com.tn/wp-content/uploads/2023/10/logo.png" alt="SECIL" className="w-12 h-12" />
                        <div className="flex flex-col justify-start items-center space-x-4 text-zinc-950 m-1 " >
                            <span className="text-xl text-left font-bold text-blue-800">SECIL</span>
                            <p className="text-xs  text-left text-gray-500 mt-0.5">Corporate Training Platform</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full h-fit rounded-2xl   bg-gradient-to-br from-blue-200 via-amber-50 to-red-200 to-100% ">
                    <div className="flex w-1/2 h-full justify-center items-center rounded-2xl   ">
                        <div className="flex flex-col items-center justify-start  w-[60%] ">
                            <div className="flex mt-3 ml-3" >
                                <img src="https://cimentsdegabes.com.tn/wp-content/uploads/2023/10/logo.png" alt="SECIL" className="w-12 h-12" />
                                <div className="flex flex-col justify-start items-center space-x-4 text-zinc-950 m-1 " >
                                    <span className="text-xl text-left font-bold text-blue-800">SECIL</span>
                                    <p className="text-xs  text-left text-gray-500 mt-0.5">Corporate Training Platform</p>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Advance Your Professional Skills</h2>
                            <p className="text-xs  text-left text-gray-500 mt-0.5">Access comprehensive training programs designed for professional development and corporate excellence at SECIL.</p>
                            <div className="flex justify-evenly flex-row mt-2 w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                    <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-building h-5 w-5 text-blue-600 mx-auto mb-2"
                                             aria-hidden="true">
                                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                            <path d="M9 22v-4h6v4"></path>
                                            <path d="M8 6h.01"></path>
                                            <path d="M16 6h.01"></path>
                                            <path d="M12 6h.01"></path>
                                            <path d="M12 10h.01"></path>
                                            <path d="M12 14h.01"></path>
                                            <path d="M16 10h.01"></path>
                                            <path d="M16 14h.01"></path>
                                            <path d="M8 10h.01"></path>
                                            <path d="M8 14h.01"></path>
                                        </svg>
                                        <h3 className="font-semibold text-gray-900">Enterprise Ready</h3>
                                        <p className="text-sm text-gray-500">Built for corporate
                                        environments</p>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-users h-5 w-5 text-orange-600 mx-auto mb-2"
                                             aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <h3 className="font-semibold text-gray-900">Team Learning</h3><p
                                        className="text-sm text-gray-500">Collaborative training
                                        programs</p>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="lucide lucide-award h-5 w-5 text-blue-600 mx-auto mb-2"
                                             aria-hidden="true">
                                            <path
                                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                        <h3 className="font-semibold text-gray-900">Certifications</h3>
                                        <p className="text-sm text-gray-500">Industry-recognized
                                        credentials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/2 h-full justify-center items-center rounded-2xl  ">
                        {loginstate ? (
                            <LoginForm Onloginchange={setloginstate} />
                        ) : (
                            <Createaccount Onloginchange={setloginstate} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
