import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import ResumePage from './ResumePage'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  text-shadow: 1px 1px 9px rgba(0, 0, 0, 1);
`

export default function App (props) {
  return (
    <Router>
      <StyledApp>
        <Nav />
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/resume' exact component={ResumePage} />
      </StyledApp>
    </Router>
  )
}
