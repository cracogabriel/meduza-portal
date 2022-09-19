import React from 'react'
import Evolution from './components/evolution'
import Plan from './components/plan'
import WorkoutSelect from './components/workoutSelect'
import { WorkoutContainer, WorkoutGroup } from './style'

function Workout() {
  return (
    <WorkoutContainer>
      <WorkoutGroup>
        <WorkoutSelect />
        <Plan />
      </WorkoutGroup>
      <Evolution />
    </WorkoutContainer>
  )
}

export default Workout
