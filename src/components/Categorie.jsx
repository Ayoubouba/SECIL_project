import React from 'react'
import {BarChart3} from "lucide-react";
export const Categorie = ({icon, title, para, nb_courses}) => {
    return (
        <>
            <div data-slot="card-content" className=" flex flex-col items-center justify-center w-fit h-50% gap-4  pb-6 p-6 text-center shadow-2xl rounded-lg mt-5 ">
                <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-200 mb-4 group-hover:bg-blue-800 transition-colors">
                    {icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mb-3 h-20%">{para}</p>
                <div className="flex items-center justify-center">
                    <span data-slot="badge" className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent hover:bg-blue-800 text-amber-50 bg-blue-500 rounded-md">
                        {nb_courses}courses
                    </span>
                </div>
            </div>
        </>
    )
}

