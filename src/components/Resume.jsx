import React from 'react'
import ResumeImg from '../assets/images/resume.jpg'
import { Link } from 'react-router-dom'



function Resume() {
  return (
    <div className='container'>
      <style jsx>
        {`

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
              border: solid #babcc1 1px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            #close {
              height: 25px;
              width: 25px;
              position: absolute;
              top: 4%;
              right: 1%;
              background-color: #c1c1c1;
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
        <Link to='/contact'><button id='close'>X</button></Link>
        <img src={ResumeImg} />
      </div>
    </div>
  )
}

export default Resume