import React from 'react'
import {Link} from 'react-router-dom'

function Details() {
  return (
    <div className='details'>
      <style jsx> {`
        .details {
          text-align: center;
          margin: auto; 
          height: 90px;
          margin-top: 10%;
          background-color: orange;
          width: 50%;
        }

        .details h5 {
          width: 10%;
          margin: auto;
          border: solid black 1px;
          background-color: white;
          border-radius: 3px;
        }
      `}
      </style>
      <h3>
        More interactive webpage including Project Details coming next week!
      </h3>
      <h5><Link to='/projects'>Back</Link></h5>
    </div>
  )
}

export default Details