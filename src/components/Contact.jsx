import React from 'react'
import ResumeImg from '../assets/images/resume.jpg'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
      <style jsx>{`
      
        .contactInfo {
          margin-top: 5%;
          text-align: center;
        }

        .contactInfo h2 {
          font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        }

        .contactInfo hr {
          width: 33%;
        }

        .contactInfo p {
          font-size: 16px;
        }
        #resume {
          width: 200px;
          height: auto;
          border: solid #babcc1 1px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19);
        }
        #resume:hover {
          border: solid #5d53ac 1px;
          box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
        }
      `}
      </style>
      <div className='contactInfo'>
        <h2>Contact Info</h2>
        <hr />
        <p><a href='https://github.com/kwolfenb'>Github</a> | <a href='https://www.linkedin.com/in/kwolfenberger/'>LinkedIn</a></p>
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