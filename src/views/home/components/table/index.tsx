import React from 'react'
import { Member } from '../../../../types/GymData'
import TableData from './components/tableData'
import { AddNewMemberButton, EmptyContainer, EmptyMessage, TableContainer } from './style'

type Props = {
  selectedMember: number
  setSelectedMember: React.Dispatch<React.SetStateAction<number>>
  members?: Member[]
  openCadModal: (isOpen: boolean) => void
}

function Table({ members, openCadModal, selectedMember, setSelectedMember }: Props) {
  return (
    <TableContainer>
      {members && members.length > 0 ? (
        members.map((member, index) => {
          return (
            <TableData
              member={member}
              key={index}
              isSelected={selectedMember === member.id_person}
              handleSelectedMember={setSelectedMember}
            />
          )
        })
      ) : (
        <EmptyContainer>
          <EmptyMessage>
            Você não tem membros cadastrados,{' '}
            <AddNewMemberButton onClick={() => openCadModal(true)}> clique aqui </AddNewMemberButton> para cadastrar
          </EmptyMessage>
        </EmptyContainer>
      )}
    </TableContainer>
  )
}

export default Table
