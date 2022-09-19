import styled from 'styled-components'
import { breakpoints } from '../../../../styles/Global'

export const TableContainer = styled.div`
  display: flex;
  background-color: #d9d9d9;
  width: 100%;
  max-width: 450px;
  min-width: 380px;

  height: 100%;
  border-radius: 10px;

  overflow-y: scroll;
  margin-bottom: 44px;

  flex-direction: column;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media screen and (min-width: ${breakpoints.fh}px) {
    max-width: 550px;
  }
`
