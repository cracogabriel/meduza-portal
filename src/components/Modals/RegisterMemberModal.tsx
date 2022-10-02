import React, { useEffect, useState } from 'react'
import nameIcon from '../../assets/images/nameIcon.svg'
import ModalInput from '../ModalInput'
import SvgIcon from '../SvgIcon'
import Modal from './BaseModal'
import {
  AddWorkoutButton,
  ConfirmContainer,
  DeleteWorkout,
  ExerciseCreateButton,
  ExerciseData,
  ExerciseIcon,
  ExerciseInput,
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
import trashIcon from '../../assets/images/trashIcon.svg'
import editIcon from '../../assets/images/editIcon.svg'
import exerciseIcon from '../../assets/images/exerciseIcon.png'
import { FlexBox } from '../FlexBox/style'
import Button from '../Button'
import { MemberCad, CadWorkout, Workout, CadExercice } from '../../types/GymData'
import axios from 'axios'
import { api } from '../../services/api'

type Props = {
  isOpenModal: boolean
  handleCloseModal: () => void
}

const alphabet = ['A', 'B', 'C', 'D', 'E']

function RegisterMemberModal(props: Props) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cellphone, setCellphone] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [birthdate, setBirthdate] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [selectedWorkout, setSelectedWorkout] = useState<CadWorkout | undefined>()
  const [metric, setMetric] = useState('reps')
  const [exerciseName, setExerciseName] = useState('')
  const [quant, setQuant] = useState('')
  const [sets, setSets] = useState('')

  const [isEditingExercise, setIsEditingExercise] = useState<number | null | undefined>(0)
  const [secundaryWorkoutList, setSecundaryWorkoutList] = useState<CadWorkout[]>([])

  const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const passwordRegex: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i
  const cellphoneRegex: RegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/i
  const dateRegex: RegExp =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i

  const idGym = localStorage.getItem('gym')

  const [errors, setErrors] = useState({
    birthdate: '',
    cellphone: '',
    height: '',
    person_email: '',
    person_name: '',
    person_password: '',
    workoutList: '',
  })

  const [member, setMember] = useState<MemberCad>({
    birthdate: birthdate,
    cellphone: cellphone,
    height: Number(height),
    person_email: email,
    person_name: name,
    person_password: password,
    workoutList: [],
  })

  const handleCreateWorkout = () => {
    const newWorkout: CadWorkout = {
      workout_type: alphabet[member.workoutList.length],
      exerciseList: [],
      id_workout: member.workoutList.length + 1,
    }
    let newWorkoutList = member.workoutList
    newWorkoutList.push(newWorkout)
    setMember({ ...member, workoutList: newWorkoutList })
    setSelectedWorkout(newWorkout)
  }

  const handleDeleteWorkout = () => {
    const workoutList = member.workoutList
    workoutList.pop()
    setSelectedWorkout(member.workoutList[workoutList.length - 1])
    setMember({ ...member, workoutList: workoutList })
  }

  const handleAddExercise = () => {
    if (selectedWorkout) {
      let exerciseList: CadExercice[] = selectedWorkout.exerciseList
      let newExercise = {
        id_exercise: exerciseList.length + 1,
        exercise_name: exerciseName,
        metric: metric,
        quant: Number(quant),
        sets: Number(sets),
      }
      exerciseList.push(newExercise)
      setIsEditingExercise(newExercise.id_exercise)
      setSelectedWorkout({ ...selectedWorkout, exerciseList: exerciseList })
    }
  }

  const handleSaveExercise = (idExercise: number) => {
    if (selectedWorkout) {
      let exercise: CadExercice | undefined = selectedWorkout.exerciseList.find(
        (exercise) => exercise.id_exercise === idExercise,
      )
      exercise = {
        id_exercise: idExercise,
        exercise_name: exerciseName,
        metric: metric,
        quant: Number(quant),
        sets: Number(sets),
      }
      let exerciseList: CadExercice[] = selectedWorkout.exerciseList.filter(
        (exercise) => exercise.id_exercise !== idExercise,
      )
      exerciseList.push(exercise)
      setExerciseName('')
      setQuant('')
      setSets('')
      setIsEditingExercise(null)
      setSelectedWorkout({ ...selectedWorkout, exerciseList: exerciseList })

      let newWorkout: CadWorkout | undefined = member.workoutList.find(
        (workout) => workout.id_workout === selectedWorkout.id_workout,
      )

      let workoutListWithoutSelectedWorkout: CadWorkout[] | undefined = member.workoutList.filter(
        (workout) => workout.id_workout !== selectedWorkout.id_workout,
      )

      newWorkout = {
        workout_type: selectedWorkout.workout_type,
        exerciseList: exerciseList,
        id_workout: selectedWorkout.id_workout,
      }

      workoutListWithoutSelectedWorkout.push(newWorkout)
      setMember({ ...member, workoutList: workoutListWithoutSelectedWorkout })
    }
  }

  const handleEditIcon = (exercise: CadExercice) => {
    if (exercise.metric) setMetric(exercise.metric)
    if (exercise.exercise_name) setExerciseName(exercise.exercise_name)
    if (exercise.quant) setQuant(String(exercise.quant))
    if (exercise.sets) setSets(String(exercise.sets))
    setIsEditingExercise(exercise.id_exercise)
  }

  const registerMember = () => {
    try {
      const params = {
        ...member,
        birthdate: birthdate,
        cellphone: cellphone,
        height: Number(height),
        person_email: email,
        person_name: name,
        person_password: password,
        is_active: 1,
        id_gym: Number(idGym),
        weightList: [],
      }
      api.post('/api/member/register', { params })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (name.length === 0 || name.length >= 40) setErrors({ ...errors, person_name: 'nome inválido' })
    if (email.length === 0 || emailRegex.test(email)) setErrors({ ...errors, person_email: 'email inválido' })
    if (cellphone.length === 0 || cellphoneRegex.test(cellphone))
      setErrors({ ...errors, cellphone: 'telefone inválido' })
    if (birthdate.length === 0 || dateRegex.test(birthdate)) setErrors({ ...errors, birthdate: 'data invalida' })
  }, [name, email, cellphone, birthdate])

  useEffect(() => {
    setMember({ ...member, workoutList: member.workoutList })
  }, [member.workoutList])

  return (
    <Modal width={'1100px'} height={'500px'} isOpen={props.isOpenModal} handleCloseModal={props.handleCloseModal}>
      <>
        <ModalTitle>cadastrar aluno</ModalTitle>
        <FlexBox justify='space-between' direction='row'>
          <ModalForm>
            <ModalInput
              jsxIcon={<SvgIcon width={'20px'} src={nameIcon} />}
              placeholder={'nome'}
              handleChange={setName}
              value={name}
            />
            <ModalInput
              inputType={'email'}
              jsxIcon={<SvgIcon width={'24px'} src={emailIcon} />}
              placeholder={'email'}
              handleChange={setEmail}
              value={email}
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'20px'} src={telephoneIcon} />}
              placeholder={'telefone'}
              handleChange={setCellphone}
              error={errors.cellphone}
              value={cellphone}
              mask={'(99) 9 9999.9999'}
              maskPlaceholder={'(nn) n nnnn.nnnn'}
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'24px'} src={heightIcon} />}
              placeholder={'altura'}
              handleChange={setHeight}
              value={height}
              maskPlaceholder='n,nn'
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'18px'} src={calendarIcon} />}
              placeholder={'data de nascimento'}
              handleChange={setBirthdate}
              value={birthdate}
              mask='99/99/9999'
              maskPlaceholder='dd/mm/yyyy'
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'15px'} src={lockIcon} />}
              placeholder={'senha'}
              inputType={'password'}
              handleChange={setPassword}
              value={password}
            />
            <ModalInput
              jsxIcon={<SvgIcon width={'15px'} src={lockIcon} />}
              placeholder={'confirmar senha'}
              inputType={'password'}
              handleChange={setConfirmPassword}
              value={confirmPassword}
            />
          </ModalForm>

          <WorkoutRegisterContainer>
            <AddWorkoutButton
              onClick={handleAddExercise}
              disabled={!!isEditingExercise || member.workoutList.length === 0}
            >
              adicionar exercício
            </AddWorkoutButton>
            <FlexBox justify='space-between' direction='row' height={'100%'}>
              <FlexBox direction='column' width='xl'>
                {member.workoutList &&
                  member.workoutList.length > 0 &&
                  member.workoutList
                    .sort((a, b) => {
                      if (a.workout_type < b.workout_type) return -1
                      if (a.workout_type > b.workout_type) return 1
                      return 0
                    })
                    .map((data, index) => {
                      return (
                        <>
                          <SelectWorkout
                            hasDeleteIcon={
                              selectedWorkout?.workout_type === data.workout_type &&
                              data.id_workout === member.workoutList.length
                            }
                            key={index}
                            isSelected={selectedWorkout?.workout_type === data.workout_type}
                            onClick={() => setSelectedWorkout(data)}
                          >
                            {data.workout_type}
                          </SelectWorkout>
                          {data?.workout_type === selectedWorkout?.workout_type &&
                            data.id_workout === member.workoutList.length && (
                              <DeleteWorkout onClick={handleDeleteWorkout}>
                                <SvgIcon src={trashIcon} width={'26px'} />
                              </DeleteWorkout>
                            )}
                        </>
                      )
                    })}
                {member.workoutList && member.workoutList.length < 5 && (
                  <SelectWorkout isAddButton onClick={handleCreateWorkout}>
                    <SvgIcon src={plusIcon} width={'12px'} />
                  </SelectWorkout>
                )}
              </FlexBox>
              <WorkoutRegisterBox>
                {member.workoutList &&
                  selectedWorkout &&
                  selectedWorkout.exerciseList.length > 0 &&
                  selectedWorkout.exerciseList.map((exercise, index) => {
                    return (
                      <ExerciseData key={index}>
                        <ExerciseIcon src={exerciseIcon} />
                        {isEditingExercise === exercise.id_exercise ? (
                          <ConfirmContainer>
                            <ExerciseInput
                              placeholder={'exercício'}
                              value={exerciseName}
                              onChange={(e) => setExerciseName(e.target.value)}
                            />
                            <div>
                              <ExerciseInput
                                placeholder={'repetições'}
                                width={'120px'}
                                type={'number'}
                                margin={'0px 10px 0px 0px'}
                                value={quant}
                                max={100}
                                min={1}
                                onChange={(e) => setQuant(e.target.value)}
                              />
                              <ExerciseInput
                                placeholder={'séries'}
                                width={'80px'}
                                type={'number'}
                                value={sets}
                                max={100}
                                min={1}
                                onChange={(e) => setSets(e.target.value)}
                              />
                            </div>

                            <ExerciseCreateButton
                              background={'#158b28'}
                              onClick={() => handleSaveExercise(exercise.id_exercise)}
                            >
                              <SvgIcon src={plusIcon} width={'12px'} />
                            </ExerciseCreateButton>
                          </ConfirmContainer>
                        ) : (
                          <ConfirmContainer>
                            <p>{exercise.exercise_name}</p>
                            <p>
                              {exercise.quant}x{exercise.sets}
                            </p>
                            <ExerciseCreateButton background={'#4091BE'} onClick={() => handleEditIcon(exercise)}>
                              <SvgIcon src={editIcon} width={'12px'} />
                            </ExerciseCreateButton>
                          </ConfirmContainer>
                        )}
                      </ExerciseData>
                    )
                  })}
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
            onClick={registerMember}
          />
        </FlexBox>
      </>
    </Modal>
  )
}

export default RegisterMemberModal
