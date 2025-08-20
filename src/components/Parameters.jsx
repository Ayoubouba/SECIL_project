import React from 'react'

const Parameters = () => {
    return (
        <div data-state="active" data-orientation="horizontal" role="tabpanel"
             aria-labelledby="radix-:r2v:-trigger-preferences" id="radix-:r2v:-content-preferences" tabIndex="0"
             data-slot="tabs-content" className="flex-1 outline-none space-y-6">
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-2xl">
                <div data-slot="card-header"
                     className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                    <h4 data-slot="card-title" className="leading-none flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-globe h-5 w-5 mr-2 text-blue-600"
                             aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        Account Preferences
                    </h4>
                    <p data-slot="card-description" className="text-muted-foreground">Customize your account settings
                        and data management</p></div>
                <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background  hover:bg-orange-600 hover:text-amber-50  dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 py-2 has-[&gt;svg]:px-3 h-16 flex-col space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-download h-5 w-5 text-black" aria-hidden="true">
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            <span className="text-black">Export Account Data</span></button>
                        <button data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-orange-600 hover:text-amber-50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-4 py-2 has-[&gt;svg]:px-3 h-16 flex-col space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-upload h-5 w-5 text-black" aria-hidden="true">
                                <path d="M12 3v12"></path>
                                <path d="m17 8-5-5-5 5"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            </svg>
                            <span className="text-black">Import Learning History</span></button>
                    </div>
                    <div data-orientation="horizontal" role="none" data-slot="separator-root"
                         className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div>
                    <div className="text-center py-8"><h3 className="font-semibold text-red-600 mb-2">Danger Zone</h3><p
                        className="text-sm text-gray-500 mb-4">These actions are permanent and
                        cannot be undone.</p>
                        <button data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-red-600 text-red-600 hover:bg-red-50">Sign
                            Out of Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Parameters
