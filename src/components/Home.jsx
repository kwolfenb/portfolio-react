import React from 'react'

function Home() {
  return (
    <div className='home'>
      <style jsx> {`
        .bio {
          width: 50%;
        }
      `}
      </style>
      <div className='bio'>
        <p><strong>Coding Experience:</strong> Currently studying coding at the Epicodus school in Seattle. Curriculum includes JavaScript, jQuery ReactJS, AngularJS, C# ASP/.NET, HTML, CSS with Bootstrap,</p>
        <p><strong>Other Professional Experience:</strong> Spent the last 5 years working in healthcare software project management, working with Epic Systems and several large hospital and clinic organizations around the country.</p>
        <p><strong>Interests/Hobbies: </strong> When I'm not working I enjoy getting outdoors around Seattle, hiking in the mountains, skiing, snowshoeing and rockclimbing.</p>
        <p><strong>Education: </strong>I graduated from Gonzaga University with a bachelor's degree in Finance and Accounting. Currently I'm learning how to code through Epicodus and several online resources.</p>
      </div>
    </div>
  )
}

export default Home