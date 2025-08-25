import React, {useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SearchEngine from "./components/SearchEngine.jsx";
import Courseshow from "./components/Courseshow.jsx";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const Coursepage = () => {
    const navigate = useNavigate();
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
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
    const role= user?.role || "user";
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('All');
    const [difficulty, setDifficulty] = useState('All');
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
            <div className="h-fit">
                <Navbar/>
            </div>
            <div className="flex justify-center  w-full h-fit pt-5 shadow-md rounded-lg bg-gradient-to-br from-blue-200 via-amber-50 to-red-100 to-100%">
                <section>
                    <div className="flex justify-between flex-row w-full h-fit">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-3 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-blue-700 text-blue-700 hover:bg-blue-300 hover:text-amber-50" onClick={() => navigate('/home')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-chevron-left h-4 w-4 mr-2"
                                 aria-hidden="true">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                            Back to Dashboard
                        </button>
                        {/* ✅ Button only for admins */}
                        {role === "admin"||role==="superAdmin" && (
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
                        )}
                    </div>
                    <div className="w-full h-fit flex flex-col justify-start items-center gap-0 p-5">
                        <h1 className="text-4xl font-bold mb-4 text-gray-900">All Training Programs</h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto text-center">Explore our comprehensive
                            catalog of professional development courses designed specifically for SECIL employees</p>
                    </div>
                </section>
            </div>
            {/* ✅ Modal for creating a course */}
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
            <hr/>
            <div className="flex justify-center items-center w-full h-fit mb-5 ">
                <SearchEngine searchText={searchText}
                              setSearchText={setSearchText}
                              category={category}
                              setCategory={setCategory}
                              difficulty={difficulty}
                              setDifficulty={setDifficulty}/>
            </div>
            <div className="flex    w-full h-fit p-5 bg-gradient-to-br from-blue-100 via-amber-50 to-red-100 to-100%">
                <Courseshow searchText={searchText}
                            setSearchText={setSearchText}
                            category={category}
                            difficulty={difficulty}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default Coursepage
