import React from 'react'
import { SelectWorkountContainer, SelectWorkout } from '../plan/style'

type Props = {
  selectedWorkout: string
  setSelectedWorkout: React.Dispatch<React.SetStateAction<string>>
  workoutTypes?: string[]
}

function WorkoutSelect({ workoutTypes, selectedWorkout, setSelectedWorkout }: Props) {
  return (
    <SelectWorkountContainer>
      {workoutTypes &&
        workoutTypes.length > 0 &&
        workoutTypes.map((data, index) => {
          return (
            <SelectWorkout isSelected={selectedWorkout === data} onClick={() => setSelectedWorkout(data)}>
              {data}
            </SelectWorkout>
          )
        })}
    </SelectWorkountContainer>
  )
}

export default WorkoutSelect
