import React, {useState} from 'react'
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import Security from "./components/Security.jsx";
import Footer from "./components/Footer.jsx";
import Learning from "./components/Learning.jsx";
import Notification from "./components/Notification.jsx";
import Parameters from "./components/Parameters.jsx";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Settingpage = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const name = user?.name || "Guest";
    const [firstName, lastName] = name.split(" ");
    const initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
    const navigate = useNavigate();
    return (
       <>
           <div>
               <Navbar/>
           </div>
           <div className="flex flex-col w-full h-fit pl-28 pr-28  bg-gradient-to-br from-blue-200 via-amber-50 to-red-100 to-100%">
               <div className="flex justify-between items-center gap-2  w-full h-fit">
                   <div>
                       <div className="flex items-center gap-2 ">
                           <button data-slot="button"
                                   className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-blue-600 text-blue-600 hover:bg-blue-300 hover:text-amber-50"
                                    onClick={()=>navigate("/home")}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-chevron-left h-4 w-4 mr-2"
                                    aria-hidden="true">
                                   <path d="m15 18-6-6 6-6"></path>
                               </svg>
                               Back to Dashboard
                           </button>
                           <div className="gap-0">
                               <h1 className="text-2xl font-bold text-gray-900 text-left leading-tight">Account Settings</h1>
                               <p className="text-gray-400 mt-1 text-sm">
                                   Manage your profile, security, and
                               learning preferences
                               </p>
                           </div>
                       </div>
                   </div>
                   <div className="m-5">
                       <span data-slot="avatar"
                             className="relative flex size-10 shrink-0 overflow-hidden rounded-full h-16 w-16 border-4 border-blue-400"><span
                           data-slot="avatar-fallback"
                           className="flex size-full items-center justify-center rounded-full bg-blue-900 text-white text-xl">{initials}</span>
                       </span>
                   </div>
               </div>
               <div className="flex w-full h-fit justify-between gap-5">
                   <div>
                       <div data-slot="card"
                            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md sticky top-6 text-gray-500">
                           <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-0">
                               <div dir="ltr" data-orientation="vertical" data-slot="tabs"
                                    className="flex flex-col gap-2 w-full">
                                   <div role="tablist" aria-orientation="vertical" data-slot="tabs-list"
                                        className="text-muted-foreground items-center justify-center rounded-xl flex flex-col h-auto w-full bg-transparent p-2"
                                        tabIndex="0" data-orientation="vertical">
                                       <button
                                           type="button"
                                           role="tab"
                                           aria-selected="false"
                                           aria-controls="radix-:r2p:-content-profile"
                                           data-state="inactive"
                                           id="radix-:r2p:-trigger-profile"
                                           data-slot="tabs-trigger"
                                           className="inline-flex w-full items-center justify-start gap-1.5
                                            rounded-xl border border-transparent px-4 py-3
                                            text-sm font-medium text-foreground dark:text-muted-foreground
                                            transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
                                            [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
                                            data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600
                                            focus:bg-blue-200 focus:text-blue-900"
                                           onClick={() => setActiveTab("profile")}>
                                           <svg
                                               xmlns="http://www.w3.org/2000/svg"
                                               className="lucide lucide-user h-4 w-4 mr-3"
                                               viewBox="0 0 24 24"
                                               fill="none"
                                               stroke="currentColor"
                                               strokeWidth="2"
                                               strokeLinecap="round"
                                               strokeLinejoin="round"
                                           >
                                               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                               <circle cx="12" cy="7" r="4"></circle>
                                           </svg>
                                           Profile
                                       </button>
                                       <button
                                           type="button"
                                           role="tab"
                                           aria-selected="false"
                                           aria-controls="radix-:r2p:-content-profile"
                                           data-state="inactive"
                                           id="radix-:r2p:-trigger-profile"
                                           data-slot="tabs-trigger"
                                           className="inline-flex w-full items-center justify-start gap-1.5
                                            rounded-xl border border-transparent px-4 py-3
                                            text-sm font-medium text-foreground dark:text-muted-foreground
                                            transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
                                            [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
                                            data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600
                                            focus:bg-blue-200 focus:text-blue-900"
                                           onClick={() => setActiveTab("security")}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-shield h-4 w-4 mr-3" aria-hidden="true">
                                               <path
                                                   d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                           </svg>
                                           Security
                                       </button>
                                       <button
                                           type="button"
                                           role="tab"
                                           aria-selected="false"
                                           aria-controls="radix-:r2p:-content-profile"
                                           data-state="inactive"
                                           id="radix-:r2p:-trigger-profile"
                                           data-slot="tabs-trigger"
                                           className="inline-flex w-full items-center justify-start gap-1.5
                                            rounded-xl border border-transparent px-4 py-3
                                            text-sm font-medium text-foreground dark:text-muted-foreground
                                            transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
                                            [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
                                            data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600
                                            focus:bg-blue-200 focus:text-blue-900"
                                           onClick={() => setActiveTab("progress")}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-book-open h-4 w-4 mr-3" aria-hidden="true">
                                               <path d="M12 7v14"></path>
                                               <path
                                                   d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                           </svg>
                                           Learning Progress
                                       </button>
                                       <button
                                           type="button"
                                           role="tab"
                                           aria-selected="false"
                                           aria-controls="radix-:r2p:-content-profile"
                                           data-state="inactive"
                                           id="radix-:r2p:-trigger-profile"
                                           data-slot="tabs-trigger"
                                           className="inline-flex w-full items-center justify-start gap-1.5
                                            rounded-xl border border-transparent px-4 py-3
                                            text-sm font-medium text-foreground dark:text-muted-foreground
                                            transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
                                            [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
                                            data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600
                                            focus:bg-blue-200 focus:text-blue-900"
                                           onClick={() => setActiveTab("notification")}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-bell h-4 w-4 mr-3" aria-hidden="true">
                                               <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                               <path
                                                   d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                           </svg>
                                           Notifications
                                       </button>
                                       <button
                                           type="button"
                                           role="tab"
                                           aria-selected="false"
                                           aria-controls="radix-:r2p:-content-profile"
                                           data-state="inactive"
                                           id="radix-:r2p:-trigger-profile"
                                           data-slot="tabs-trigger"
                                           className="inline-flex w-full items-center justify-start gap-1.5
                                            rounded-xl border border-transparent px-4 py-3
                                            text-sm font-medium text-foreground dark:text-muted-foreground
                                            transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
                                            [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
                                            data-[state=active]:bg-blue-200 data-[state=active]:text-blue-600
                                            focus:bg-blue-200 focus:text-blue-900"
                                           onClick={() => setActiveTab("preference")}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-settings h-4 w-4 mr-3" aria-hidden="true">
                                               <path
                                                   d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                               <circle cx="12" cy="12" r="3"></circle>
                                           </svg>
                                           Preferences
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="flex w-full h-fit mb-5">
                       {activeTab ==="profile" && (
                           <Profile/>
                       )}
                       {activeTab ==="security" && (
                        <Security/>
                       )}
                       {activeTab ==="progress" && (
                           <Learning/>
                       )}
                       {activeTab ==="notification" && (
                           <Notification/>
                       )}
                       {activeTab==="preference" && (
                           <Parameters/>
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
export default Settingpage

