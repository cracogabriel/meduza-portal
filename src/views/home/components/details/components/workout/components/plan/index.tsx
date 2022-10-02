import { AlertColor } from '@mui/material'
import React, { useState } from 'react'
import EditMemberModal from '../../../../../../../../components/Modals/EditMemberModal'
import { Member, Workout } from '../../../../../../../../types/GymData'
import { AddNewMemberButton, EmptyContainer, EmptyMessage } from '../../../../../table/style'
import {
  PlainBox,
  PlainContainer,
  PlainTitle,
  PlainData,
  PlainInfo,
  PlainIcon,
  PlainSeparator,
  PlainHeader,
  PlainEdit,
} from './style'

type Props = {
  member?: Member
  workout?: Workout
  handleSuccess: () => void
  handleSnackbar: (isOpen: boolean, message: string, severity: AlertColor) => void
}

function Plan({ workout, member, handleSuccess, handleSnackbar }: Props) {
  const exerciseIcon = require('../../../../../../../../assets/images/exerciseIcon.png')
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <>
      <PlainContainer>
        <PlainHeader>
          <PlainTitle>Plano de Treino</PlainTitle>
          <PlainEdit onClick={() => setIsOpenModal(true)}>editar treino</PlainEdit>
        </PlainHeader>

        <PlainBox>
          {workout && workout.exerciseList && workout.exerciseList.length > 0 ? (
            workout.exerciseList.map((exercise, index) => {
              return (
                <PlainData>
                  <PlainIcon src={exerciseIcon} />
                  <PlainSeparator>
                    <PlainInfo>{exercise.exercise_name}</PlainInfo>
                    <PlainInfo>
                      {exercise.quant}x{exercise.sets}
                    </PlainInfo>
                  </PlainSeparator>
                </PlainData>
              )
            })
          ) : (
            <EmptyContainer>
              <EmptyMessage>Este aluno não possuí nenhum exercício no treino {workout?.workout_type}.</EmptyMessage>
            </EmptyContainer>
          )}
        </PlainBox>
        {isOpenModal && member && (
          <EditMemberModal
            isOpenModal={isOpenModal}
            handleSuccess={handleSuccess}
            handleSnackbar={handleSnackbar}
            handleCloseModal={() => setIsOpenModal(false)}
            toEditMember={member}
          />
        )}
      </PlainContainer>
    </>
  )
}

export default Plan
