import React from 'react'
import styled from 'styled-components'

import PageTitle from './PageTitle'
import PageBody from './PageBody'
import PageBlock from './PageBlock'
import Page from './Page'

const StyledAboutPage = styled(Page)``

export default function AboutPage (props) {
  return (
    <StyledAboutPage>
      <PageTitle>About Me</PageTitle>
      <PageBody>
        <PageBlock />
      </PageBody>
    </StyledAboutPage>
  )
}
