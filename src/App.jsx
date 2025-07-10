import React from 'react'
import Herosection from './components/herosection/Herosection'
import Aboutme from './components/aboutme/Aboutme'
import Skills from './components/skills/Skills'
import Education from './components/education/education'
import Experience from './components/experience/Experience'

const App = () => {
  return (
    <div>
      <Herosection/>
      <Aboutme/>
      <Skills/>
      <Experience/>
      <Education/>
    </div>
  )
}

export default App