import React, {useState} from 'react'
import {toast} from "react-toastify";
import axios from "axios";
const CourseManagementCard = ({id,logo,title,author,stat="stats to be determined later",state,diff,category}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentState, setCurrentState] = useState(state || "active");

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const handleSelect = (value) => {
        setCurrentState(value);
        setDropdownOpen(false);
        // Optionally, send update to backend here
    };
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
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
                            <span data-slot="avatar" className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-12 w-12">
                                <span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-gray-300 text-blue-600">{logo}</span>
                            </span>
                <div>
                    <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{title}</h4>
                        {state==="active"?(
                            <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800">Active</span>
                        ):(
                            <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-yellow-100 text-yellow-800">Draft</span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">
                        by {author}.{category}.{diff}
                    </p>
                    <p className="text-xs text-gray-500">
                        {stat}
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-orange-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-eye h-4 w-4" aria-hidden="true">
                        <path
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
                <button data-slot="button"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-orange-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-square-pen h-4 w-4"
                         aria-hidden="true">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path
                            d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </svg>
                </button>
                <button type="button" role="combobox" aria-controls="radix-:rcg:" aria-expanded="false"
                        aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                        data-size="default"
                        onClick={toggleDropdown}
                        className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-32 h-8">
                    <span data-slot="select-value">{currentState.charAt(0).toUpperCase() + currentState.slice(1)}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                         aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
                {dropdownOpen && (
                    <div className="absolute w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        {["active", "draft"].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleSelect(item)}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                                    currentState === item ? "font-semibold" : ""
                                }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
                <button data-slot="alert-dialog-trigger"
                        onClick={handleDelete}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border hover:bg-red-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 text-red-600 hover:bg-red-50"
                        type="button" aria-haspopup="dialog" aria-expanded="false"
                        aria-controls="radix-:rch:" data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                         aria-hidden="true">
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default CourseManagementCard
