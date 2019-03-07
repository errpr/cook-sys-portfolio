import React from 'react'
import styled from 'styled-components'

const StyledBigName = styled.h1`
  margin: 10px 0;
  font-family: 'Amatic SC', cursive;
  font-size: 72pt;
  mix-blend-mode: screen;
  text-align: right;
  :hover {
    text-shadow: 2px 2px 2px magenta;
  }
`

export default function BigName (props) {
  return (
    <StyledBigName>
      Steven
      <br />
      Branson
    </StyledBigName>
  )
}
