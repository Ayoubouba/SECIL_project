import React, {useState} from 'react'
import {toast} from "react-toastify";

const Usercard = ({id,email,name,state,employee_id,department,role,onToggleRole,onDeleteUser,}) => {
    const [firstName, lastName] = name.split(' ');
    const [showModal, setShowModal] = useState(false);
    const initials=firstName[0].toLocaleUpperCase()+lastName[0].toLocaleUpperCase();
    const handleDelete = () => {
        if(role==="superAdmin"){
            toast.error("super admin cant be deleted");
            return;
        }
        if (role === "admin") {
            toast.error("Admin users cannot be deleted!");
            return;
        }
        // Call the parent delete function
        onDeleteUser(id);
    };
    return (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-4">
                <span data-slot="avatar" className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-12 w-12">
                    <span data-slot="avatar-fallback" className="flex size-full items-center justify-center rounded-full bg-blue-200 text-blue-500">
                        {initials}
                    </span>
                </span>
                <div>
                    <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">
                            {name}
                        </h4>
                        {role ==="admin"&& (
                            <span data-slot="badge"
                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-orange-600 text-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-shield h-3 w-3 mr-1"
                                aria-hidden="true"><path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                Admin
                            </span>
                        )}
                        {role==="superAdmin"&& (
                            <span data-slot="badge"
                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-red-600 text-white"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-shield h-3 w-3 mr-1"
                                aria-hidden="true"><path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                Super Admin
                            </span>
                        )}
                        {state ?
                            <span data-slot="badge"
                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-green-100 text-green-600">
                                active
                            </span>
                            :
                            <span data-slot="badge"
                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-red-100 text-red-800">
                            inactive
                            </span>
                        }
                    </div>
                    <p className="text-sm text-gray-500">id:{employee_id}.{department}</p>
                    <p className="text-xs text-gray-400">stats to be implemented later</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button data-slot="button"
                        onClick={() => setShowModal(true)}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-orange-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-chart-column h-4 w-4"
                         aria-hidden="true">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                    </svg>
                </button>
                {showModal && (
                    <div className="fixed inset-0 z-40" onClick={() => setShowModal(false)}>
                        <div
                            role="dialog"
                            aria-describedby="radix-:r1b:"
                            aria-labelledby="radix-:r1a:"
                            data-state="open"
                            data-slot="dialog-content"
                            className={`
                                fixed top-[50%] left-[50%] z-50 grid w-full max-w-4xl max-h-[90vh]
                                translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg
                                duration-200 sm:max-w-lg overflow-y-auto
                                data-[state=open]:animate-in data-[state=closed]:animate-out
                                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                                data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                                bg-white
                                ${
                                role === "admin"
                                    ? "bg-gradient-to-br from-white via-orange-100 to-orange-300 shadow-[0_0_25px_5px_rgba(255,165,0,0.6)]"
                                    : role === "superAdmin"
                                        ? "bg-gradient-to-br from-white via-red-100 to-red-300 shadow-[0_0_25px_5px_rgba(255,0,0,0.6)]"
                                        : "bg-gradient-to-br from-blue-200 via-amber-50 to-red-100"
                                    }
                             `}
                            tabIndex="-1"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                        >
                        <div data-slot="dialog-header" className="flex flex-col gap-2 text-center sm:text-left"><h2
                            id="radix-:r1a:" data-slot="dialog-title"
                            className="text-lg leading-none font-semibold text-black">User Details &amp; Statistics</h2><p
                            id="radix-:r1b:" data-slot="dialog-description"
                            className="text-muted-foreground text-sm">Comprehensive view of user profile and learning
                            progress</p></div>
                        <div className="space-y-6 py-4">
                            <div className="flex items-start space-x-6"><span data-slot="avatar"
                                                                              className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20"><span
                                data-slot="avatar-fallback"
                                className="flex size-full items-center justify-center rounded-full bg-blue-200 text-blue-600 text-xl">{initials}</span></span>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h3 className="text-xl font-semibold">{name}</h3>
                                        {state ?
                                            <span data-slot="badge"
                                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-green-100 text-green-600">
                                                active
                                            </span>
                                            :
                                            <span data-slot="badge"
                                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-secondary/90 bg-red-100 text-red-800">
                                                inactive
                                            </span>
                                        }
                                        {role ==="admin"&& (
                                            <span data-slot="badge"
                                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-orange-600 text-white"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-shield h-3 w-3 mr-1"
                                                aria-hidden="true"><path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                                 Admin
                                            </span>
                                            )}
                                        {role==="superAdmin"&& (
                                            <span data-slot="badge"
                                                  className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-red-600 text-white"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-shield h-3 w-3 mr-1"
                                                aria-hidden="true"><path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                                 Super Admin
                                            </span>
                                            )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-mail h-4 w-4 text-gray-500"
                                                     aria-hidden="true">
                                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                </svg>
                                                <span>{email}</span></div>
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-phone h-4 w-4 text-gray-500"
                                                     aria-hidden="true">
                                                    <path
                                                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                                </svg>
                                                <span>phone numbre to be added</span></div>
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-map-pin h-4 w-4 text-gray-500"
                                                     aria-hidden="true">
                                                    <path
                                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                                    <circle cx="12" cy="10" r="3"></circle>
                                                </svg>
                                                <span>{department}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-calendar h-4 w-4 text-gray-500"
                                                     aria-hidden="true">
                                                    <path d="M8 2v4"></path>
                                                    <path d="M16 2v4"></path>
                                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                    <path d="M3 10h18"></path>
                                                </svg>
                                                <span>Joined 2020-03-15?</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-clock h-4 w-4 text-gray-500"
                                                     aria-hidden="true">
                                                    <path d="M12 6v6l4 2"></path>
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                </svg>
                                                <span>Last login 2024-01-25?</span></div>
                                            <div><span className="font-medium">ID:</span> {employee_id}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-orientation="horizontal" role="none" data-slot="separator-root"
                                 className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                            <div><h4 className="font-semibold mb-4">Learning Statistics</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div data-slot="card"
                                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-md p-4 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-book-open h-8 w-8 mx-auto mb-2 text-blue-600"
                                             aria-hidden="true">
                                            <path d="M12 7v14"></path>
                                            <path
                                                d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                        </svg>
                                        <div className="text-2xl font-bold">8</div>
                                        <div className="text-sm text-gray-500">Courses Completed
                                        </div>
                                    </div>
                                    <div data-slot="card"
                                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-md p-4 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-award h-8 w-8 mx-auto mb-2 text-orange-600"
                                             aria-hidden="true">
                                            <path
                                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                        <div className="text-2xl font-bold">3</div>
                                        <div className="text-sm text-gray-500">Certifications
                                            Earned
                                        </div>
                                    </div>
                                    <div data-slot="card"
                                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-md p-4 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-clock h-8 w-8 mx-auto mb-2 text-gray-500"
                                             aria-hidden="true">
                                            <path d="M12 6v6l4 2"></path>
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                        <div className="text-2xl font-bold">85</div>
                                        <div className="text-sm text-gray-500">Learning Hours</div>
                                    </div>
                                </div>
                            </div>
                            <div data-orientation="horizontal" role="none" data-slot="separator-root"
                                 className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                            <div><h4 className="font-semibold mb-4">Admin Actions</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button data-slot="button"
                                            onClick={() => onToggleRole(id, role === "admin" ? "user" : "admin")}
                                            className="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-orange-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 flex items-center justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-shield-check h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        <span>Make Admin</span>
                                    </button>
                                    <button data-slot="button" onClick={()=>handleDelete()}
                                            className="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-red-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 flex items-center justify-center space-x-2">
                                        <span>Deactivate Account</span></button>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() => setShowModal(false)}
                                className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-x">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                    </div>
                )}
                {role === "user" ? (
                    <button
                        data-slot="button"
                        onClick={() => onToggleRole(id, "admin")}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-orange-500 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-blue-600"
                    >
                        {/* User shield-check (blue) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-shield-check h-4 w-4" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>
                    </button>
                ) : role === "admin" ? (
                    <button
                        data-slot="button"
                        onClick={() => onToggleRole(id, "superAdmin")}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-orange-600 hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-orange-600"
                    >
                        {/* Admin shield (orange) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-shield h-4 w-4" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </button>
                ) : (
                    <button
                        data-slot="button"
                        onClick={() => onToggleRole(id, "user")}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-red-600 hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-red-600"
                    >
                        {/* SuperAdmin shield-star (red) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-shield-star h-4 w-4" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="M12 8l1.41 2.88L16.5 11l-2.25 2.12L15 16l-3-1.5L9 16l.75-2.88L7.5 11l3.09-.12L12 8z"></path>
                        </svg>
                    </button>
                )}
                <button
                    onClick={handleDelete}
                    data-slot="alert-dialog-trigger"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 text-red-600 hover:bg-red-50"
                    type="button" aria-haspopup="dialog" aria-expanded="false"
                    aria-controls="radix-:rh3:" data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-user-x h-4 w-4"
                         aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="17" x2="22" y1="8" y2="13"></line>
                        <line x1="22" x2="17" y1="8" y2="13"></line>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default Usercard
