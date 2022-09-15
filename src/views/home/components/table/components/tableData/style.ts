import styled from 'styled-components'
import { breakpoints } from '../../../../../../styles/Global'

type TableDataContainerProps = {
  isSelected?: boolean
}

type TableDataTextProps = {
  fontSize: number
}

type TableDataIconProps = {
  width: number
  height: number
  margin?: string
}

export const TableDataContainer = styled.div<TableDataContainerProps>`
  display: flex;
  background: #fbfbfb;
  border-radius: 10px;
  height: 72px;
  padding: 12px 20px;
  margin: 10px 20px;
  align-items: center;
  font-size: 16px;

  &:first-child {
    margin-top: 20px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  box-shadow: ${(props) => props.isSelected && '0px 4px 4px rgba(0, 0, 0, 0.25)'};
`

export const TableDataIcon = styled.img<TableDataIconProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
`

export const TableDataInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 12px;
`

export const TableDataViewMoreContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  user-select: none;

  cursor: pointer;
`

export const TableDataText = styled.p<TableDataTextProps>`
  font-size: ${(props) => props.fontSize}px;
  height: 100%;
`
