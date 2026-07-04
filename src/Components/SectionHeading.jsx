import React from 'react'

export const SectionHeading = ({ heading1, heading2, className, peragraph }) => {
    return (
        <div className="text-center pb-15">
            <h2 className={`text-4xl md:text-5xl font-bold ${className}`}>
                {heading1} <span className="text-orange"> {heading2} </span>
            </h2>

            <div className="w-24 h-1 bg-orange mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 pt-5 max-w-162.5 mx-auto">
                {peragraph}
            </p>
        </div>
    )
}

