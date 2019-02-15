import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function ProjectDetails (props) {
  return (
    <div>
      <style jsx>{`
        .projectDetails h4 {
        }
        .projectDetails p {
          text-align: center;
        }
        #links a{
          color: blue;
          text-decoration: none;
        }
        #links a:hover{
          text-decoration: underline;
        }
      `}
      </style>
      <div className='projectDetails'>
        <h4>{props.projectName}</h4>
        <p><strong>Description:</strong> {props.info}</p>
        <p id='links'><Link to='/details'>More details</Link> | <a href={props.link}>Github Link</a></p>
      </div>
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  projectName: PropTypes.string,
  info: PropTypes.string, 
  link: PropTypes.string
}