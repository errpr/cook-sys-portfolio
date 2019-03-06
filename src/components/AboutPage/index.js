import React from 'react'
import StyledAboutPage from './StyledAboutPage'
import PageTitle from '../PageTitle/'
import PageBody from '../PageBody/'
import PageBlock from '../PageBlock/'

export default function AboutPage (props) {
  return (
    <StyledAboutPage>
      <PageTitle>About Me</PageTitle>
      <PageBody>
        <PageBlock>Interests or something</PageBlock>
        <PageBlock>Cat photo</PageBlock>
        <PageBlock>Contact Info I guess</PageBlock>
      </PageBody>
    </StyledAboutPage>
  )
}
