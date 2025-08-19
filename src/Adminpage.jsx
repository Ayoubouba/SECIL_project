import React, {useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Statcard from "./components/Statcard.jsx";
import CourseManagement from "./components/CourseManagement.jsx";
import UserManagement from "./components/UserManagement.jsx";
import {toast} from "react-toastify";

const Adminpage = () => {
    const [activeTab, setActiveTab] = useState("overview");// default tab
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        img: "",
        author: "",
        duration: "",
        evalution: "",
        diff: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCourseCreate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newCourse = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("http://localhost:3001/courses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCourse),
            });

            if (res.ok) {
                setShowModal(false);
                toast.success("✅ Course created successfully.!");
                setTimeout(()=>window.location.reload(), 1500);
            } else {
                toast.error( "❌ Course creation failed!");
            }
        } catch (error) {
            console.error("Error creating course:", error);
            toast.error( "⚠️ Something went wrong!");
        }
    };
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className="w-60% h-fit pl-40 pr-40 pt-10 bg-gradient-to-br from-blue-200 via-amber-50 to-red-100 to-100%">
                <div className="flex items-center justify-between mb-8 w-full h-fit">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 text-left">Admin Dashboard</h1>
                        <p className="text-gray-400 mt-1 text-left">
                            Manage SECIL training programs and monitor
                            learning progress
                        </p>
                    </div>
                    <button data-slot="dialog-trigger"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-blue-700 hover:bg-blue-900"
                            type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r5b:"
                            data-state="closed"
                            onClick={() => setShowModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-plus h-4 w-4 mr-2" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        Create Course
                    </button>
                    {showModal && (
                        <div className="fixed inset-0 bg-gray-50 bg-opacity-30 flex justify-center items-center z-50">
                            <div className="bg-white bg-opacity-95 p-6 rounded-lg w-80 text-black shadow-lg backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-4 text-center">Create Course</h3>
                                <form onSubmit={handleCourseCreate} className="flex flex-col gap-4">
                                    {[
                                        { name: "title", label: "Title", type: "text" },
                                        { name: "category", label: "Category", type: "text" },
                                        { name: "img", label: "Image URL", type: "text" },
                                        { name: "author", label: "Author", type: "text" },
                                        { name: "duration", label: "Duration", type: "text" },
                                    ].map((field) => (
                                        <div key={field.name} className="relative w-full">
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                id={field.name}
                                                placeholder=" "
                                                required
                                                className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 text-sm text-gray-900 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none focus:shadow-md bg-white bg-opacity-90"
                                            />
                                            <label
                                                htmlFor={field.name}
                                                className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                {field.label}
                                            </label>
                                        </div>
                                    ))}

                                    {/* Difficulty Dropdown */}
                                    <div className="relative w-full">
                                        <select
                                            name="diff"
                                            id="diff"
                                            required
                                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none focus:shadow-md bg-white bg-opacity-90"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Difficulty</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                    </div>

                                    <div className="flex justify-end gap-2 mt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 border rounded hover:bg-gray-100"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
                    <Statcard title={"Total Courses"} SVG={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" className="lucide lucide-book-open h-6 w-6 text-blue-600"
                                                                aria-hidden="true">
                        <path d="M12 7v14"></path>
                        <path
                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>} number={"3"} />
                    <Statcard title={"Active Students"} number={"2"} SVG={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" className="lucide lucide-users h-6 w-6 text-green-600"
                             aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                    </svg>}/>
                    <Statcard title={"Completion Rate"} number={"84%"} SVG={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round"
                             className="lucide lucide-trending-up h-6 w-6 text-orange-600" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                    }/>
                    <Statcard title={"Certificates Issued"} number={"17"} SVG={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" className="lucide lucide-award h-6 w-6 text-purple-600"
                             aria-hidden="true">
                            <path
                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                        </svg>
                    }/>
                </div>
                <div className=" flox-col items-center w-80% h-fit  text-gray-700 p-5 ">
                    <div role="tablist" aria-orientation="horizontal" data-slot="tabs-list"
                         className="bg-muted text-muted-foreground items-center justify-center rounded-xl p-[3px] grid w-full grid-cols-3 h-12"
                         tabIndex="0" data-orientation="horizontal" >
                        <button type="button" role="tab" aria-selected="false"
                                aria-controls="radix-:r5h:-content-overview" data-state="inactive"
                                id="radix-:r5h:-trigger-overview" data-slot="tabs-trigger"
                                className="rounded-md hover:shadow-md hover:border-1 hover:border-b-blue-300 data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5  border border-transparent px-2 py-1 text-sm whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 font-medium"
                                tabIndex="-1" data-orientation="horizontal" data-radix-collection-item=""
                                onClick={() => setActiveTab("overview")}>Overview
                        </button>
                        <button type="button" role="tab" aria-selected="true"
                                aria-controls="radix-:r5h:-content-courses" data-state="active"
                                id="radix-:r5h:-trigger-courses" data-slot="tabs-trigger"
                                className=" rounded-md hover:shadow-md hover:border-1 hover:border-b-blue-300 data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5  border border-transparent px-2 py-1 text-sm whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 font-medium"
                                tabIndex="0" data-orientation="horizontal" data-radix-collection-item=""
                                onClick={() => setActiveTab("Course Management")}>Course Management
                        </button>
                        <button type="button" role="tab" aria-selected="false" aria-controls="radix-:r5h:-content-users"
                                data-state="inactive" id="radix-:r5h:-trigger-users" data-slot="tabs-trigger"
                                className=" rounded-md hover:shadow-md hover:border-1 hover:border-b-blue-300 data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5  border border-transparent px-2 py-1 text-sm whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 font-medium"
                                tabIndex="-1" data-orientation="horizontal" data-radix-collection-item=""
                                onClick={() => setActiveTab("User Management")}>User Management
                        </button>
                    </div>
                    <div className="w-full h-fit ">
                        {activeTab === "overview" && (
                            <div data-state="active" data-orientation="horizontal" role="tabpanel"
                                 aria-labelledby="radix-:r5h:-trigger-overview" id="radix-:r5h:-content-overview"
                                 tabIndex="0" data-slot="tabs-content" className="flex-1 outline-none space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md">
                                        <div data-slot="card-header"
                                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                            <h4 data-slot="card-title" className="leading-none text-black">Recent Activity</h4>
                                            <p data-slot="card-description" className="text-muted-foreground text-gray-400">Latest
                                            updates and course activities</p>
                                        </div>
                                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                                            <div className="space-y-4">
                                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                                    <div
                                                        className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                                                    <div className="flex-1"><p className="text-sm font-medium">New
                                                        enrollment</p><p
                                                        className="text-sm text-gray-500">Safety
                                                        Management &amp; Leadership</p><p
                                                        className="text-xs text-gray-500">João
                                                        Silva • 2 hours ago</p></div>
                                                </div>
                                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                                    <div
                                                        className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                                                    <div className="flex-1"><p className="text-sm font-medium">Course
                                                        completed</p><p
                                                        className="text-sm text-gray-500">Quality
                                                        Control Standards</p><p
                                                        className="text-xs text-gray-500">Maria
                                                        Santos • 4 hours ago</p></div>
                                                </div>
                                                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                                    <div
                                                        className="w-2 h-2 bg-blue-800 rounded-full mt-2"></div>
                                                    <div className="flex-1"><p className="text-sm font-medium">New
                                                        course created</p><p
                                                        className="text-sm text-gray-500">Environmental
                                                        Sustainability</p><p
                                                        className="text-xs text-gray-500">Admin • 1
                                                        day ago</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-slot="card"
                                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md">
                                        <div data-slot="card-header"
                                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                                            <h4 data-slot="card-title" className="leading-none text-black text-bold">Top Performing
                                                Courses
                                            </h4>
                                            <p data-slot="card-description" className="text-muted-foreground text-gray-400">Highest rated and most
                                            enrolled courses
                                            </p>
                                        </div>
                                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                                            <div className="space-y-4">
                                                <div
                                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">1
                                                        </div>
                                                        <div><p className="font-medium text-sm">Cement Production
                                                            Excellence</p><p
                                                            className="text-xs text-gray-500">1234
                                                            enrolled</p></div>
                                                    </div>
                                                    <div className="text-right"><p
                                                        className="text-sm font-bold text-blue-600">★
                                                        4.9</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">2
                                                        </div>
                                                        <div><p className="font-medium text-sm">Safety
                                                            Management &amp; Leadership</p><p
                                                            className="text-xs text-gray-500">1876
                                                            enrolled</p></div>
                                                    </div>
                                                    <div className="text-right"><p
                                                        className="text-sm font-bold text-blue-600">★
                                                        4.8</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "Course Management" && (
                            <CourseManagement />
                        )}

                        {activeTab === "User Management" && (
                            <div>
                                <UserManagement />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
export default Adminpage
