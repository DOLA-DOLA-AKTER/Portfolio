import { useEffect, useState } from 'react'
import './App.css'
import { Navber } from './Components/Navber/Navber'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Skills } from './Pages/Skills'
import { Projects } from './Pages/Projects'
import { Contact } from './Pages/Contact'

function App() {

  return (
    <>
      <Navber/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
