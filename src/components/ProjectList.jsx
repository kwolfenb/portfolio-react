import React from 'react'
import ProjectDetails from './ProjectDetails'

function ProjectList () {
  return (
    <div>
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto auto;
          margin: 3%;
        }
        .grid-item {
          border: solid black 1px;
          border-radius: 5px; 
          padding: 10px;
          padding-top: 0%;
          margin: 10px;
          background: linear-gradient(#b5ccf2, white);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.04);
        }

        .grid-item:hover {
          background: linear-gradient(#dbe7ff, white);
        }
      `}
      </style>
      <div className='grid-container'>
        {Projects.map((x, index) =>
          <div className='grid-item'>
            <ProjectDetails projectName = {x.projectName}
              info = {x.info} 
              link = {x.link}
              key = {index}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectList

const Projects = [
  {
    projectName: 'Hair Salon',
    info: 'A C# ASP/.NET application that is connected to a SQL database with tables for Hair Stylists and Clients',
    link: 'https://github.com/kwolfenb/HairSalon.Solution'
  },
  {
    projectName: 'Type Racer',
    info: 'This JavaScript application is an online typing tool which allows people to race against the computer by typing various quotes.',
    link: 'https://github.com/kwolfenb/typing-game-angular'
  },
  {
    projectName: 'Store Finder',
    info: 'C# ASP/.NET application where users can search Database for stores by Location and Name.',
    link: 'https://github.com/kwolfenb/StoreFinder.Solution'
  },
  {
    projectName: 'Tamagotchi',
    info: 'Users can search Database for stores by Location and Name.',
    link: 'https://github.com/kwolfenb/tamagotchi-js-webpack'
  },
  {
    projectName: 'Website Clone',
    info: 'Clone of the Eddie Bauer website using TypeScript and Angular.',
    link: 'https://github.com/kwolfenb/Website-Clone-Angular'
  },
  {
    projectName: 'Age Calculator',
    info: 'JavaScript application that calculates a user\'s age on other planets based on inputted date.',
    link: 'https://github.com/kwolfenb/age-calculator-webpack-js'
  }
]