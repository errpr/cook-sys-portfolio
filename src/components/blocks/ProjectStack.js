import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledProjectStack = styled.div``

function ProjectStack (props) {
  const items = props.stack.map(stackItem => <li>{stackItem}</li>)

  return (
    <StyledProjectStack>
      Stack:
      <ul>{items}</ul>
    </StyledProjectStack>
  )
}

ProjectStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ProjectStack
