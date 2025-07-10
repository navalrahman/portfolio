import React from 'react'

import aws from '../../images/Aws.png'
import github from '../../images/GitHub.png'
import html from '../../images/html-5.png'
import js from '../../images/js.png'
import mongodb from '../../images/MongoDB.png'
import mysql from '../../images/mysql.png'
import next from '../../images/Next.js.png'
import node from '../../images/node-js.png'
import react from '../../images/physics.png'
import psql from '../../images/postgre.png'
import putty from '../../images/PuTTY.png'
import tailwind from '../../images/Tailwind CSS.png'
import css from '../../images/text.png'
import typscript from '../../images/Typescript.png'
import vscode from '../../images/vscode.png'
import vite from '../../images/Vite.js.png'

import './Skill.css' // Assuming you’ll style it separately

const knownSkills = [
  html, css, js, react, node, mongodb, github, vscode, mysql, psql, vite, putty
]

const learningSkills = [
  typscript, next, tailwind, aws
]

const Skills = () => {
 return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-section">
        <h3 className="skills-subtitle">✅ Known</h3>
        <div className="skills-grid">
          {knownSkills.map((icon, index) => (
            <img key={index} src={icon} alt={`Known Skill ${index}`} className="skill-icon" />
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-subtitle">🧠 Currently Pursuing</h3>
        <div className="skills-grid learning">
          {learningSkills.map((icon, index) => (
            <img key={index} src={icon} alt={`Learning Skill ${index}`} className="skill-icon pursuing" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
