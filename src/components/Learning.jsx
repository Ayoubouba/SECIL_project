import React from 'react'

const Learning = () => {
    return (
        <div data-state="active" data-orientation="horizontal" role="tabpanel"
             aria-labelledby="radix-:r2v:-trigger-learning" id="radix-:r2v:-content-learning" tabIndex="0"
             data-slot="tabs-content" className="flex-1 outline-none space-y-6 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-fit">
                <div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-blue-100 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-book-open h-6 w-6 text-blue-600" aria-hidden="true">
                                        <path d="M12 7v14"></path>
                                        <path
                                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-gray-500">Courses Completed</p><p
                                    className="text-2xl font-bold text-gray-900">8</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-green-100 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-clock h-6 w-6 text-green-600"
                                         aria-hidden="true">
                                        <path d="M12 6v6l4 2"></path>
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-gray-500">Learning Hours</p><p
                                    className="text-2xl font-bold text-gray-900">85</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-3 rounded-xl border-0 shadow-lg ">
                        <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6 ">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-orange-100 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-award h-6 w-6 text-orange-600"
                                         aria-hidden="true">
                                        <path
                                            d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                        <circle cx="12" cy="8" r="6"></circle>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-gray-500">Certifications</p><p
                                    className="text-2xl font-bold text-gray-900">3</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div data-slot="card"
                         className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                        <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-purple-100 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-calendar h-6 w-6 text-purple-600" aria-hidden="true">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </div>
                                <div><p className="text-sm text-gray-500">Current Streak</p><p
                                    className="text-2xl font-bold text-gray-900">12 days</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                <div data-slot="card-header"
                     className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <h4 data-slot="card-title" className="leading-none">Recent Courses</h4><p
                    data-slot="card-description" className="text-muted-foreground">Your latest learning activities</p>
                </div>
                <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1"><h4 className="font-medium">Safety Management Leadership</h4><p
                                className="text-sm text-gray-500">Last accessed: 2024-01-20</p>
                            </div>
                            <div className="w-32">
                                <div className="flex items-center justify-between mb-1"><span
                                    className="text-sm text-gray-500">100%</span></div>
                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate"
                                     data-max="100" data-slot="progress"
                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                    <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                         className="bg-primary h-full w-full flex-1 transition-all"
                                         ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1"><h4 className="font-medium">Quality Control Standards</h4><p
                                className="text-sm text-gray-500">Last accessed: 2024-01-15</p>
                            </div>
                            <div className="w-32">
                                <div className="flex items-center justify-between mb-1"><span
                                    className="text-sm text-gray-500">75%</span></div>
                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate"
                                     data-max="100" data-slot="progress"
                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                    <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                         className="bg-primary h-full w-[75%] flex-1 transition-all"
                                         ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex-1"><h4 className="font-medium">Environmental Sustainability</h4><p
                                className="text-sm text-gray-500">Last accessed: 2024-01-10</p>
                            </div>
                            <div className="w-32">
                                <div className="flex items-center justify-between mb-1"><span
                                    className="text-sm text-gray-500 ">45%</span></div>
                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate"
                                     data-max="100" data-slot="progress"
                                     className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2">
                                    <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                         className="bg-primary h-full w-[45%] flex-1 transition-all"
                                         ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-lg">
                <div data-slot="card-header"
                     className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <h4 data-slot="card-title" className="leading-none">Achievements</h4><p data-slot="card-description"
                                                                                            className="text-muted-foreground">Your
                    learning milestones and accomplishments</p></div>
                <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            className="p-4 rounded-lg border-2 border-blue-600 bg-blue-200"
                            >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-blue-600 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-shield h-5 w-5"
                                         aria-hidden="true">
                                        <path
                                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    </svg>
                                </div>
                                <div><h4 className="font-medium text-blue-600">Safety Champion</h4>
                                    <p className="text-sm text-gray-500">Completed all safety
                                        courses</p></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-check h-5 w-5 text-blue-600 ml-auto"
                                     aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="p-4 rounded-lg border-2 border-blue-600 bg-blue-200"
                            >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-blue-600 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-calendar h-5 w-5"
                                         aria-hidden="true">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg>
                                </div>
                                <div><h4 className="font-medium text-blue-600">Learning Streak</h4>
                                    <p className="text-sm text-gray-500">30 days continuous
                                        learning</p></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-check h-5 w-5 text-blue-600 ml-auto"
                                     aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="p-4 rounded-lg border-2 border-blue-600 bg-blue-200"
                            >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-blue-600 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-award h-5 w-5"
                                         aria-hidden="true">
                                        <path
                                            d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                        <circle cx="12" cy="8" r="6"></circle>
                                    </svg>
                                </div>
                                <div><h4 className="font-medium text-blue-600">Quality Expert</h4>
                                    <p className="text-sm text-gray-500">Quality control
                                        certification</p></div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-check h-5 w-5 text-blue-600 ml-auto"
                                     aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50"
                             >
                            <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-full bg-gray-300 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="lucide lucide-user h-5 w-5"
                                         aria-hidden="true">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div><h4 className="font-medium text-gray-500">Team Leader</h4><p
                                    className="text-sm text-gray-500">Leadership course
                                    completion</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Learning
