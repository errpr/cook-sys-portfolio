import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

const StyledNavLink = styled(RouterNavLink)`
  &:hover {
    text-shadow: 2px 2px 2px ${props => props.shadowColor};
  }
  &.active {
    text-shadow: 2px 2px 2px ${props => props.shadowColor};
  }
`

StyledNavLink.defaultProps = {
  shadowColor: 'magenta'
}

export default StyledNavLink
