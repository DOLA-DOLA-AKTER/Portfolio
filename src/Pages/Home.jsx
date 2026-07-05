import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Abouts } from '../Components/Abouts/Abouts'
import { Skill } from '../Components/Skill/Skill'
import { Project } from '../Components/Projects/Project'
import { Contacts } from '../Components/Contact/Contacts'
import { Services } from '../Components/Services/Services'
import { Education } from '../Components/Education/Education'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Abouts/>
        <Education/>
        <Services/>
        <Skill/>
        <Project/>
        <Contacts/>
    </div>
  )
}
