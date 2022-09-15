import React from 'react'
import TableData from './components/tableData'
import { TableContainer } from './style'

function Table() {
  return (
    <TableContainer>
      <TableData key={'1'} isSelected />
      <TableData key={'12'} />
      <TableData key={'13'} />
      <TableData key={'14'} />
      <TableData key={'15'} />
      <TableData key={'16'} />
      <TableData key={'17'} />
      <TableData key={'18'} />
      <TableData key={'181'} />
      <TableData key={'182'} />
      <TableData key={'183'} />
      <TableData key={'184'} />
      <TableData key={'185'} />
    </TableContainer>
  )
}

export default Table
