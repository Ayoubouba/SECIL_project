import React from 'react'

const Notification = () => {
    return (
        <div data-state="active" data-orientation="horizontal" role="tabpanel"
             aria-labelledby="radix-:r2v:-trigger-notifications" id="radix-:r2v:-content-notifications" tabIndex="0"
             data-slot="tabs-content" className="flex-1 outline-none space-y-6 mb-5 ">
            <div data-slot="card"
                 className="mb-5 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md">
                <div data-slot="card-header"
                     className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <h4 data-slot="card-title" className="leading-none flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-bell h-5 w-5 mr-2 text-blue-600"
                             aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path
                                d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                        Notification Preferences
                    </h4>
                    <p data-slot="card-description" className="text-muted-foreground">Choose how you want to receive
                        notifications</p></div>
                <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div><p className="font-medium">Email Notifications</p><p
                                className="text-sm text-gray-300">Receive notifications via
                                email</p></div>
                            <button
                                type="button"
                                role="switch"
                                aria-checked="true"
                                data-state="checked"
                                value="on"
                                data-slot="switch"
                                className="
                                peer inline-flex h-6 w-12 shrink-0 items-center rounded-full
                                transition-colors duration-300
                                focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none
                                bg-gray-400
                                data-[state=checked]:bg-blue-900">
                              <span
                                  data-state="checked"
                                  data-slot="switch-thumb"
                                  className="
                                  block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                            </button>
                        </div>
                        <div data-orientation="horizontal" role="none" data-slot="separator-root"
                             className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                        <div className="flex items-center justify-between">
                            <div><p className="font-medium">Course Reminders</p><p
                                className="text-sm text-gray-300">Get reminded about upcoming
                                courses</p></div>
                            <button
                                type="button"
                                role="switch"
                                aria-checked="true"
                                data-state="checked"
                                value="on"
                                data-slot="switch"
                                className="
                                peer inline-flex h-6 w-12 shrink-0 items-center rounded-full
                                transition-colors duration-300
                                focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none
                                bg-gray-400
                                data-[state=checked]:bg-blue-900">
                              <span
                                  data-state="checked"
                                  data-slot="switch-thumb"
                                  className="
                                  block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                            </button>
                        </div>
                        <div data-orientation="horizontal" role="none" data-slot="separator-root"
                             className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                        <div className="flex items-center justify-between">
                            <div><p className="font-medium">Certificate Updates</p><p
                                className="text-sm text-gray-300">Notifications about new
                                certificates</p></div>
                            <button
                                type="button"
                                role="switch"
                                aria-checked="true"
                                data-state="checked"
                                value="on"
                                data-slot="switch"
                                className="
                                peer inline-flex h-6 w-12 shrink-0 items-center rounded-full
                                transition-colors duration-300
                                focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none
                                bg-gray-400
                                data-[state=checked]:bg-blue-900">
                              <span
                                  data-state="checked"
                                  data-slot="switch-thumb"
                                  className="
                                  block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                            </button>
                        </div>
                        <div data-orientation="horizontal" role="none" data-slot="separator-root"
                             className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                        <div className="flex items-center justify-between">
                            <div><p className="font-medium">System Updates</p><p
                                className="text-sm text-gray-300">Platform updates and maintenance
                                notices</p></div>
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
                                  block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300
                                  translate-x-0
                                  data-[state=checked]:translate-x-6">

                              </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Notification
