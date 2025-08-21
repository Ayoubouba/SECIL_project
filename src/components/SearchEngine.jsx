import React, { useState, useEffect } from 'react';

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
        <div className="p-6 shadow-2xl rounded-2xl text-gray-500 w-[80%] mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                {/* Search input */}
                <div className="lg:col-span-4 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                    >
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search courses or instructors..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="pl-10 h-11 w-full border rounded-md px-3 py-2"
                    />
                </div>

                {/* Category filter */}
                <div className="lg:col-span-2 relative">
                    <button
                        onClick={() => toggleMenu(1)}
                        className="w-full border rounded-md px-3 py-2 flex justify-between items-center"
                    >
                        {category} <span>▼</span>
                    </button>
                    {open1 && (
                        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            <ul>
                                {categories.map((cat) => (
                                    <li
                                        key={cat}
                                        onClick={() => handleCategorySelect(cat)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
                        className="w-full border rounded-md px-3 py-2 flex justify-between items-center"
                    >
                        {difficulty} <span>▼</span>
                    </button>
                    {open2 && (
                        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            <ul>
                                {difficulties.map((diff) => (
                                    <li
                                        key={diff}
                                        onClick={() => handleDifficultySelect(diff)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {diff}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Third dropdown (keep as-is) */}
                <div className="lg:col-span-2 relative">
                    <button
                        onClick={() => toggleMenu(3)}
                        className="w-full border rounded-md px-3 py-2 flex justify-between items-center"
                    >
                        Newest <span>▼</span>
                    </button>
                    {open3 && (
                        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg border z-10">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* View buttons */}
                <div className="lg:col-span-2 flex space-x-2">
                    <button className="inline-flex items-center justify-center w-full text-sm font-medium h-8 rounded-md border bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                            <path d="M3 9h18"></path>
                            <path d="M3 15h18"></path>
                            <path d="M9 3v18"></path>
                            <path d="M15 3v18"></path>
                        </svg>
                    </button>
                    <button className="inline-flex items-center justify-center w-full text-sm font-medium h-8 rounded-md border bg-background text-foreground hover:bg-accent hover:text-accent-foreground gap-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                            <path d="M3 12h.01"></path>
                            <path d="M3 18h.01"></path>
                            <path d="M3 6h.01"></path>
                            <path d="M8 12h13"></path>
                            <path d="M8 18h13"></path>
                            <path d="M8 6h13"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchEngine;
