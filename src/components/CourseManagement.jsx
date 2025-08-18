import React from 'react'
import CourseManagementCard from "./CourseManagementCard.jsx";

const CourseManagement = () => {
    return (
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-xl overflow-hidden">
            <div data-slot="card-header"
                 className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex items-center justify-between">
                    <div><h4 data-slot="card-title" className="leading-none text-zinc-950">Course Management</h4>
                        <p
                        data-slot="card-description" className="text-muted-foreground">Manage all training courses and
                        their content</p>
                    </div>
                    <div className="flex space-x-2">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-funnel h-4 w-4 mr-2"
                                 aria-hidden="true">
                                <path
                                    d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                            </svg>
                            Filter
                        </button>
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-download h-4 w-4 mr-2"
                                 aria-hidden="true">
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            Export
                        </button>
                    </div>
                </div>
            </div>
            <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                <CourseManagementCard
                    title={"Safety Management &amp; Leadership"}
                    logo={"S"}
                    author={"Dr. Carlos Silva • Safety • Intermediate"}
                    stat={"1876 students • Created 2024-01-15"}
                    state={"active"}
                    />
                <CourseManagementCard
                    title={"Cement Production Excellence"}
                    logo={"P"}
                    author={"Eng. Maria Santos • Production • Advanced"}
                    stat={"1234 students • Created 2024-01-10"}
                    state={"active"}
                />
                <CourseManagementCard
                    title={"Quality Control Draft"}
                    logo={"Q"}
                    author={"Dr. João Oliveira • Quality • Professional"}
                    stat={"0 students . Created 2024-01-20"}
                    state={"draft"}
                />
            </div>
        </div>
    )
}
export default CourseManagement
