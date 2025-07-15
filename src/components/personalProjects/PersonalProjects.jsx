// import React from 'react'
// import { Link } from 'react-router-dom'

// const PersonalProjects = () => {
//   return (
//     <div>
//         <div>
//           <h2>Personal projects</h2>
//           <div>
//           <Link to={'https://red-bricks-reality.vercel.app'} target='_blank'>Simple Ui with responsive</Link>
//           <p>This project is done as per the part of the internship</p>
//           </div>

//           <div>
//           <Link to={'https://nexcent-chi-seven.vercel.app/'} target='_blank'>Simple Website with responsive</Link>
//           <p>This project is done as per the part of the internship</p>
//           </div>

          
//           <div>
//           <Link to={'https://nexcent-dashboard.vercel.app/login'} target='_blank'>Simple Website Dashboard with responsive</Link>
//           <p>This project is done as per the part of the internship</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default PersonalProjects

import React from 'react'
import { Link } from 'react-router-dom'
import './PersonalProject.css' // Import the CSS

const PersonalProjects = () => {
  return (
    <div className="personal-projects-container">
      <h2>Personal Projects</h2>
      <div className="projects-wrapper">

        <div className="project-card">
          <Link to={'https://red-bricks-reality.vercel.app'} target='_blank'>Simple UI with Responsive</Link>
          <p>This project is done as part of the internship</p>
        </div>

        <div className="project-card">
          <Link to={'https://nexcent-chi-seven.vercel.app/'} target='_blank'>Simple Website with Responsive</Link>
          <p>This project is done as part of the internship</p>
        </div>

        <div className="project-card">
          <Link to={'https://nexcent-dashboard.vercel.app/login'} target='_blank'>Responsive Dashboard Website</Link>
          <p>This project is done as part of the internship</p>
        </div>

      </div>
    </div>
  )
}

export default PersonalProjects
