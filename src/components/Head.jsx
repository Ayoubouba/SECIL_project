import React from 'react'
import "./Head.css"
import {useNavigate} from "react-router-dom";
const Head = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col  w-[50%] h-full ">
                <span className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 text-white mb-6 px-4 py-2 bg-orange-600  hover:hover:bg-orange-700 m-5">
                    SECIL Corporate Learning Platform
                </span>
                <h3 className="text-5xl font-bold mt-5 ml-5  leading-tight text-amber-50 ">
                    Excellence Through  <span className="text-orange-600">continuous Learning</span>
                </h3>
                <p className="text-x m-7 mb-8 opacity-90 max-w-lg leading-relaxed text-amber-50">
                    Comprehensive training programs designed to enhance skills, ensure safety, and drive operational excellence across all SECIL facilities.
                </p>
                <div className="flex justify-evenly rounded-3xl w-[100%] h-fit mt-5 ">
                    <button className="btn bg-orange-600 rounded-md hover:hover:bg-orange-700 px-8 py-4 text-lg font-semibold" onClick={() => navigate('/CoursePage')} >Explore Training Programs</button>
                    <button className="btn bg-orange-600 rounded-md hover:hover:bg-orange-800 px-8 py-4 text-lg font-semibold">Watch Safety Overview</button>
                </div>
            </div>
            <div className=" w-[50%] h-full ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-100% mt-10">
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div data-slot="card"
                             className="flex flex-col gap-6  border bg-white/10 border-white/20 text-white backdrop-blur-sm transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1
shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
                            <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-users h-8 w-8 mx-auto mb-3 text-[var(--color-corporate-orange)]"
                                     aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <div className="text-2xl font-bold mb-1">2,840</div>
                                <div className="text-sm opacity-80">SECIL Employees Trained</div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="flex flex-col gap-6 rounded-xl border bg-white/10 border-white/20 text-white backdrop-blur-sm transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1
shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
                            <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-clock h-8 w-8 mx-auto mb-3 text-[var(--color-corporate-orange)]"
                                     aria-hidden="true">
                                    <path d="M12 6v6l4 2"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <div className="text-2xl font-bold mb-1">18,650</div>
                                <div className="text-sm opacity-80">Training Hours Completed</div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="flex flex-col gap-6 rounded-xl border bg-white/10 border-white/20 text-white backdrop-blur-sm transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1
shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
                            <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-award h-8 w-8 mx-auto mb-3 text-[var(--color-corporate-orange)]"
                                     aria-hidden="true">
                                    <path
                                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                                <div className="text-2xl font-bold mb-1">1,420</div>
                                <div className="text-sm opacity-80">Certifications Earned</div>
                            </div>
                        </div>
                        <div data-slot="card"
                             className="flex flex-col gap-6  border bg-white/10 border-white/20 text-white backdrop-blur-sm transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1
shadow-md hover:shadow-2xl rounded-lg overflow-hidden">
                            <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-trending-up h-8 w-8 mx-auto mb-3 text-[var(--color-corporate-orange)]"
                                     aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                </svg>
                                <div className="text-2xl font-bold mb-1">87%</div>
                                <div className="text-sm opacity-80">Safety Incidents Reduced</div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Head
