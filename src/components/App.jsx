import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Contact from './Contact'
import Home from './Home'
import Resume from './Resume'
import ProjectList from './ProjectList'
import Details from './Details'



function App () {
  return (
    <div>
      <style jsx>
        {`
          body {
            background-color: #e8e8ed;
          }
        `}
      </style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={ProjectList} />
        <Route exact path='/details' component={Details} />
      </Switch>
    </div>
  )
}

export default App