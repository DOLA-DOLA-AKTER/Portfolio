import React from 'react'

export const EducationCard = ({instituteName, degree, year}) => {
    return (
        <div className="bg-linear-to-r from-orange to-orange-400 rounded-2xl p-8 text-white shadow-lg h-full flex flex-col">
            <p className="text-sm font-medium ">
             {instituteName}
            </p>

            <h3 className="text-xl font-semibold pt-3 pb-10">
                {degree}
            </h3>

            <p className="text-sm">
                {year}
            </p>
        </div>
    )
}
