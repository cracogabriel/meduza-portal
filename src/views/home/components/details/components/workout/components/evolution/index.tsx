import moment from 'moment'
import React from 'react'
import { WeightList } from '../../../../../../../../types/GymData'
import { AddNewMemberButton, EmptyContainer, EmptyMessage } from '../../../../../table/style'
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
  weightList?: WeightList[]
}

function Evolution({ weightList }: Props) {
  return (
    <>
      <EvolutionContainer>
        <EvolutionHeader>
          <EvolutionTitle>Evolução</EvolutionTitle>
          <EvolutionEdit>cadastrar peso</EvolutionEdit>
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
              <EmptyMessage>
                Este aluno não possuí nenhuma pesagem cadastrada, <AddNewMemberButton> clique aqui </AddNewMemberButton>{' '}
                para cadastrar
              </EmptyMessage>
            </EmptyContainer>
          )}
        </EvolutionBox>
      </EvolutionContainer>
    </>
  )
}

export default Evolution
