import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import PageBody from './PageBody'
import PageTitle from './PageTitle'
import PageBlock from './PageBlock'

const StyledHomePage = styled(Page)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`

export default function HomePage (props) {
  return (
    <StyledHomePage>
      <PageTitle>Welcome</PageTitle>
      <PageBody>
        <PageBlock>
          Now this is a website all about how <br />
          my life got flipped, turned upside-down <br />
          and I'd like to take a minute, just sit right there <br />
          I'll tell you how I became the best programm-air <br />
        </PageBlock>
      </PageBody>
    </StyledHomePage>
  )
}
