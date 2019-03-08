import React from 'react'
import PropTypes from 'prop-types'
import ProjectFeatures from './ProjectFeatures'
import ProjectStack from './ProjectStack'
import ProjectDescription from '../elements/ProjectDescription'
import FlexRow from '../elements/FlexRow'
import styled from 'styled-components'
import SectionTitle from '../elements/SectionTitle'

const StyledProjectSection = styled.section``

function ProjectSection (props) {
  return (
    <StyledProjectSection>
      <FlexRow align='center'>
        <SectionTitle>{props.title}</SectionTitle>
        {props.link ? <a href={props.link}>View on GitHub</a> : <div />}
      </FlexRow>
      <ProjectDescription link={props.link}>
        {props.description}
      </ProjectDescription>
      <FlexRow>
        <ProjectFeatures features={props.features} />
        <ProjectStack stack={props.stack} />
      </FlexRow>
    </StyledProjectSection>
  )
}

ProjectSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string
}

export default ProjectSection
