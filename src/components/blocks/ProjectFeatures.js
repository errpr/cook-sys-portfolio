import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledProjectFeatures = styled.div``

function ProjectFeatures (props) {
  const items = props.features.map(feature => <li>{feature}</li>)

  return (
    <StyledProjectFeatures>
      Features:
      <ul>{items}</ul>
    </StyledProjectFeatures>
  )
}

ProjectFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ProjectFeatures
