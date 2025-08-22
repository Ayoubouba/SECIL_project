import {useEffect, useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import './Home.css'
import Head from "./components/Head.jsx";
import Introduction from "./components/Introduction.jsx";
import Picture from "./components/Picture.jsx";
import {Categorie} from "./components/Categorie.jsx";
import Coursecard from "./components/Coursecard.jsx";
import Footer from "./components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import {BarChart3} from "lucide-react";
import { Shield, Factory, Wrench } from "lucide-react";
const Home = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/courses")
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error("Error fetching courses:", err));
    }, []);
    return (
        <>
            <div className= "flex  text-center justify-center w-full h-fit " >
                <Navbar/>
            </div>
            <div className= " flex justify-between  w-full h-fit bg-[#1e3a8a] p-2" >
                <Head/>
            </div>
            <div className=" flex justify-between  w-full h-fit  text-zinc-900 mt-3">
                <div className=" flex justify-center items-center  w-[45%] h-full rounded-3xl ">
                    <Introduction/>
                </div>
                <div className=" flex justify-center items-center  w-[45%] h-[90%] rounded-3xl m-3" >
                    <Picture/>
                </div>
            </div>
            <div className="text-zinc-900 flex justify-evenly w-full h-fit rounded-3xl mt-2 p-4">
                <Categorie
                    icon={<Shield className="w-12 h-12 text-blue-600 hover:scale-110 transition-transform" />}
                    title="Safety & Health"
                    para="Workplace safety and health protocols"
                    nb_courses={28}
                />
                <Categorie
                    icon={<Factory className="w-12 h-12 text-green-600 hover:scale-110 transition-transform" />}
                    title="Production"
                    para="Cement manufacturing processes"
                    nb_courses={35}
                />
                <Categorie
                    icon={<BarChart3 className="w-12 h-12 text-purple-600 hover:scale-110 transition-transform" />}
                    title="Quality Control"
                    para="Quality standards and testing"
                    nb_courses={22}
                />
                <Categorie
                    icon={<Wrench className="w-12 h-12 text-orange-600 hover:scale-110 transition-transform" />}
                    title="Maintenance"
                    para="Equipment and facility maintenance"
                    nb_courses={19}
                />
            </div>
            <div className=" text-zinc-900 flex justify-center flex-col items-start w-full h-fit rounded-3xl mt-2 ">
                <div className=" flex justify-between flex-row w-full ">
                    <div className="ml-5">
                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Featured Training Program </h2>
                        <p className="text-gray-600 text-lg">Essential courses for SECIL professionals</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="btn bg-orange-600 rounded-md hover:hover:bg-orange-700 px-8 py-4 text-lg font-semibold" onClick={() => navigate('/CoursePage')}>View all programs</button>
                    </div>
                </div>
                <div className=" flex justify-center  ">
                    {courses.map(course => (
                        <Coursecard
                            title={course.title}
                            category={course.category}
                            img={course.img}
                            author={course.author}
                            duration={course.duration}
                            evalution={course.evalution}
                            diff={course.diff}
                        />
                    ))}
                </div>
            </div>
            <div className="text-zinc-900 flex justify-center items-center w-full h-fit rounded-3xl mt-2  ">
                <section className="w-full h-full flex justify-center items-center mt-10">
                    <div className="flex justify-center flex-col items-center w-[70%] h-fit bg-blue-800 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-building h-16 w-16 mx-auto mb-6 text-orange-600"
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
                        <h1 className="text-3xl font-bold mb-4 text-amber-50">Ready to Advance Your Career at SECIL?</h1>
                        <p className="text-xl text-center opacity-90 mb-8 max-w-2xl mx-auto text-amber-50">Ready to Advance Your Career at SECIL?
                            Join your colleagues in continuous learning and professional development. Build the skills that drive our industry forward.
                        </p>
                        <div className="flex justify-between items-center w-50% gap-20 mb-5">
                            <button className="btn bg-orange-600 rounded-1xl">View My Learning Path</button>
                            <button className="btn bg-amber-50 hover:text-blue-700">Contact Training Team</button>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="text-zinc-900 flex justify-center items-center w-full h-[400px] rounded-3xl mt-2">
                <Footer/>
            </footer>
        </>
    )
}
export default Home
