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
          In this totally original idea (Do Not Steal) we have a twitter-like
          social media site with followers and a feed.
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
          This project gamifies the GitHub API. Comparing two devs has never
          been so much fun!
          <br />
          Features:
          <ul>
            <li>Devs</li>
            <li>Duels</li>
          </ul>
        </PageSection>
      </PageBody>
    </StyledProjectsPage>
  )
}
