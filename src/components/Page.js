import styled from 'styled-components'

export default styled.main`
  flex-grow: 1;
  flex-basis: 200px;
  background: none;
  height: 96vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  font-size: 20pt;
`
