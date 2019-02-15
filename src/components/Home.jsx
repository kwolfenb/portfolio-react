import React from 'react'
import KW from '../assets/images/kw.jpg'

function Home() {
  return (
    <div>
      <style jsx> {`
      .home {
        margin: auto;
        width: 60%;
        margin-top: 5%;
        border: solid #dce3ef 2px;
        border-radius: 6px;
        background-color: white;
        padding: 20px;
      }
        img#profile {
          float: right;
          margin-right: 5%;
          margin-left: 20px;
          border-radius: 50%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        
      `}
      </style>
      <div className='home'>
        <img id='profile' src={KW} />
        <h3>
          I'm Kenny Wolfenberger, a full stack web developer and designer.
        </h3>
        <p>I am currently studying coding at Epicodus in Seattle. The curriculum includes JavaScript, jQuery ReactJS, AngularJS, C# ASP/.NET, HTML, CSS with Bootstrap,</p>
        <p>I spent the last 5 years working in healthcare software project management, working with Epic Systems and several large hospital and clinic organizations around the country.</p>
      </div>
    </div>
  )
}

export default Home