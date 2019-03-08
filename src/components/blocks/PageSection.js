import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../elements/SectionTitle'

const StyledPageSection = styled.section`
  margin-top: 3em;
  margin-right: 10%;
`

export default function PageSection (props) {
  return (
    <StyledPageSection>
      {props.title && <SectionTitle>{props.title}</SectionTitle>}
      {props.children}
    </StyledPageSection>
  )
}
