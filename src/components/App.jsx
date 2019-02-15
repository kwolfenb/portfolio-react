import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Contact from './Contact'
import Home from './Home'
import Resume from './Resume'
import ProjectList from './ProjectList'
// import PropTypes from 'prop-types'


function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={ProjectList} />
      </Switch>
    </div>
  )
}

export default App