import React from 'react'
import {
  TableDataContainer,
  TableDataIcon,
  TableDataInfoContainer,
  TableDataInfoName,
  TableDataInfoNumber,
} from './style'

function TableData() {
  const personIcon = require('../../../../../../assets/personIcon.png')

  return (
    <TableDataContainer>
      <TableDataIcon src={personIcon} width={45} height={45} />
      <TableDataInfoContainer>
        <TableDataInfoName>Gabriel Craco Tasarz</TableDataInfoName>
        {/*adicionar ... caso nome seja muito grande nao esquecer*/}
        <TableDataInfoNumber>(44)991133921</TableDataInfoNumber>
      </TableDataInfoContainer>
    </TableDataContainer>
  )
}

export default TableData
