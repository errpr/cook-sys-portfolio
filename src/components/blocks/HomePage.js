import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import PageBody from '../elements/PageBody'
import PageSection from './PageSection'
import UglyPhoto from '../elements/UglyPhoto'
import UglyPhotoSrc from '../../StevenBranson.jpeg'

const StyledHomePage = styled(Page)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`

export default function HomePage (props) {
  return (
    <StyledHomePage>
      <UglyPhoto src={UglyPhotoSrc} />
      <PageBody>
        <PageSection title='Welcome'>
          Now this is a website all about how, my life got flipped, turned
          upside-down, and I'd like to take a minute, just sit right there, I'll
          tell you how I became a great programmer.
        </PageSection>
      </PageBody>
    </StyledHomePage>
  )
}
