import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

const NavLink = styled(RouterNavLink)`
  &:hover {
    text-shadow: 2px 2px 2px ${props => props.shadowColor};
  }
  &.active {
    text-shadow: 2px 2px 2px ${props => props.shadowColor};
  }
`

NavLink.defaultProps = {
  shadowColor: 'magenta'
}

export default NavLink
