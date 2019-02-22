import React from 'react'
import PropTypes from 'prop-types'

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
        <h4 onClick={props.showDetails}>{props.projectName}</h4>
        <p><strong>Description:</strong> {props.info}</p>
        <p id='links'><a onClick={() => {props.showDetails(props.id)}} >More details </a> | <a href={props.link}>Github Link</a></p>
      </div>
    </div>
  )
}

export default ProjectDetails

ProjectDetails.propTypes = {
  projectName: PropTypes.string,
  info: PropTypes.string, 
  link: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  showDetails: PropTypes.func
}