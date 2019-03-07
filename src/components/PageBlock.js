import React from 'react'
import styled from 'styled-components'

const StyledPageBlock = styled.div``

export default function PageBlock (props) {
  return <StyledPageBlock>{props.children}</StyledPageBlock>
}
