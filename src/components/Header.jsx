import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <style jsx> {`
        .header {
          align-content: center;
          background-color: #a69cb7;
        }
        .header h1 {
          padding-top: 20px;
          text-align: center;
          font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
          text-shadow: 1px 1px 4px white;
        }
        .routes {
          margin: auto;
          width: 50%;
          text-align: center;
        }
        .routes button {
          margin: 7px;
          height: 30px;
          width: 70px;
          border-radius: 3px;
          font-family: sans-serif;
        }

        .routes button:hover {
          background: #fff;
          cursor: pointer;
        }

        .routes a:hover {
          color: #7d53ac;
        }

        .routes a {
          text-decoration: none;
          font-weight: bold;
          color: #583b7a;
        }
      `}
      </style>
      <h1>
        Kenny Wolfenberger Project Portfolio
      </h1>
      <div className='routes'>
        <button><Link to='/'>About</Link></button>
        <button><Link to='/projects'>Projects</Link></button>
        <button><Link to='/contact'>Contact</Link></button>
      </div>
    </div>
  )
}

export default Header