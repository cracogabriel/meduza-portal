import React from 'react'
import { SelectWorkountContainer, SelectWorkout } from '../plan/style'

function WorkoutSelect() {
  return (
    <SelectWorkountContainer>
      <SelectWorkout isSelected>A</SelectWorkout>
      <SelectWorkout>B</SelectWorkout>
      <SelectWorkout>C</SelectWorkout>
    </SelectWorkountContainer>
  )
}

export default WorkoutSelect
