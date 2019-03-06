import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StyledApp from './StyledApp'
import Nav from '../Nav/'
import HomePage from '../HomePage/'
import AboutPage from '../AboutPage/'
import ProjectsPage from '../ProjectsPage/'
import ResumePage from '../ResumePage/'

export default function App (props) {
  return (
    <Router>
      <StyledApp>
        <Nav />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={AboutPage} />
          <Route path='/projects' exact component={ProjectsPage} />
          <Route path='/resume' exact component={ResumePage} />
        </Switch>
      </StyledApp>
    </Router>
  )
}
