import React from 'react'
import { Abouts } from '../Components/Abouts/Abouts'
import MissionVision from '../Components/MissionVision/MissionVision'
import  Services  from '../Components/Services/Services'
import { Education } from '../Components/Education/Education'

export const About = () => {
  return (
    <div>
      <Abouts/>
      <MissionVision/>
      <Education/>
      <Services/>
    </div>
  )
}
