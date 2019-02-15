import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import About from './About'
import Home from './Home'
// import PropTypes from 'prop-types'


function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
}

export default App