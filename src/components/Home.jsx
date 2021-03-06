import React from 'react'
import KW from '../assets/images/kw.jpg'
import './styles/home.css'

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
          I'm Kenny Wolfenberger, a full stack Web Developer and Project Manager.
        </h3>
        <p>I studied coding at Epicodus in Seattle. The full-time, 6 month curriculum includes JavaScript, React with Redux, Angular, and C# MVC with ASP/.NET.</p>
        <p>Prior to becoming a programmer, I spent 5 years working in healthcare software project management, working with Epic Systems and several large hospital and clinic organizations around the country.</p>
      </div>
      <div className="skills">
        <h4>Languages</h4>
        <div className='underline'></div>
        <div className='languages'>
          <div className='gridItem'>
            <h5>C#</h5>
          </div>
          <div className='gridItem'>
            <h5>JavaScript</h5>
          </div>
          <div className='gridItem'>
            <h5>Python</h5>
          </div>
        </div>
        <h4> Libraries and Frameworks</h4>
        <div className='underline'></div>
        <div className='frameworks'>
          <div className='gridItem'>
            <h5>Angular</h5>
          </div>
          <div className='gridItem'>
            <h5>ASP/.NET</h5>
          </div>
          <div className='gridItem'>
            <h5>Bootstrap</h5>
          </div>
          <div className='gridItem'>
            <h5>jQuery</h5>
          </div>
          <div className='gridItem'>
            <h5>Phaser</h5>
          </div>
          <div className='gridItem'>
            <h5>React</h5>
          </div>
          <div className='gridItem'>
            <h5>Redux</h5>
          </div>
          <div className='gridItem'>
            <h5>Unity</h5>
          </div>
        </div>
        <h4>Other</h4>
        <div className='underline'></div>
        <div className='other'>
          <div className='gridItem'>
            <h5>HTML / HTML5</h5>
          </div>
          <div className='gridItem'>
            <h5>CSS</h5>
          </div>
          <div className='gridItem'>
            <h5>TypeScript</h5>
          </div>
          <div className='gridItem'>
            <h5>NodeJS</h5>
          </div>
          <div className='gridItem'>
            <h5>Behavior-Driven Development</h5>
          </div>
          <div className='gridItem'>
            <h5>Unit Testing</h5>
          </div>
          <div className='gridItem'>
            <h5>SQL / MySQL Databses</h5>
          </div>
          <div className='gridItem'>
            <h5>Web API Development</h5>
          </div>
          <div className='gridItem'>
            <h5>Project Management</h5>
          </div>
          <div className='gridItem'>
            <h5>Git / Change Management</h5>
          </div>
          <div className='gridItem'>
            <h5>Printer Command Language</h5>
          </div>
          <div className='gridItem'>
            <h5>Epic Systems EHR</h5>
          </div>
          <div className='gridItem'>
            <h5>Firebase</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home