import React from 'react'
import styled from 'styled-components'
import Page from './Page'
import PageTitle from '../elements/PageTitle'
import PageBody from '../elements/PageBody'
import ProjectSection from './ProjectSection'

const StyledProjectsPage = styled(Page)``

export default function ProjectsPage (props) {
  return (
    <StyledProjectsPage>
      <PageTitle>My Projects</PageTitle>
      <PageBody>
        <ProjectSection
          title='Smart Share'
          description='A command line client for uploading and downloading files, and
            checking the status of stored files. Also a server for facilitating
            the client and file storage.'
          features={[
            'Client & Server',
            'Uploading files',
            'Downloading files',
            'Per file time and number limits on downloads'
          ]}
          stack={[
            'C#',
            '.NET Core',
            'PostgreSQL',
            'EntityFrameworkCore',
            'Npgsql'
          ]}
          link='https://github.com/errpr/cook-sys-smart-share'
        />
        <ProjectSection
          title='Social Media'
          description='A twitter-like social media backend & API with followers and a feed.'
          features={[
            'Send and view tweets',
            'Follow a user',
            'Like a tweet',
            'View a users tweet feed'
          ]}
          stack={[
            'C#',
            '.NET Core',
            'ASP.NET Core',
            'PostgreSQL',
            'EntityFrameworkCore',
            'Npgsql'
          ]}
          link='https://github.com/errpr/cook-sys-social-media'
        />
        <ProjectSection
          title='<dev-duel>'
          description="View and compare developer's GitHub profiles and stats with this project."
          features={[
            'View a developer',
            'Battle two profiles and see the winner',
            'Customized titles & stats',
            'Asynchronous fetching and injection of data'
          ]}
          stack={[
            'JavaScript',
            'NodeJS',
            'Express',
            'Axios',
            'Browser API',
            'GitHub API'
          ]}
          link='https://github.com/errpr/cook-sys-dev-duel'
        />
      </PageBody>
    </StyledProjectsPage>
  )
}
