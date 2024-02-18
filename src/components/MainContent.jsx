import React from 'react'
import "../styles/components/maincontent.sass"
import { AboutContainer } from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'


export const MainContent = () => {
  return (
    <div id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer/>

    </div>
  )
}
