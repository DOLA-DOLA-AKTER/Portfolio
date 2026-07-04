import React from 'react'
import { Navber } from '../Components/Navber/Navber'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/Footer/Footer'

export const RootLayOut = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
