import React, {useState} from 'react'

const SearchEngine = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const toggleMenu = (value) => {
        setOpen1(value === 1 ? prev => !prev : false);
        setOpen2(value === 2 ? prev => !prev : false);
        setOpen3(value === 3 ? prev => !prev : false);
    };
    return (
        <>
            <div data-slot="card-content" className="[&amp;:last-child]:pb-8 p-6 shadow-2xl rounded-2xl text-gray-500 w-[80%] mt-5  ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                    <div className="lg:col-span-4">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                 aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                            </svg>
                            <input data-slot="input"
                                   className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:border-2 focus-visible:shadow-2xl aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 h-11 "
                                   placeholder="Search courses or instructors..." /></div>
                    </div>
                    <div className="lg:col-span-2  relative">
                        <button type="button" role="combobox" aria-controls="radix-:r10:" aria-expanded="false"
                                aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                                data-size="default"
                                onClick={()=>{toggleMenu(1)}}
                                className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-11">
                            <span data-slot="select-value" className="pointer-events-none">All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                                 aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        {open1 && (
                            <div className="absolute mt-2 w-fit bg-white shadow-lg rounded-lg border border-gray-200 right-0 z-10">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400">Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400 ">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-2 relative">
                        <button type="button" role="combobox" aria-controls="radix-:r11:" aria-expanded="false"
                                aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                                data-size="default"
                                className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-11"
                                onClick={()=>{toggleMenu(2)}}
                        >
                            <span data-slot="select-value" className="pointer-events-none">All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                                 aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        {open2 && (
                            <div className="absolute mt-2 w-fit bg-white shadow-lg rounded-lg border border-gray-200 right-0 z-10">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400">Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400 ">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-2 relative">
                        <button type="button" role="combobox" aria-controls="radix-:r12:" aria-expanded="false"
                                aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                                data-size="default"
                                onClick={()=>{toggleMenu(3)}}
                                className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-11">
                            <span data-slot="select-value" className="pointer-events-none">Newest</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50"
                                 aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        {open3 && (
                            <div className="absolute mt-2  bg-white shadow-lg rounded-lg border border-gray-200 right-0 z-10 w-fit">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400">Settings</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-indigo-400 ">Profile</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-2 flex space-x-2">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-grid3x3 lucide-grid-3x3 h-4 w-4"
                                 aria-hidden="true">
                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                <path d="M3 9h18"></path>
                                <path d="M3 15h18"></path>
                                <path d="M9 3v18"></path>
                                <path d="M15 3v18"></path>
                            </svg>
                        </button>
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-orange-500 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="lucide lucide-list h-4 w-4 " aria-hidden="true">
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
        </>
    )
}
export default SearchEngine
