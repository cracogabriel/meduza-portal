export type Member = {
  id_person: number
  person_name: string
  person_email: string
  is_active: string
  cellphone: string
  birthdate: string
  height: number
  gym_name: string
  gym_email: string
  id_gym: number
  gym_id_gym: number
  workoutList: Workout[]
}

type Workout = {
  id_workout: number
  person_id_person2: number
  workout_type: string
  exerciseList: Exercice[]
}

type Exercice = {
  workout_idworkout: number
  exercise_name: string
  quant: number
  metric: string
}
