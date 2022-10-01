import React from 'react'
import { Workout } from '../../../../../../../../types/GymData'
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
  workout?: Workout
}

function Plan({ workout }: Props) {
  const exerciseIcon = require('../../../../../../../../assets/images/exerciseIcon.png')

  return (
    <>
      <PlainContainer>
        <PlainHeader>
          <PlainTitle>Plano de Treino</PlainTitle>
          <PlainEdit>editar treino</PlainEdit>
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
              <EmptyMessage>
                Este aluno não possuí nenhum exercício no treino {workout?.workout_type},{' '}
                <AddNewMemberButton> clique aqui </AddNewMemberButton> editar o treino atual
              </EmptyMessage>
            </EmptyContainer>
          )}
        </PlainBox>
      </PlainContainer>
    </>
  )
}

export default Plan
