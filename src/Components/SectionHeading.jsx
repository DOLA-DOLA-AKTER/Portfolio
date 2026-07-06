import React from 'react'

export const SectionHeading = ({ heading1, heading2, className, peragraph, sectionHeading }) => {
    return (
        <div className={`text-center md:pb-15 pb-10 ${sectionHeading}`}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}>
                {heading1} <span className="text-orange"> {heading2} </span>
            </h2>

            <div className="w-24 h-1 bg-orange mx-auto md:mt-4 mt-3 md:mb-5 mb-4 rounded-full"></div>
            <p className="text-gray-500  max-w-162.5 mx-auto text-sm md:text-base leading-6 md:leading-8">
                {peragraph}
            </p>
        </div>
    )
}

