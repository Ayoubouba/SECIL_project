import React from 'react'
import Cookies from "js-cookie";

const Profile = () => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const role=user?.role || "user";
    return (
        <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex flex-col gap-2 h-fit p-2">
            <div data-state="active" data-orientation="horizontal" role="tabpanel"
                 aria-labelledby="radix-:r2v:-trigger-profile" id="radix-:r2v:-content-profile" tabIndex="0"
                 data-slot="tabs-content" className="flex-1 outline-none space-y-6 h-fit ">
                <div data-slot="card"
                     className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-2xl pb-5">
                    <div data-slot="card-header"
                         className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 h-fit p-2 pb-2">
                        <div className="flex items-center justify-between">
                            <div><h4 data-slot="card-title" className="leading-none text-black font-bold">Personal Information</h4><p
                                data-slot="card-description" className="text-muted-foreground text-gray-500">Update your personal
                                details and contact information</p></div>
                            <button data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-blue-600 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-square-pen h-4 w-4 mr-2"
                                     aria-hidden="true">
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path
                                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                </svg>
                                Edit
                            </button>
                        </div>
                    </div>
                    <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 space-y-6 h-fit">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit ">
                            <div className="space-y-2"><label data-slot="label"
                                                              className="flex text-black items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="firstName">First Name</label>
                                <input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="firstName" disabled="" value="Demo"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className="flex text-black items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="lastName">Last Name</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="lastName" disabled="" value="User"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className=" text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="email">Email Address</label>
                                <div className="flex items-center space-x-2"><input type="email" data-slot="input"
                                                                                    className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 flex-1 bg-gray-50"
                                                                                    id="email" disabled=""
                                                                                    value="demo@secil.pt"/><span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-check h-3 w-3 mr-1"
                                    aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>Verified</span></div>
                            </div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className=" text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="phone">Phone Number</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="phone" disabled="" value="+351 912 345 678"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className=" text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="department">Department</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="department" disabled="" value="Information Technology"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className=" text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="jobTitle">Job Title</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="jobTitle" disabled="" value="System Administrator"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className=" text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="employeeId">Employee ID</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 bg-gray-50"
                                id="employeeId" disabled="" value="SECIL-DEMO-001"/></div>
                            <div className="space-y-2"><label data-slot="label"
                                                              className="text-black flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                              htmlFor="location">Location</label><input
                                data-slot="input"
                                className="text-gray-500 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11"
                                id="location" disabled="" value="Outão Plant"/></div>
                        </div>
                    </div>
                </div>
                {role==="admin"&&(
                    <div data-slot="card"
                         className="text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md bg-gradient-to-r to-orange-500 from-orange-100">
                        <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
                            <div className="flex items-center h-fit w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-shield h-8 w-8 text-orange-800"
                                     aria-hidden="true">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                                <div><h3 className="font-semibold text-orange-700">Administrator
                                    Access</h3><p className="text-sm text-orange-700/80">You have
                                    administrative privileges for the SECIL training platform</p></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                 aria-labelledby="radix-:r2v:-trigger-security" id="radix-:r2v:-content-security" tabIndex="0"
                 data-slot="tabs-content" className="flex-1 outline-none space-y-6" hidden=""></div>
            <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                 aria-labelledby="radix-:r2v:-trigger-learning" id="radix-:r2v:-content-learning" tabIndex="0"
                 data-slot="tabs-content" className="flex-1 outline-none space-y-6" hidden=""></div>
            <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                 aria-labelledby="radix-:r2v:-trigger-notifications" id="radix-:r2v:-content-notifications" tabIndex="0"
                 data-slot="tabs-content" className="flex-1 outline-none space-y-6" hidden=""></div>
            <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                 aria-labelledby="radix-:r2v:-trigger-preferences" id="radix-:r2v:-content-preferences" tabIndex="0"
                 data-slot="tabs-content" className="flex-1 outline-none space-y-6" hidden=""></div>
        </div>
    )
}
export default Profile
