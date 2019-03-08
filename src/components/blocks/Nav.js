import React from 'react'
import NavLink from '../elements/NavLink'
import BigName from '../elements/BigName'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: none;
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-end;
  font-family: 'Amatic SC', cursive;
  font-size: 54pt;
  height: 90vh;
  margin-right: 15px;
  padding-right: 15px;
`

function Nav (props) {
  return (
    <StyledNav>
      <NavLink exact to='/'>
        <BigName />
      </NavLink>
      <NavLink shadowColor='crimson' to='/about'>
        About Me
      </NavLink>
      <NavLink shadowColor='lawngreen' to='/projects'>
        My Projects
      </NavLink>
      <NavLink shadowColor='cyan' to='/resume'>
        My Resume
      </NavLink>
    </StyledNav>
  )
}

export default Nav
