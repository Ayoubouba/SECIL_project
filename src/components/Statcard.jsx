import React from 'react'

const Statcard = ({title,SVG,number}) => {
    return (
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 shadow-md hover:shadow-2xl px-2 py-0.5 w-fit h-fit">
            <div data-slot="card-content" className="[&amp;:last-child]:pb-3 p-6">
                <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 mr-4">
                        {SVG}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">{title}</p>
                        <p className="text-2xl font-bold text-gray-900">{number}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Statcard
