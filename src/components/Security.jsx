import React, {useState} from 'react'
import "./security.css"
import Cookies from "js-cookie";
import {toast} from "react-toastify";
import axios from "axios";

const Security = () => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    const [email] = useState(user?.email || "NA");
    const [password,setpassword] = useState("");
    const [newpass,setNewpass] = useState("");
    const [confirmnewpassword, setConfirmnewpassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleUpdatePassword = async () => {
        if (!password || !newpass || !confirmnewpassword) {
            toast.error("Please fill all fields");
            return;
        }

        if (newpass !== confirmnewpassword) {
            toast.error("New password and confirmation do not match");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.put("http://localhost:3001/update-password", {
                email,
                currentpass:password,
                newPassword: newpass,
            });

            toast.success(res.data.message || "Password updated successfully");
            setpassword("");
            setNewpass("");
            setConfirmnewpassword("");
            Cookies.set("user", JSON.stringify(res.data.updatedUser));
            setTimeout(()=>window.location.reload(), 1500);
        } catch (err) {
            toast.error("Something went wrong"+" "+err.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:col-span-3 w-full">
            <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex flex-col gap-2">
                <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                     aria-labelledby="radix-:r2v:-trigger-profile" id="radix-:r2v:-content-profile" tabIndex="0"
                     data-slot="tabs-content" className="flex-1 outline-none space-y-6" hidden="">
                </div>
                <div data-state="active" data-orientation="horizontal" role="tabpanel"
                     aria-labelledby="radix-:r2v:-trigger-security" id="radix-:r2v:-content-security" tabIndex="0"
                     data-slot="tabs-content" className="flex-1 outline-none space-y-6 pb-5">
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <h4 data-slot="card-title" className="leading-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-key h-5 w-5 mr-2 text-blue+600"
                                     aria-hidden="true">
                                    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                                    <path d="m21 2-9.6 9.6"></path>
                                    <circle cx="7.5" cy="15.5" r="5.5"></circle>
                                </svg>
                                Change Password
                            </h4>
                            <p data-slot="card-description" className="text-muted-foreground">Update your password to
                                keep your account secure</p></div>
                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2"><label data-slot="label"
                                                                  className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                                  htmlFor="currentPassword">Current Password</label>
                                    <div className="relative">
                                        <input type="password" data-slot="input"
                                                                     className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 pr-10"
                                                                     id="currentPassword"
                                                                     placeholder="Enter your current password"
                                                                     onChange={(e)=>setpassword(e.target.value)}
                                                                     />
                                    </div>
                                </div>
                                <div className="space-y-2"><label data-slot="label"
                                                                  className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                                  htmlFor="newPassword">New Password</label>
                                    <div className="relative">
                                        <input type="password" data-slot="input"
                                                                     className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 pr-10"
                                                                     id="newPassword"
                                                                     placeholder="Enter your new password"
                                                                     onChange={(e)=>setNewpass(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="space-y-2"><label data-slot="label"
                                                                  className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                                                  htmlFor="confirmPassword">Confirm New Password</label>
                                    <div className="relative"><input type="password" data-slot="input"
                                                                     className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 pr-10"
                                                                     id="confirmPassword"
                                                                     placeholder="Confirm your new password"
                                                                    onChange={(e)=>setConfirmnewpassword(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <button data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-blue-600 hover:bg-blue-800"
                                    onClick={handleUpdatePassword}
                                    disabled={loading}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-lock h-4 w-4 mr-2"
                                     aria-hidden="true">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                {loading ? "Updating..." : "Update Password"}
                            </button>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <h4 data-slot="card-title" className="leading-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-mail h-5 w-5 mr-2 text-blue-700"
                                     aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                                Email Verification
                            </h4>
                            <p data-slot="card-description" className="text-muted-foreground">Verify your email address
                                to enhance account security</p></div>
                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-mail h-5 w-5 text-gray-500"
                                         aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg>
                                    <div><p className="font-medium">{email}</p><p
                                        className="text-sm text-gray-300">Verified email
                                        address</p></div>
                                </div>
                                <span data-slot="badge"
                                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-green-100 text-green-800"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-check h-3 w-3 mr-1"
                                    aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>Verified</span></div>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <h4 data-slot="card-title" className="leading-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-smartphone h-5 w-5 mr-2 text-blue-700"
                                     aria-hidden="true">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                    <path d="M12 18h.01"></path>
                                </svg>
                                Two-Factor Authentication
                            </h4>
                            <p data-slot="card-description" className="text-muted-foreground">Add an extra layer of
                                security to your account</p></div>
                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 rounded-full bg-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="lucide lucide-shield h-5 w-5 text-gray-400" aria-hidden="true">
                                            <path
                                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        </svg>
                                    </div>
                                    <div><p className="font-medium">Two-Factor Authentication Disabled</p><p
                                        className="text-sm text-gray-300">Enhance your security
                                        with 2FA</p></div>
                                </div>
                                <button type="button" role="switch" aria-checked="false" data-state="unchecked"
                                        value="on" data-slot="switch"
                                        className="peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
                                    <span data-state="unchecked" data-slot="switch-thumb"
                                          className="bg-card dark:data-[state=unchecked]:bg-card-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-header"
                             className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                            <h4 data-slot="card-title" className="leading-none flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-settings h-5 w-5 mr-2 text-blue-600"
                                     aria-hidden="true">
                                    <path
                                        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                Security Preferences
                            </h4>
                            <p data-slot="card-description" className="text-muted-foreground">Configure additional
                                security settings</p></div>
                        <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div><p className="font-medium">Login Notifications</p><p
                                    className="text-sm text-gray-500">Get notified of new login
                                    attempts</p></div>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked="true"
                                    data-state="unchecked"
                                    value="on"
                                    data-slot="switch"
                                    className="
                                peer inline-flex h-6 w-12 shrink-0 items-center rounded-full
                                transition-colors duration-300
                                focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none
                                bg-gray-400
                                data-[state=checked]:bg-blue-900">
                              <span
                                  data-state="unchecked"
                                  data-slot="switch-thumb"
                                  className="
                                  block h-5 w-5 rounded-full bg-white shadow-lg transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                                </button>
                            </div>
                            <div data-orientation="horizontal" role="none" data-slot="separator-root"
                                 className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                            <div className="flex items-center justify-between">
                                <div><p className="font-medium">Device Trust</p><p
                                    className="text-sm text-gray-500">Remember trusted devices</p>
                                </div>
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked="true"
                                    data-state="unchecked"
                                    value="on"
                                    data-slot="switch"
                                    className="
                                peer inline-flex h-6 w-12 shrink-0 items-center rounded-full
                                transition-colors duration-300
                                focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none
                                bg-gray-400
                                data-[state=checked]:bg-blue-900">
                              <span
                                  data-state="unchecked"
                                  data-slot="switch-thumb"
                                  className="
                                  block h-5 w-5 rounded-full bg-white shadow-lg transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Security
