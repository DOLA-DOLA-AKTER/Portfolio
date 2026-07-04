import React from 'react'

export const Container = ({children, className}) => {
  return (
    <div className={`container mx-auto px-5 lg:px-0 py-20 lg:py-25 ${className}`}>
        {children}
    </div>
  )
}



