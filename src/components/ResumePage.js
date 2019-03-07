import React from 'react'
import styled from 'styled-components'
import Page from './Page'

const StyledResumePage = styled(Page)`
  background-color: brown;
`

export default function ResumePage (props) {
  return <StyledResumePage>Resume Page</StyledResumePage>
}
