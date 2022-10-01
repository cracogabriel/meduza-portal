import React, { useState } from 'react'
import { Member } from '../../../../../../types/GymData'
import Evolution from './components/evolution'
import Plan from './components/plan'
import WorkoutSelect from './components/workoutSelect'
import { WorkoutContainer, WorkoutGroup } from './style'

type Props = {
  member?: Member
}

function Workout({ member }: Props) {
  const [selectedWorkout, setSelectedWorkout] = useState<string>('A')
  const workoutTypes = member && member.workoutList && member.workoutList.map((workout) => workout.workout_type)

  return (
    <WorkoutContainer>
      <WorkoutGroup>
        <WorkoutSelect
          workoutTypes={workoutTypes}
          selectedWorkout={selectedWorkout}
          setSelectedWorkout={setSelectedWorkout}
        />
        <Plan
          workout={
            member &&
            member.workoutList &&
            member.workoutList.find((workout) => workout.workout_type === selectedWorkout)
          }
        />
      </WorkoutGroup>
      <Evolution weightList={member?.weightList} />
    </WorkoutContainer>
  )
}

export default Workout
