import React from 'react'
import ProjectDetails from './ProjectDetails'
import ActiveDetails from './ActiveDetails'

import proj1 from '../assets/images/web_clone_img.jpg'
import proj2 from '../assets/images/type_img.jpg'
import proj3 from '../assets/images/salon.jpg'
import proj4 from '../assets/images/storefinder.jpg'
import proj5 from '../assets/images/tamagotchi.jpg'
import proj6 from '../assets/images/age.jpg'

class ProjectList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeDetails: null
    }
    this.handleShowDetails = this.handleShowDetails.bind(this)
  }

  handleShowDetails(id) {
    let activeProject = Projects[id]
    this.setState({
      activeDetails: activeProject
    })
  }

  render() {
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
          background: linear-gradient(#a4aed6, white);
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
              <ProjectDetails projectName={x.projectName}
                info={x.info}
                link={x.link}
                img={x.img}
                key={index}
                id={index}
                showDetails={this.handleShowDetails}
              />
            </div>
          )}
        </div>
        <hr />
        <div>
          <ActiveDetails 
            activeDetails={this.state.activeDetails}
          />
        </div>
      </div>
    )
  }
}

export default ProjectList

const Projects = [
  {
    projectName: 'Website Clone',
    info: 'Clone of the Eddie Bauer website using TypeScript and Angular.',
    link: 'https://github.com/kwolfenb/Website-Clone-Angular',
    img: proj1,
    expandedDetails: 'A C# application that is connected to a SQL database with tables for Stylists and Clients. Users can add to the Client lists for each individual Stylist. Any time a Client is added, it must be associated with a Stylist. Stylist table includes details such as name, address, phone number and Client list.',
    technologies: ['C#', 'ASP/.Net', 'MSTests', 'MVC', 'Razor', 'Mono', 'SQL',],
  },
  {
    projectName: 'Type Racer',
    info: 'This JavaScript application is an online typing tool which allows people to race against the computer by typing various quotes.',
    link: 'https://github.com/kwolfenb/typing-game-angular',
    img: proj2,
    expandedDetails: 'This is an online typing competition, TypeRacer, allows people to race against the computer by typing various quotes from books, movies, and songs. Uses Firebase to store history of games as well as database for quotes to type.',
    technologies: ['TypeScript', 'Node.JS', 'Firebase Authentication', 'Firebase Realtime Database', 'node packet manager', 'Angular 5', 'HTML/CSS', 'jQuery']
  },
  {
    projectName: 'Hair Salon',
    info: 'A C# ASP/.NET application that is connected to a SQL database with tables for Hair Stylists and Clients',
    link: 'https://github.com/kwolfenb/HairSalon.Solution',
    img: proj3,
    expandedDetails: 'A C# application that is connected to a SQL database with tables for Stylists and Clients. Users can add to the Client lists for each individual Stylist. Any time a Client is added, it must be associated with a Stylist. Stylist table includes details such as name, address, phone number and Client list.',
    technologies: ['C#', 'ASP/.Net', 'MSTests', 'MVC', 'Razor', 'Mono', 'SQL',]
  },
  {
    projectName: 'Store Finder',
    info: 'C# ASP/.NET application where users can search Database for stores by Location and Name.',
    link: 'https://github.com/kwolfenb/StoreFinder.Solution',
    img: proj4,
    expandedDetails: 'Allows users to search Database for Dispensaries by Location and Name by using Web API to a map/GPS service. Database can be updated through a web scraper that runs Yelp searches and pulls information for stores within the Database.',
    technologies: ['C#', 'ASP/.Net Core MVC', 'Selenium WebDriver', 'SQL', 'Here Maps API', 'JavaScript', 'Razor']
  },
  {
    projectName: 'Tamagotchi',
    info: 'Users can interact with a Tamagotchi pet in this JavaScript-based web application.',
    link: 'https://github.com/kwolfenb/tamagotchi-js-webpack',
    img: proj5,
    expandedDetails: 'User can interact with Tamagotchi in many different ways: feed, exercise, give Gameboy, give pills, harvest gems, and wrestle opponents.  Interactions have effects on Tamagotchi\'s health, food level and happiness levels. When wrestling opponents, the program will simulate moves from each player based on stats and will determine winner. Game is won if Tamagotchi achieves age of "Geezer"',
    technologies: ['C#', 'ASP/.Net', 'MSTests', 'MVC', 'Razor', 'Mono', 'SQL',]
  },
  {
    projectName: 'Age Calculator',
    info: 'JavaScript application that calculates a user\'s age on other planets based on inputted date.',
    link: 'https://github.com/kwolfenb/age-calculator-webpack-js',
    img: proj6,
    expandedDetails: 'JavaScript application that calculates a user\'s age on other planets based on inputted date. Users can interact with the application by entering a birth date and clicking on planets.',
    technologies: ['JavaScript', 'Node Package Manager (NPM)', 'JSON', 'Webpack', 'ESLint', 'Jasmine/Karma testing', 'Babel',]
  }
]