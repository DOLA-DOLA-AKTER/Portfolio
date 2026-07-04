import React from 'react'

export const Button = ({ children, className, type }) => {
  return (
    <button type={type}
      className={`inline-flex items-center gap-2 md:text-lg text-base rounded-lg bg-orange-600 md:px-6 md:py-3 px-4.5 py-2 text-white font-semibold transition-all duration-300 hover:bg-orange-700 hover:scale-105 shadow-lg cursor-pointer ${className}`}>
          {children}
    </button>
  )
}


