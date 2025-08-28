import React, {useState} from 'react'
import "./coursecard.css"
import Cookies from "js-cookie";
import axios from "axios";
import {toast} from "react-toastify";
import { Trash2 } from "lucide-react";

const Coursecard = ({id,title,category,img,author,duration,evalution,diff}) => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const [role] = useState(user?.role || "user");
    const handleDelete = async () => {
        // show a toast with confirm buttons
        const toastId = toast(
            ({ closeToast }) => (
                <div className="flex flex-col space-y-2">
                    <span>Are you sure you want to delete "{title}"?</span>
                    <div className="flex space-x-2">
                        <button
                            onClick={async () => {
                                try {
                                    await axios.delete(`http://localhost:3001/courses/${id}`);
                                    toast.success(`Course "${title}" deleted!`);
                                    closeToast();
                                    setTimeout(()=>window.location.reload(), 2000);
                                } catch (err) {
                                    toast.error("Delete failed!");
                                    console.error(err);
                                }
                            }}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Yes
                        </button>
                        <button
                            onClick={closeToast}
                            className="bg-gray-300 px-3 py-1 rounded"
                        >
                            No
                        </button>
                    </div>
                </div>
            ),
            { autoClose: false }
        );
    };

    return (
        <>
            <div className=" relative flex flex-col items-left justify-center rounded-lg shadow-2xl  w-fit h-fit m-[2%] gap-0 ">
                <span className=" absolute  top-0 left-0 inline-flex items-center justify-center  border text-[8px] font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90  text-white mb-6   bg-orange-600 rounded-md hover:hover:bg-orange-700 m-2 px-0.5 py-0">
                    {diff}
                </span>
                {/* ✅ Delete button for Admins only */}
                {(role === "admin"|| role==="superAdmin") && (
                    <button
                        onClick={handleDelete}
                        className="absolute top-0 right-0 inline-flex items-center justify-center text-[12px] font-bold rounded-md gap-1.5 bg-red-500 hover:bg-red-700 active:bg-red-800 text-white px-2 py-1 transition-all duration-200 group"
                    >
                        <Trash2 className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                    </button>
                )}

                <img src={img} alt={title} className=" rounded-t-lg " />
                <div className="flex justify-between w-full h-fit mt-3 p-2">
                    <span data-slot="badge" className="inline-flex items-center justify-center border px-1 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent hover:bg-blue-800 text-amber-50 bg-blue-300 rounded-md">
                        {category}
                    </span>
                    <div className="rating">
                        <img src="https://media.istockphoto.com/id/1135769825/vector/star-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=6jMpeAqUVM2db6kdhzj-nxA52Sqk3ImpN-GP9lIeaXE=" alt="Star Icon" />
                        <p className="text-black">{evalution ? evalution.toFixed(1) : 'N/A'}</p>
                    </div>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900 leading-snug mt-5 p-2">{title}</h3>
                <h6 className="text-[14px] text-gray-500 mb-4 p-2">By {author}</h6>
                <div className=" flex justify-start flex-row p-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnIpxRBljKdiZwP8uadrNWONgLq0oywdO3A&s" alt="clock" className="w-4 h-4"/>
                    <span className="text-[10px] text-gray-500 mb-4">{duration}</span>
                </div>
                <div className="flex flex-row justify-end w-full ">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-[10px] font-bold  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-8 rounded-md gap-1.5 px-0 has-[>svg]:px-0 bg-blue-600 hover:bg-blue-800 text-amber-50 m-5 ">Enroll Now</button>
                </div>
            </div>
        </>
    )
}
export default Coursecard
