import React, { useEffect, useState } from 'react'
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
  ModalTitle,
  SelectWorkout,
  WorkoutRegisterBox,
  WorkoutRegisterContainer,
} from './BaseModal/style'
import plusIcon from '../../assets/images/plusIcon.svg'
import trashIcon from '../../assets/images/trashIcon.svg'
import editIcon from '../../assets/images/editIcon.svg'
import exerciseIcon from '../../assets/images/exerciseIcon.png'
import { FlexBox } from '../FlexBox/style'
import Button from '../Button'
import { CadWorkout, CadExercice, Member, MemberEdit } from '../../types/GymData'
import { api } from '../../services/api'
import { AlertColor } from '@mui/material'

type Props = {
  toEditMember: Member
  isOpenModal: boolean
  handleCloseModal: () => void
  handleSuccess: () => void
  handleSnackbar: (isOpen: boolean, message: string, severity: AlertColor) => void
}

const alphabet = ['A', 'B', 'C', 'D', 'E']

function EditMemberModal(props: Props) {
  const [selectedWorkout, setSelectedWorkout] = useState<CadWorkout | undefined>(
    props.toEditMember.workoutList && props.toEditMember.workoutList[0],
  )

  const [metric, setMetric] = useState('reps')
  const [exerciseName, setExerciseName] = useState('')
  const [quant, setQuant] = useState('')
  const [sets, setSets] = useState('')

  const [isEditingExercise, setIsEditingExercise] = useState<number | null | undefined>(0)

  const idGym = localStorage.getItem('gym')

  const [member, setMember] = useState<MemberEdit>({
    birthdate: props.toEditMember.birthdate,
    cellphone: props.toEditMember.cellphone,
    height: Number(props.toEditMember.height),
    workoutList: props.toEditMember.workoutList,
  })

  const handleCreateWorkout = () => {
    if (member.workoutList) {
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
  }

  const handleDeleteWorkout = () => {
    if (member.workoutList) {
      const workoutList = member.workoutList
      workoutList.pop()
      setSelectedWorkout(member.workoutList[workoutList.length - 1])
      setMember({ ...member, workoutList: workoutList })
    }
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
    if (selectedWorkout && member.workoutList) {
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

  const putMember = () => {
    try {
      const params = {
        person_id_person: props.toEditMember.id_person,
        id_gym: Number(idGym),
        workoutList: member.workoutList,
      }
      api.put('/api/member/edit/workout', params)
    } catch (error) {
      props.handleSnackbar(true, 'Erro ao editar aluno!', 'error')
    } finally {
      props.handleSuccess()
      props.handleSnackbar(true, 'Aluno editado com sucesso!', 'success')
      props.handleCloseModal()
    }
  }

  useEffect(() => {
    setMember({ ...member, workoutList: member.workoutList })
  }, [member.workoutList])

  return (
    <Modal width={'900px'} height={'500px'} isOpen={props.isOpenModal} handleCloseModal={props.handleCloseModal}>
      <>
        <ModalTitle>editar {props.toEditMember.person_name || 'aluno'}</ModalTitle>
        <FlexBox justify='space-between' direction='row'>
          <WorkoutRegisterContainer>
            <AddWorkoutButton
              onClick={handleAddExercise}
              disabled={!!isEditingExercise || (member.workoutList && member.workoutList.length === 0)}
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
                              member.workoutList &&
                              data.id_workout === member.workoutList.length
                            }
                            key={index}
                            isSelected={selectedWorkout?.workout_type === data.workout_type}
                            onClick={() => setSelectedWorkout(data)}
                          >
                            {data.workout_type}
                          </SelectWorkout>
                          {data?.workout_type === selectedWorkout?.workout_type &&
                            member.workoutList &&
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
            onClick={putMember}
          />
        </FlexBox>
      </>
    </Modal>
  )
}

export default EditMemberModal
