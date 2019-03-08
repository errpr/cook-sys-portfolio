import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from '../components/blocks/Nav'
import HomePage from '../components/blocks/HomePage'
import AboutPage from '../components/blocks/AboutPage'
import ProjectsPage from '../components/blocks/ProjectsPage'
import ResumePage from '../components/blocks/ResumePage'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: stretch;
  color: white;
  text-shadow: 1px 1px 9px rgb(0, 0, 0);
  height: 95vh;
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
