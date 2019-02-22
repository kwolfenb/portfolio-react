import React from 'react'
import PropTypes from 'prop-types'

class ActiveDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgPreview: 'projImg',
    }
    this.previewImg = this.previewImg.bind(this)
  }

  previewImg() {
    if (this.state.imgPreview == 'projImg') {
      this.setState({
        imgPreview: 'projImgLarge',
      })
    } else if (this.state.imgPreview == 'projImgLarge') {
      this.setState({
        imgPreview: 'projImg',
      })
    }
  }

  render() {

    let projectDetails = null

    if (this.props.activeDetails) {
      projectDetails =
        <div className='activeDetails'>
          <h3>Project Name: {this.props.activeDetails.projectName}</h3>
          <h4>Description: </h4><p>{this.props.activeDetails.expandedDetails}</p>
          <div className='grid-container2'>
            <div className='grid-item2'>
              <h4>Technologies Used: </h4>
              <ul>
                {this.props.activeDetails.technologies.map((x) => {
                  return (
                    <div>
                      <li>{x}</li>
                    </div>
                  )
                })}
              </ul>
              <br />
              <a href={this.props.activeDetails.link} target="_blank">
                <button id='github'>
                  View on GitHub
                </button>
              </a>
            </div>
            <div className='grid-item2'>
              <h4>Preview:</h4>
              <img className={this.state.imgPreview} src={this.props.activeDetails.img} onClick={this.previewImg} />
            </div>
          </div>
        </div>
    }

    return (
      <div>
        <style jsx>
          {`
        .activeDetails {
          background: #e8fff6;
          border: solid #049100 1px;
          border-radius: 3px;
          width: 75%;
          margin: auto;
          padding: 10px;
          font-family: Helvetica, sans-serif;
        }
        
        .activeDetails p {
          font-size: 18px;
          margin-left: 3%;
          margin-right: 3%;
        }
        
        .grid-container2 {
          display: grid;
          grid-template-columns: 2fr 3fr;
        }
        
        .grid-item2 {
          margin-left: 10px;
        }
        .grid-item2 ul {
          list-style: none;
        }
        .grid-item2 a {
          color: blue;
        }
        
        img.projImg{
          width: 450px;
          height: auto;
          border: solid #6666ff 1px;
        }
        img.projImgLarge {
          position: fixed;
          z-index: 2;
          left: 17.5%;
          top: 5%;
          width: 65%;
          height: auto;
          max-height: 90%;
          overflow: auto;
          border: solid blue;
        }

        img.projImg:hover {
          cursor: zoom-in;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19);
        }
        #github {
          height: 60px;
          width: 210px;
          font-size: 16px;
        }

    `}
        </style>
        <div >
          {projectDetails}
        </div>
      </div>
    )

  }

}

export default ActiveDetails

ActiveDetails.propTypes = {
  activeDetails: PropTypes.object
}