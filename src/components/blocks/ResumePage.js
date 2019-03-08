import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import PageTitle from '../elements/PageTitle'
import PageBody from '../elements/PageBody'
import Resume from '../../StevenBransonResume.pdf'

const StyledResumePage = styled(Page)`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
`

const StyledPageTitle = styled(PageTitle)`
  flex-grow: 0;
`

const StyledPageBody = styled(PageBody)`
  flex-grow: 1;
`

export default function ResumePage (props) {
  return (
    <StyledResumePage>
      <StyledPageTitle>My Resume</StyledPageTitle>
      <StyledPageBody>
        <embed
          src={Resume}
          type='application/pdf'
          width='100%'
          height='600px'
        />
      </StyledPageBody>
    </StyledResumePage>
  )
}
