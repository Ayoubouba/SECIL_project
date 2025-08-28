import React, { useState } from 'react';

const SearchEngine = ({ searchText, setSearchText, category, setCategory, difficulty, setDifficulty }) => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const toggleMenu = (value) => {
        setOpen1(value === 1 ? prev => !prev : false);
        setOpen2(value === 2 ? prev => !prev : false);
        setOpen3(value === 3 ? prev => !prev : false);
    };

    const handleCategorySelect = (value) => {
        setCategory(value);
        setOpen1(false);
    };

    const handleDifficultySelect = (value) => {
        setDifficulty(value);
        setOpen2(false);
    };


    const categories = ['All', 'Safety', 'Production', 'Maintenance', 'Security'];
    const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    return (
        <div className="p-6 shadow-2xl rounded-2xl bg-white text-gray-700 w-full max-w-6xl mx-auto mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-4">

                {/* Search input */}
                <div className="md:col-span-3 lg:col-span-4 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search courses or instructors..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-10 h-11 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Category filter */}
                <div className="lg:col-span-2 relative">
                    <button
                        onClick={() => toggleMenu(1)}
                        className="w-full h-11 border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                        {category} <span className="text-gray-400">▼</span>
                    </button>
                    {open1 && (
                        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                            <ul className="max-h-60 overflow-y-auto">
                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => handleCategorySelect(cat)}
                                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Difficulty filter */}
                <div className="lg:col-span-2 relative">
                    <button
                        onClick={() => toggleMenu(2)}
                        className="w-full h-11 border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                        {difficulty} <span className="text-gray-400">▼</span>
                    </button>
                    {open2 && (
                        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-20">
                            <ul className="max-h-60 overflow-y-auto">
                                {difficulties.map((diff) => (
                                    <li
                                        key={diff}
                                        onClick={() => handleDifficultySelect(diff)}
                                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                                    >
                                        {diff}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
    export default SearchEngine;
