import styled from 'styled-components'
import { breakpoints } from '../../../../../../../../styles/Global'

export const PlainContainer = styled.div`
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

export const PlainBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  border-radius: 10px;
  flex-direction: column;
  overflow: auto;

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

export const PlainData = styled.div`
  display: flex;
  background: #fbfbfb;
  border-radius: 10px;
  min-height: 34px;
  max-height: 34px;
  align-items: center;
  margin: 4px 8px;

  &:first-child {
    margin-top: 8px;
  }
`

export const PlainInfo = styled.p`
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

export const SelectPlainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SelectWorkountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  height: 100%;
`
export const PlainHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
`

export const PlainEdit = styled.p`
  font-size: 14px;
  color: #9f4786;
  text-decoration: underline;
  cursor: pointer;
`

export const PlainTitle = styled.p`
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

type SelectWorkoutProps = {
  isSelected?: boolean
}

export const SelectWorkout = styled.div<SelectWorkoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 50px;
  height: 50px;
  width: 50px;
  min-width: 50px;
  background-color: #616161;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 5px;
  cursor: pointer;

  ${(props) => props.isSelected && `min-height: 75px;`}
  ${(props) => props.isSelected && `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`}
  ${(props) => props.isSelected && `background-color: #515151;`}
  ${(props) => props.isSelected && `font-weight: bold;`}


  &:first-child {
    margin-top: 0px;
  }
`
