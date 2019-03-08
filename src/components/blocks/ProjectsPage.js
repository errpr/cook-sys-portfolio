import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import PageTitle from '../elements/PageTitle'
import PageBody from '../elements/PageBody'
import PageSection from './PageSection'

const StyledProjectsPage = styled(Page)``

export default function ProjectsPage (props) {
  return (
    <StyledProjectsPage>
      <PageTitle>My Projects</PageTitle>
      <PageBody>
        <PageSection title='Smart Share'>
          This application leveraged a cutting edge paradigm of object oriented
          C# for maximizing file sharing synergies.
          <br />
          Features:
          <ul>
            <li>Uploading files</li>
            <li>Downloading files</li>
          </ul>
        </PageSection>
        <PageSection title='Social Media'>
          A twitter-like social media backend & API with followers and a feed.
          <br />
          Features:
          <ul>
            <li>Tweets</li>
            <li>Follows</li>
            <li>Likes</li>
            <li>Feed</li>
          </ul>
        </PageSection>
        <PageSection title='<dev-duel>'>
          This project gamifies the GitHub API.
          <br />
          Features:
          <ul>
            <li>See information from GitHub</li>
            <li>Compare two developers GitHub stats</li>
          </ul>
        </PageSection>
      </PageBody>
    </StyledProjectsPage>
  )
}
