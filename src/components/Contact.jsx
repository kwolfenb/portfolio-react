import React from 'react'
import ResumeImg from '../assets/images/resume.jpg'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
      <style jsx>{`
      
        .contactInfo {
          text-align: center;
        }
        #resume {
          width: 200px;
          height: auto;
          border-radius: 5px;
          border: solid #3b4375 1px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      `}
      </style>
      <div className='contactInfo'>
        <h1>Contact Info</h1>
        <p>Github: <a href='https://github.com/kwolfenb'>github.com/kwolfenb</a> | LinkedIn: <a href='https://www.linkedin.com/in/kwolfenberger/'>linkedin.com/in/kwolfenberger</a> | Resume </p>
        <p>Seattle, WA</p>
        <h4>Resume:</h4>
        <Link to='/resume'>
          <img id='resume' src={ResumeImg} />
        </Link>
      </div>
    </div>
  )
}

export default Contact