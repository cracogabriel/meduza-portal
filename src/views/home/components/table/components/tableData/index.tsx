import React from 'react'
import {
  TableDataContainer,
  TableDataIcon,
  TableDataInfoContainer,
  TableDataText,
  TableDataViewMoreContainer,
} from './style'

type Props = {
  isSelected?: boolean
}

function TableData(props: Props) {
  const { isSelected } = props
  const personIcon = require('../../../../../../assets/personIcon.png')
  const arrowIcon = require('../../../../../../assets/arrowIcon.png')

  return (
    <TableDataContainer isSelected={isSelected}>
      <TableDataIcon src={personIcon} width={45} height={45} />
      <TableDataInfoContainer>
        <TableDataText fontSize={18}>Gabriel Craco Tasarz</TableDataText>
        {/*adicionar ... caso nome seja muito grande nao esquecer*/}
        <TableDataText fontSize={12}>(44)991133921</TableDataText>
      </TableDataInfoContainer>
      <TableDataViewMoreContainer>
        <TableDataText fontSize={11}>ver mais</TableDataText>
        <TableDataIcon src={arrowIcon} width={10} height={8} margin={'0 0 0 3px'} />
      </TableDataViewMoreContainer>
    </TableDataContainer>
  )
}

export default TableData
