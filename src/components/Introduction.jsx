import React from 'react'

const Introduction = () => {
    return (
        <>
            <div className=" flex flex-col ">
                <h1 className="font-bold text-3xl leading-tight text-orange-600 ml-7 mt-3 underline underline-offset-8">
                    About US
                </h1>
                <p className="text-[14px] m-7 mb-8 opacity-90 max-w-lg ">
                    Société des Ciments de Gabès is a public limited company established in 1973, specializing in the production of binders (cements and artificial lime). Its plant in Gabès began production in 1977. Its primary market covers the entire southern region of Tunisia.<br/>

                    In 2000, the company was bought from the Tunisian state by the Portuguese group SECIL (founded in 1930), one of Portugal’s leading cement producers, with operations in 8 countries on 4 continents.
                </p>
            </div>
        </>
    )
}
export default Introduction
