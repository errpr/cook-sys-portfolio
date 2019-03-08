import styled from 'styled-components'

const StyledFlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: ${props => (props.align ? props.align : 'flex-start')};
  width: 100%;
`

export default StyledFlexRow
