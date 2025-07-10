import React from 'react'
import { Link } from 'react-router-dom'
import './Experience.css'

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>

            <div className="experience-wrapper">
                {/* iNetFrame */}
                <div className="experience-card">
                    <Link style={{textDecoration:'none'}} to="https://inetframe.com/" target="_blank" rel="noopener noreferrer">
                        <h2>iNetFrame Technologies (Dec 2021 – Apr 2024)</h2>
                    </Link>
                    <h4>Front-end Web Developer</h4>
                    <ul className="experience-highlights">
                        <li>Achieved 60% growth in React, Node.js, Express, and MySQL.</li>
                        <li>Led Timesheet Management and Payer Registration projects, improving technical and soft skills by 50%.</li>
                    </ul>
                    <div className="project-section">
                        <h5>Projects:</h5>
                        <ul className="project-list">
                            <li><strong>Payer to Payer:</strong> Developed user authentication and modules using React.</li>
                            <li><strong>HQM:</strong> Built UI components (dynamic forms, navigation menus) using Angular.</li>
                            <li><strong>Payer DB:</strong> Collaborated on React (frontend) and Node.js (backend) for seamless data flow.</li>
                            <li><strong>Timesheet Management:</strong> Designed and developed a task management app using React, Node.js, and MySQL.</li>
                        </ul>
                    </div>
                </div>

                {/* DCT Academy */}
                <div className="experience-card">
                    <h2>DCT Academy (Jan 2021 – Dec 2021)</h2>
                    <h4>Trainee Developer</h4>
                    <ul className="experience-highlights">
                        <li>Learned JavaScript fundamentals and worked with React, Node.js, Express.js and MongoDB</li>
                        <li>Projects: Billing App, Movie App, PhonePe UI design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
