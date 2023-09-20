import React from 'react'
import './Waist.css'
import pc from '../pictures/pc.jpg'


function Waist() {
  return (
    <div className='waistwrapper' >
        <div className='waistbody' >
            <img className='pic1' src={pc} alt='pic' >
            </img>
            <h1 className='title1' >
            Overview.
            </h1>
            <p className='para1' >
            I'm a skilled Full Stack software developer with experience in TypeScript <br></br> and JavaScript, and expertise in frameworks like React, Node.js, MongoDB and Express.js.<br></br> I'm a quick learner and collaborate closely with clients to create efficient, <br></br> scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
            </p>
        </div>

    </div>
  )
}

export default Waist