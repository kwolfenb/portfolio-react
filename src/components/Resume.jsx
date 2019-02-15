import React from 'react'
import ResumeImg from '../assets/images/resume.jpg'
import {Link} from 'react-router-dom'



function Resume() {
  return (
    <div className='container'>
      <style jsx>
        {`
            .container {
              background-color: black;
            }

            .resume {
              width: 50%;
              position: relative;
              margin: auto;
            }
            .resume img {
              margin-top: 5%;
              margin-bottom: 5%;
              width: 100%;
              height: auto;
              border-radius: 5px;
            }

            #close {
              height: 25px;
              width: 25px;
              position: absolute;
              top: 4%;
              right: 1%;
              background-color: gray;
              color: #ad1111;
              font-weight: bolder;
              text-decoration: none;
            }

            #close a {
              color: #ad1111;
              text-decoration: none;
            }

        `}
      </style>
      <div className='resume'>
        <button id='close'><Link to='/contact'>X</Link></button>
        <img src={ResumeImg} />
      </div>
    </div>
  )
}

export default Resume