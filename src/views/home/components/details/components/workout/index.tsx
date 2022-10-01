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
  const workoutTypes = member?.workoutList.map((workout) => workout.workout_type)
  console.log(member?.workoutList.filter((workout) => workout.workout_type === selectedWorkout))
  return (
    <WorkoutContainer>
      <WorkoutGroup>
        <WorkoutSelect
          workoutTypes={workoutTypes}
          selectedWorkout={selectedWorkout}
          setSelectedWorkout={setSelectedWorkout}
        />
        <Plan workout={member?.workoutList.find((workout) => workout.workout_type === selectedWorkout)} />
      </WorkoutGroup>
      <Evolution weightList={member?.weightList} />
    </WorkoutContainer>
  )
}

export default Workout
