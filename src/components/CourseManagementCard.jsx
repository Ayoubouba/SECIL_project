import React, {useState} from 'react'
import {toast} from "react-toastify";
import axios from "axios";
const CourseManagementCard = ({id,logo,title,author,stat="stats to be determined later",state,diff,category}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentState, setCurrentState] = useState(state || "active");
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const handleSelect = async (value) => {
        setCurrentState(value); // update UI immediately
        setDropdownOpen(false);

        try {
            // Send update to backend
            await axios.patch(`http://localhost:3001/courses/${id}`, {
                state: value
            });

            toast.success(`Course status updated to "${value}"`);
        } catch (error) {
            // Rollback UI if API fails
            setCurrentState(state); // revert to previous state
            toast.error("Failed to update course status");
            console.error(error);
        }
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
                        {currentState==="active"?(
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
                        onClick={() => setShowModal(true)}
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
                    <span data-slot="select-value">{currentState}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                         aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
                {dropdownOpen && (
                    <div className="abolute  mt-1 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-10 right-0">
                        {["active", "draft"].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleSelect(item)}
                                className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                                    currentState === item ? "text-gray-500 font-semibold bg-gray-100" : ""
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
                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                        {/* Overlay click closes modal */}
                        <div
                            className="absolute inset-0"
                            onClick={() => setShowModal(false)}
                        ></div>

                        <div className="relative bg-white rounded-2xl shadow-2xl w-[500px] max-w-[95%] overflow-hidden animate-fadeInScale">
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                <h2 className="text-xl font-bold">{title}</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="text-white hover:text-gray-200"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Banner / Logo */}
                            <div className="flex justify-center items-center bg-gray-100 py-6">
        <span className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-300 text-2xl font-bold text-orange-600">
          {logo || "📘"}
        </span>
                            </div>

                            {/* Body */}
                            <div className="px-6 py-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <p className="text-gray-500">👤 Author</p>
                                    <p className="font-medium">{author}</p>

                                    <p className="text-gray-500">📂 Category</p>
                                    <p className="font-medium">{category}</p>

                                    <p className="text-gray-500">🎯 Difficulty</p>
                                    <p className="font-medium capitalize">{diff}</p>

                                    <p className="text-gray-500">📌 Status</p>
                                    <p
                                        className={`font-medium ${
                                            currentState === "active"
                                                ? "text-green-600"
                                                : "text-yellow-600"
                                        }`}
                                    >
                                        {currentState}
                                    </p>

                                    <p className="text-gray-500">📊 Stats</p>
                                    <p className="font-medium">{stat}</p>
                                </div>

                                {/* Extra Description (placeholder for now) */}
                                <div className="mt-4">
                                    <h3 className="font-semibold text-gray-700 mb-1">Course Description</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        This is a brief overview of the course. You can add more details here,
                                        such as course objectives, target audience, or duration.
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 flex justify-end space-x-3 border-t bg-gray-50">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => toast.info("Edit functionality coming soon")}
                                    className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default CourseManagementCard
