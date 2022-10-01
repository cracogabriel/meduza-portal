import React from 'react'
import { Member } from '../../../../../../types/GymData'
import {
  TableDataContainer,
  TableDataIcon,
  TableDataInfoContainer,
  TableDataText,
  TableDataViewMoreContainer,
} from './style'

type Props = {
  handleSelectedMember: (id_person: number) => void
  isSelected?: boolean
  member: Member
}

function TableData({ isSelected, member, handleSelectedMember }: Props) {
  const personIcon = require('../../../../../../assets/images/personIcon.png')
  const arrowIcon = require('../../../../../../assets/images/arrowIcon.png')

  return (
    <TableDataContainer isSelected={isSelected}>
      <TableDataIcon src={personIcon} width={45} height={45} />
      <TableDataInfoContainer>
        <TableDataText fontSize={18}>
          {member.person_name.length > 20 ? member.person_name.slice(0, 20) + '...' : member.person_name}
        </TableDataText>
        {/*adicionar ... caso nome seja muito grande nao esquecer*/}
        <TableDataText fontSize={12}>
          {member.cellphone.replace(/\D+/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
        </TableDataText>
      </TableDataInfoContainer>
      <TableDataViewMoreContainer onClick={() => handleSelectedMember(member.id_person)}>
        <TableDataText fontSize={11}>ver mais</TableDataText>
        <TableDataIcon src={arrowIcon} width={10} height={8} margin={'0 0 0 3px'} />
      </TableDataViewMoreContainer>
    </TableDataContainer>
  )
}

export default TableData
