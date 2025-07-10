import React from 'react'

import './Herosection.css'

import naval from '../../images/naval.png'

const Herosection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-section-container-one'>
                <h1>NAVAL RAHMAN K</h1>
                <h2>+91 9048027870</h2>
                <h3>02/04/1996</h3>
                <h3>navalrahmankavate@gmail.com</h3>
                <h3>Bengaluru, India</h3>
            </div>
            <div className='hero-section-container-two'>
                <img src={naval} alt="Naval" />
            </div>
            <div className='hero-section-container-three'>
                <h3>MERN STACK DEVELOPER</h3>
                <p>Building responsive, fast, and scalable full-stack web applications.</p>
                <div className='hero-section-container-one-subcontainer-one'>
                    <a
                        href="https://www.linkedin.com/in/naval-rahman-4604241a3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/navalrahman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    {/* <a>Download Resume</a> */}
                    {/* <a>Contact</a> */}
                </div>
            </div>
        </div>
    )
}

export default Herosection