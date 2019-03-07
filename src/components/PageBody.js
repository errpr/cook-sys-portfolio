import React from 'react'
import styled from 'styled-components'

const StyledPageBody = styled.div`
  color: white;
`

export default function PageBody (props) {
  return <StyledPageBody>{props.children}</StyledPageBody>
}
