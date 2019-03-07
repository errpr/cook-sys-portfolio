import React from 'react'
import styled from 'styled-components'

const StyledPageTitle = styled.h1``

export default function PageTitle (props) {
  return <StyledPageTitle>{props.children}</StyledPageTitle>
}
