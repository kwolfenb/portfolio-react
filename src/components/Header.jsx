import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <style jsx> {`
        .header {
          align-content: center;
          background-color: gray;
        }
        .header h1 {
          text-align: center;
        }
        .routes {
          margin: auto;
          width: 50%;
          border: solid black;
          text-align: center;
        }
      `}
      </style>
      <h1>
        Kenny Wolfenberger Project Portfolio
      </h1>
      <div className='routes'>

        <button><Link to='/'>Home</Link></button>
        <button><Link to='/projects'>Projects</Link></button>
        <button><Link to='/about'>About</Link></button>
      </div>
    </div>
  )
}

export default Header