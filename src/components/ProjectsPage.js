import React from 'react'
import styled from 'styled-components'
import Page from './Page'

const StyledProjectsPage = styled(Page)`
  background-color: orange;
`

export default function ProjectsPage (props) {
  return <StyledProjectsPage>Projects Page</StyledProjectsPage>
}
