import { AlertColor } from '@mui/material'
import { useState } from 'react'
import AddWeightModal from '../../../../../../../../components/Modals/AddWeightModal'
import { Member, WeightList } from '../../../../../../../../types/GymData'
import { EmptyContainer, EmptyMessage } from '../../../../../table/style'
import {
  EvolutionContainer,
  EvolutionEdit,
  EvolutionHeader,
  EvolutionTitle,
  EvolutionBox,
  EvolutionData,
  EvolutionInfo,
} from './style'

type Props = {
  member?: Member
  weightList?: WeightList[]
  handleSuccess: () => void
  handleSnackbar: (isOpen: boolean, message: string, severity: AlertColor) => void
}

function Evolution({ member, weightList, handleSuccess, handleSnackbar }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <EvolutionContainer>
        <EvolutionHeader>
          <EvolutionTitle>Evolução</EvolutionTitle>
          <EvolutionEdit onClick={() => setIsOpenModal(true)}>cadastrar peso</EvolutionEdit>
        </EvolutionHeader>

        <EvolutionBox>
          {weightList && weightList.length > 0 ? (
            weightList.map((data, index) => {
              return (
                <EvolutionData>
                  <EvolutionInfo>{data.weighted_date}</EvolutionInfo>
                  <EvolutionInfo>{data.weight}kg</EvolutionInfo>
                </EvolutionData>
              )
            })
          ) : (
            <EmptyContainer>
              <EmptyMessage>Este aluno não possuí nenhuma pesagem cadastrada.</EmptyMessage>
            </EmptyContainer>
          )}
        </EvolutionBox>
      </EvolutionContainer>
      {isOpenModal && member && (
        <AddWeightModal
          member={member}
          isOpenModal={isOpenModal}
          handleCloseModal={() => setIsOpenModal(false)}
          handleSuccess={handleSuccess}
          handleSnackbar={handleSnackbar}
        />
      )}
    </>
  )
}

export default Evolution
