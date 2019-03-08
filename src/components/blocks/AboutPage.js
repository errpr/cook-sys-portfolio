import React from 'react'
import styled from 'styled-components'

import PageTitle from '../elements/PageTitle'
import PageBody from '../elements/PageBody'
import PageSection from './PageSection'
import Page from './Page'

const StyledAboutPage = styled(Page)``

export default function AboutPage (props) {
  return (
    <StyledAboutPage>
      <PageTitle>About Me</PageTitle>
      <PageBody>
        <PageSection title='My Life Story'>
          I was born, I lived a while, then I wrote this website.
        </PageSection>
        <PageSection title='My Interests'>
          I like to read (novels mostly), rage at the news, drink wine, and
          watch eSports.
        </PageSection>
        <PageSection title='Tech & Programming'>
          My interest in technology started at an early age, my brother showed
          me how to make mods for Quake and I was hooked. Throughout my life I
          taught myself how to make websites, video games, robots, and even
          compilers.
        </PageSection>
        <PageSection title='Education'>
          After choosing software development as a career, I knew I needed
          something to distinguish myself. Last year I achieved 6 online
          programming certifications, graduated from a local programming course
          called Tech 901, and now I'm here at FastTrack'D.
        </PageSection>
      </PageBody>
    </StyledAboutPage>
  )
}
