import React from 'react'
import PropTypes from 'prop-types'

class ActiveDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imgPreview: 'projImg',
      closeButton: 'none'
    }
    this.previewImg = this.previewImg.bind(this)
  }

  previewImg() {
    if (this.state.imgPreview == 'projImg') {
      this.setState({
        imgPreview: 'projImgLarge',
        closeButton: 'initial'
      })
    } else if (this.state.imgPreview == 'projImgLarge') {
      this.setState({
        imgPreview: 'projImg',
        closeButton: 'none'
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
              <h5 id='close' onClick={this.previewImg} >Click to close</h5>
            </div>
          </div>
        </div>
    }

    return (
      <div>
        <style jsx>
          {`
        .activeDetails {
          background: #f2f6ff;
          border: solid #717f99 1px;
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
          left: 15%;
          top: 2%;
          width: 70%;
          height: auto;
          max-height: 95%;
          border: solid gray 2px;
          box-shadow: 0 0 30px darkblue;

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

        #close {
          display: ${this.state.closeButton};
          position: fixed;
          text-align: center;
          z-index: 3;
          bottom: 5%;
          border: solid black 2px;
          padding: 6px;
          left: auto;
          background: white;
          font-size: 18px;
          background-color: #ad1111;
          color: white;
          font-weight: bolder;
          text-decoration: none;
        }
        #close:hover {
          cursor: pointer;
          border: solid gray 2px;
          background-color: red;
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