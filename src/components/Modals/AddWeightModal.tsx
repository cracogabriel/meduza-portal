import { AlertColor } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ModalInput from '../ModalInput'
import SvgIcon from '../SvgIcon'
import Modal from './BaseModal'
import { ModalTitle } from './BaseModal/style'
import weightIcon from '../../assets/images/weightIcon.svg'
import calendarIcon from '../../assets/images/calendarIcon.svg'
import Button from '../Button'
import { FlexBox } from '../FlexBox/style'
import { api } from '../../services/api'
import { Member } from '../../types/GymData'

type Props = {
  member: Member
  isOpenModal: boolean
  handleCloseModal: () => void
  handleSuccess: () => void
  handleSnackbar: (isOpen: boolean, message: string, severity: AlertColor) => void
}

function AddWeightModal({ member, isOpenModal, handleCloseModal, handleSuccess, handleSnackbar }: Props) {
  const [weight, setWeight] = useState('')
  const [date, setDate] = useState('')
  const [errors, setErrors] = useState({ weight: false, date: false })

  const registerWeight = () => {
    try {
      const idGym = localStorage.getItem('gym')
      const params = {
        weight: Number(weight),
        weighted_date: date,
        id_person: member.id_person,
        id_gym: Number(idGym),
      }
      api.post('/api/member/edit/weight', params)
      handleSnackbar(true, 'Pesagem cadastrada com sucesso!', 'success')
    } catch (error) {
      handleSnackbar(true, 'Erro ao cadastrar peso!', 'error')
    } finally {
      handleSuccess()
      handleCloseModal()
    }
  }

  useEffect(() => {
    let newErrors = errors
    if (date.replace(/[^0-9]/g, '').length !== 8) newErrors = { ...newErrors, date: true }
    else newErrors = { ...newErrors, date: false }
    newErrors = { ...newErrors, weight: weight.length === 0 }
    setErrors(newErrors)
  }, [date, weight])

  return (
    <Modal width={'300px'} height={'250px'} isOpen={isOpenModal} handleCloseModal={handleCloseModal}>
      <>
        <ModalTitle>cadastrar pesagem</ModalTitle>
        <ModalInput
          jsxIcon={<SvgIcon width={'28px'} src={weightIcon} />}
          margin={'20px 0 0 0'}
          placeholder={'peso (kg)'}
          handleChange={setWeight}
          inputType={'number'}
          value={weight}
          error={errors.weight}
        />
        <ModalInput
          jsxIcon={<SvgIcon width={'16px'} src={calendarIcon} />}
          margin={'20px 0 0 0'}
          placeholder={'data pesagem '}
          handleChange={setDate}
          value={date}
          error={errors.date}
          mask='99/99/9999'
          maskPlaceholder='dd/mm/yyyy'
        />
        <FlexBox justify='center'>
          <Button
            width='100%'
            height='36px'
            margin='30px 0 0 0'
            fontFamily={'SackersGothicStd'}
            content={'cadastrar peso'}
            disabled={errors.date || errors.weight}
            onClick={registerWeight}
          />
        </FlexBox>
      </>
    </Modal>
  )
}

export default AddWeightModal
