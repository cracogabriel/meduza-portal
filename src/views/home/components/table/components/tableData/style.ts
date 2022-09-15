import styled from 'styled-components'

export const TableDataContainer = styled.div`
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
`

type TableDataIconProps = {
  width: number
  height: number
}

export const TableDataIcon = styled.img<TableDataIconProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

export const TableDataInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 12px;
`

export const TableDataInfoName = styled.p`
  font-size: 18px;
  height: 100%;
`

export const TableDataInfoNumber = styled.p`
  font-size: 12px;
  height: 100%;
`
