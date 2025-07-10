import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>

      <div className="education-wrapper">
        <div className="education-card">
          <h2>Bachelor of Computer Application</h2>
          <p>Safi Institute of Advanced Study (SIAS), Calicut University</p>
          <span className="edu-duration">2014 – 2017</span>
        </div>

        <div className="education-card">
          <h2>Higher Secondary (+2)</h2>
          <p>Govt Medical College Campus, Chevayur, Kozhikode</p>
          <span className="edu-duration">2012 – 2014</span>
        </div>
      </div>
    </div>
  )
}

export default Education
