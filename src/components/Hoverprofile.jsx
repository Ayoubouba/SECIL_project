import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const HoverProfile = ({ imageSrc, label = "Profile" }) => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className=" m-2 relative shadow-2xs rounded-lg bg-white">
            {/* Profile Button */}
            <div
                className="flex items-center cursor-pointer overflow-hidden w-[150px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={toggleMenu}
            >
                <img
                    src={
                        imageSrc ||
                        "https://static.vecteezy.com/system/resources/previews/036/744/532/non_2x/user-profile-icon-symbol-template-free-vector.jpg"
                    }
                    alt={label}
                    className={`h-12 w-12 rounded-full object-cover transform transition-all duration-300 
            ${hovered ? "translate-x-[-20px]" : "translate-x-20"}`}
                />
                <span
                    className={`ml-2 text-gray-700 font-medium whitespace-nowrap transition-opacity duration-300 
            ${hovered ? "opacity-100" : "opacity-0"}`}
                >
          {label}
        </span>
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 right-0 z-10">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400">Settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400 ">Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500" onClick={() => navigate('/')}>
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HoverProfile;

