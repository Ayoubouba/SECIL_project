import React from 'react'
import { useEffect, useState } from "react";
import Coursecard from "./Coursecard.jsx";

const Courseshow = ({ searchText, category, difficulty }) => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    useEffect(() => {
            fetch("http://localhost:3001/courses")
            .then(res => res.json())
            .then(data => {
                    setCourses(data);
                    setFilteredCourses(data);
            })
            .catch(err => console.error("Error fetching courses:", err));
    }, []);
    // ✅ Debounced search filter
    useEffect(() => {
        const handler = setTimeout(() => {
            if (!searchText.trim()) {
                setFilteredCourses(courses);
            } else {
                const lower = searchText.toLowerCase();
                setFilteredCourses(
                    courses.filter(course =>
                        course.title.toLowerCase().includes(lower) ||
                        course.author.toLowerCase().includes(lower) ||
                        course.category.toLowerCase().includes(lower)
                    )
                );
            }
            // ✅ category filter
            if (category !== 'All') {
                setFilteredCourses( courses.filter(course => course.category === category));
            }

            // ✅ difficulty filter (optional)
            if (difficulty !== 'All') {
                setFilteredCourses(courses.filter(course => course.diff === difficulty));
            }
        }, 1000); // debounce delay (100ms)

        return () => clearTimeout(handler); // cleanup if user keeps typing
    }, [searchText, courses, difficulty,category]);

    return (
        <>
            <div className="w-full h-fit">
                <div className="flex  flex-row justify-between mb-6 w-full">
                    <p className="text-gray-500">Showing {filteredCourses.length} courses</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-arrow-up-narrow-wide h-4 w-4" aria-hidden="true">
                            <path d="m3 8 4-4 4 4"></path>
                            <path d="M7 4v16"></path>
                            <path d="M11 12h4"></path>
                            <path d="M11 16h7"></path>
                            <path d="M11 20h10"></path>
                        </svg>
                        <span>Sorted by Newest</span>
                    </div>
                </div>
                <div className="flex flex-wrap w-full h-fit">
                    {filteredCourses.map(course => (
                        <Coursecard
                            key={course.id}
                            id={course.id}
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
        </>
    )
}
export default Courseshow
