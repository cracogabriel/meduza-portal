import styled from 'styled-components'
import { breakpoints } from '../../../../../../../../styles/Global'

export const EvolutionContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  margin-top: 2em;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.xl}px) {
    max-width: 400px;
  }

  @media screen and (min-width: ${breakpoints.fh}px) {
    max-width: 500px;
  }
`

export const EvolutionBox = styled.div`
  display: flex;
  width: 100%;
  background: #d9d9d9;
  border-radius: 10px;

  flex-direction: column;
  overflow-y: scroll;

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
`

export const EvolutionData = styled.div`
  display: flex;
  background: #fbfbfb;
  border-radius: 10px;
  min-height: 34px;
  max-height: 34px;
  align-items: center;
  margin: 4px 8px;
  padding: 0 16px;
  justify-content: space-between;
  flex-direction: row;
  height: 34px;

  &:first-child {
    margin-top: 8px;
  }
`

export const EvolutionInfo = styled.p`
  font-size: 13px;
`
export const PlainIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: 0px 10px;
`

export const PlainSeparator = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-right: 16px;
`

export const EvolutionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const EvolutionEdit = styled.p`
  font-size: 14px;
  color: #9f4786;
  text-decoration: underline;
  cursor: pointer;
`

export const EvolutionTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #202020;
  font-family: 'SackersGothicStd';
  font-weight: 100;
  height: auto;
  margin-bottom: 6px;
`
