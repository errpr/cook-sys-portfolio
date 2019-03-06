import React from 'react'
import StyledNav from './StyledNav'
import { Link } from 'react-router-dom'
import BigName from '../BigName/'

export default function Nav (props) {
  return (
    <StyledNav>
      <Link to='/'>
        <BigName />
      </Link>
      <Link to='/about'>About Me</Link>
      <Link to='/projects'>My Projects</Link>
      <Link to='/resume'>My Resume</Link>
    </StyledNav>
  )
}
