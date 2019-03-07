import React from 'react'
import StyledNavLink from './NavLink'
import BigName from './BigName'
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
      <StyledNavLink exact to='/'>
        <BigName />
      </StyledNavLink>
      <StyledNavLink shadowColor='crimson' to='/about'>
        About Me
      </StyledNavLink>
      <StyledNavLink shadowColor='lawngreen' to='/projects'>
        My Projects
      </StyledNavLink>
      <StyledNavLink shadowColor='cyan' to='/resume'>
        My Resume
      </StyledNavLink>
    </StyledNav>
  )
}

export default Nav
