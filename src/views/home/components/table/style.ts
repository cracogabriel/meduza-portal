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

export const EmptyContainer = styled.div`
  display: flex;
  border-radius: 10px;
  height: 100%;
  padding: 12px 20px;
  margin: 12px 12px;
  align-items: center;
  background: #fbfbfb;
`

export const EmptyMessage = styled.p`
  font-size: 16px;
  font-family: 'Graphik';
`

export const AddNewMemberButton = styled.b`
  color: #9f4786;
  text-decoration: underline;
  cursor: pointer;
`
