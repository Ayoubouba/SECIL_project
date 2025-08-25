import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Head from "./components/Head.jsx";
import Introduction from "./components/Introduction.jsx";
import Picture from "./components/Picture.jsx";
import { Categorie } from "./components/Categorie.jsx";
import Footer from "./components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { BarChart3, Shield, Factory, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import CoursesCarousel from "./components/CoursesCarousel .jsx";

const Home = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/courses")
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Error fetching courses:", err));
    }, []);

    return (
        <>
            {/* Navbar */}
            <div className="flex text-center justify-center w-full h-fit sticky top-0 z-50 bg-white shadow">
                <Navbar />
            </div>

            {/* Scroll container */}
            <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [scroll-snap-stop:always]">
                {/* Section 1: Hero / Head */}
                <section className="snap-start flex justify-center items-center min-h-screen w-full">
                    <Head />
                </section>

                {/* Intro Section */}
                <section className="snap-start flex justify-center items-center min-h-screen w-full">
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between w-full h-fit text-zinc-900 mt-16 px-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }} // animate every time
                    >
                        <div className="flex justify-center items-center w-full lg:w-[45%] rounded-3xl mb-6 lg:mb-0">
                            <Introduction />
                        </div>
                        <motion.div
                            className="flex justify-center items-center w-full lg:w-[45%] rounded-3xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Picture />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Categories Section */}
                <section className="snap-start flex justify-center items-center min-h-screen w-full">
                    <motion.div
                        className="text-zinc-900 grid grid-cols-2 lg:grid-cols-4 gap-6 px-10 w-full h-fit mt-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: false, amount: 0.3 }} // animate on re-enter
                    >
                        <Categorie
                            icon={<Shield className="w-12 h-12 text-blue-600 group-hover:scale-125 transition-transform" />}
                            title="Safety & Health"
                            para="Workplace safety and health protocols"
                            nb_courses={28}
                        />
                        <Categorie
                            icon={<Factory className="w-12 h-12 text-green-600 group-hover:rotate-6 transition-transform" />}
                            title="Production"
                            para="Cement manufacturing processes"
                            nb_courses={35}
                        />
                        <Categorie
                            icon={<BarChart3 className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />}
                            title="Quality Control"
                            para="Quality standards and testing"
                            nb_courses={22}
                        />
                        <Categorie
                            icon={<Wrench className="w-12 h-12 text-orange-600 group-hover:-rotate-6 transition-transform" />}
                            title="Maintenance"
                            para="Equipment and facility maintenance"
                            nb_courses={19}
                        />
                    </motion.div>
                </section>

                {/* Featured Training Section */}
                <section className="snap-start flex justify-center items-center min-h-screen w-full">
                    <motion.div
                        className="text-zinc-900 flex flex-col items-start w-full h-fit rounded-3xl mt-20 px-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex justify-between w-full mb-6">
                            <div>
                                <h2 className="text-3xl font-bold mb-2 text-gray-900">Featured Training Program</h2>
                                <p className="text-gray-600 text-lg">Essential courses for SECIL professionals</p>
                            </div>
                            <button
                                className="btn bg-orange-600 rounded-md hover:bg-orange-700 px-8 py-4 text-lg font-semibold text-white shadow"
                                onClick={() => navigate("/CoursePage")}
                            >
                                View all programs
                            </button>
                        </div>
                        <div className="gap-6 w-full">
                            <CoursesCarousel courses={courses} />
                        </div>
                    </motion.div>
                </section>

                {/* Call to Action */}
                <section className="snap-start flex justify-center items-center min-h-screen w-full">
                    <motion.section
                        className="w-full flex justify-center items-center px-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex flex-col items-center w-full md:w-[70%] bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 shadow-lg text-white text-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
                                </svg>
                                <h1 className="text-2xl md:text-3xl font-bold">Advance Your Career at SECIL</h1>
                            </motion.div>

                            <p className="text-lg opacity-90 mb-8 max-w-2xl text-white">
                                Join your colleagues in continuous learning and professional growth.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                                >
                                    View My Learning Path
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition"
                                >
                                    Contact Training Team
                                </motion.button>
                            </div>
                        </div>
                    </motion.section>
                </section>

                {/* Footer */}
                <section className="snap-start flex justify-center items-center">
                    <footer className="text-zinc-900 flex justify-center items-center w-full h-fit rounded-3xl mt-20 bg-gray-50">
                        <Footer />
                    </footer>
                </section>
            </div>
        </>
    );
};

export default Home;
