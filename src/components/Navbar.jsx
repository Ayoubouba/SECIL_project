import React from 'react'
import "./Navbar.css"
import Hoverprofile from "./Hoverprofile.jsx";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
const Navbar = () => {
    const navigate = useNavigate();
    const role = Cookies.get("role");
    return (
        <div className="flex justify-between  w-full h-full shadow-gray-400 shadow-md ">
            <div className="flex justify-center m-1 p-2 gap-1">
                <div className="flex items-center flex-row space-x-4 w-fit ">
                    <img
                        src="https://cimentsdegabes.com.tn/wp-content/uploads/2023/10/logo.png"
                        alt="SECIL"
                        className="h-12 w-auto object-contain"
                    />
                    <div className="flex  flex-col items-center text-zinc-950 m-1" >
                        <span className="text-xl font-bold text-blue-600 text-center">SECIL</span>
                        <p className="text-xs text-gray-500 mt-0.5 text-center">Corporate Training Platform</p>
                    </div>
                </div>
                <div className="flex  justify-evenly w-[50%] gap-5">
                    <div className="flex items-center flex-row  w-fit ">
                        <button
                            className=" flex flex-row items-center gap-2 ml-2 w-fit h-full bg-white  text-orange-600  hover:bg-orange-600 hover:text-amber-50 hover:rounded-lg px-2 py-0 "
                            onClick={() => navigate('/home')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="lucide lucide-house h-4 w-4" aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            Home
                        </button>
                    </div>

                    <button
                        className=" flex flex-row items-center gap-2 bg-white w-fit h-full text-orange-600 hover:bg-orange-600 hover:text-amber-50 hover:rounded-lg px-2 py-0"
                        onClick={() => navigate('/CoursePage')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-library h-4 w-4" aria-hidden="true">
                            <path d="m16 6 4 14"></path>
                            <path d="M12 6v14"></path>
                            <path d="M8 8v12"></path>
                            <path d="M4 4v16"></path>
                        </svg>
                        Courses
                    </button>
                    {role==="admin"?(
                        <button
                            className=" flex flex-row items-center gap-2 bg-white w-fit h-full text-orange-600 hover:bg-orange-600 hover:text-amber-50 hover:rounded-lg px-2 py-0"
                            onClick={() => navigate('/Admin')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="lucide lucide-shield h-3 w-3 mr-1" aria-hidden="true">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">

                                </path>
                            </svg>
                            Admin
                        </button>
                    ): <div></div>
                    }

                </div>
            </div>
            <div>
                <div className="flex items-center space-x-3 mr-3 mt-2 ">
                    <Hoverprofile/>
                </div>
            </div>
        </div>
    )
}
export default Navbar
