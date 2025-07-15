import React from 'react'

import aws from '../../images/AWS.png'
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
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "Node.js", logo: node },
  { name: "MongoDB", logo: mongodb },
  { name: "GitHub", logo: github },
  { name: "VS Code", logo: vscode },
  { name: "MySQL", logo: mysql },
  { name: "PostgreSQL", logo: psql },
  { name: "Vite", logo: vite },
  { name: "PuTTY", logo: putty }
];

const learningSkills = [
  { name: "TypeScript", logo: typscript },
  { name: "Next.js", logo: next },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "AWS", logo: aws }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-section">
        <h3 className="skills-subtitle">✅ Known</h3>
        <div className="skills-grid">
          {knownSkills.map((icon, index) => (
            <div>
              <img key={index} src={icon.logo} alt={`Known Skill ${index}`} className="skill-icon" />
              <h3>{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-subtitle">🧠 Currently Pursuing</h3>
        <div className="skills-grid learning">
          {learningSkills.map((icon, index) => (
            <div>
              <img key={index} src={icon.logo} alt={`Learning Skill ${index}`} className="skill-icon pursuing" />
              <h3>{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
