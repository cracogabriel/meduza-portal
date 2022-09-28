import React from 'react'
import nameIcon from '../../assets/images/nameIcon.svg'
import ModalInput from '../ModalInput'
import SvgIcon from '../SvgIcon'
import Modal from './BaseModal'
import {
  AddWorkoutButton,
  ExerciseData,
  ExerciseIcon,
  ExerciseInfo,
  ModalForm,
  ModalTitle,
  SelectWorkout,
  WorkoutRegisterBox,
  WorkoutRegisterContainer,
} from './BaseModal/style'
import emailIcon from '../../assets/images/emailIcon.svg'
import telephoneIcon from '../../assets/images/telephoneIcon.svg'
import heightIcon from '../../assets/images/heightIcon.svg'
import calendarIcon from '../../assets/images/calendarIcon.svg'
import lockIcon from '../../assets/images/lockIcon.svg'
import plusIcon from '../../assets/images/plusIcon.svg'
import exerciseIcon from '../../assets/images/exerciseIcon.png'
import { FlexBox } from '../FlexBox/style'
import Button from '../Button'

type Props = {
  isOpenModal: boolean
  handleCloseModal: () => void
}

function RegisterMemberModal(props: Props) {
  return (
    <Modal width={'1100px'} height={'500px'} isOpen={props.isOpenModal} handleCloseModal={props.handleCloseModal}>
      <>
        <ModalTitle>cadastrar aluno</ModalTitle>
        <FlexBox justify='space-between' direction='row'>
          <ModalForm>
            <ModalInput jsxIcon={<SvgIcon width={'20px'} src={nameIcon} />} placeholder={'nome'} />
            <ModalInput
              inputType={'email'}
              jsxIcon={<SvgIcon width={'24px'} src={emailIcon} />}
              placeholder={'email'}
            />
            <ModalInput jsxIcon={<SvgIcon width={'20px'} src={telephoneIcon} />} placeholder={'telefone'} />
            <ModalInput jsxIcon={<SvgIcon width={'24px'} src={heightIcon} />} placeholder={'altura'} />
            <ModalInput jsxIcon={<SvgIcon width={'18px'} src={calendarIcon} />} placeholder={'data de nascimento'} />
            <ModalInput
              jsxIcon={<SvgIcon width={'15px'} src={lockIcon} />}
              placeholder={'senha'}
              inputType={'password'}
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'15px'} src={lockIcon} />}
              placeholder={'confirmar senha'}
              inputType={'password'}
            />
          </ModalForm>
          <WorkoutRegisterContainer>
            <AddWorkoutButton>adicionar exercício</AddWorkoutButton>
            <FlexBox justify='space-between' direction='row' height={'100%'}>
              <FlexBox direction='column' width='xl'>
                <SelectWorkout isSelected>A</SelectWorkout>
                <SelectWorkout>B</SelectWorkout>
                <SelectWorkout isAddButton>
                  <SvgIcon src={plusIcon} width={'12px'} />
                </SelectWorkout>
              </FlexBox>
              <WorkoutRegisterBox>
                <ExerciseData>
                  <ExerciseIcon src={exerciseIcon} />
                  <FlexBox justify='space-between' direction='row'>
                    <ExerciseInfo>Supino inclinado</ExerciseInfo>
                  </FlexBox>
                </ExerciseData>
              </WorkoutRegisterBox>
            </FlexBox>
          </WorkoutRegisterContainer>
        </FlexBox>
        <FlexBox justify='flex-end'>
          <Button
            width='200px'
            height='36px'
            margin='26px 0 0 0'
            fontFamily={'SackersGothicStd'}
            content={'finalizar cadastro'}
            disabled
            onClick={() => {}}
          />
        </FlexBox>
      </>
    </Modal>
  )
}

export default RegisterMemberModal
