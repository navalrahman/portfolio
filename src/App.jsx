import React from 'react'
import Herosection from './components/herosection/Herosection'
import Aboutme from './components/aboutme/Aboutme'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import PersonalProjects from './components/personalProjects/PersonalProjects'

const App = () => {
  return (
    <div>
      <Herosection/>
      <Aboutme/>
      <Skills/>
      <Experience/>
      <PersonalProjects/>
      <Education/>
    </div>
  )
}

export default App
