export type Gym = {
  gym_email: string
  gym_name: string
  memberList: Member[]
}

export type Member = {
  person_age?: number
  birthdate?: string
  cellphone?: string
  height?: number
  id_person?: number
  is_active?: number
  person_email?: string
  person_name?: string
  person_password?: string
  weightList?: WeightList[]
  workoutList?: Workout[]
}

export type MemberCad = {
  person_age?: number
  birthdate?: string
  cellphone?: string
  height?: number
  id_person?: number
  is_active?: number
  person_email?: string
  person_name?: string
  person_password?: string
  weightList?: WeightList[]
  workoutList: CadWorkout[]
}

export type MemberEdit = {
  person_age?: number
  birthdate?: string
  cellphone?: string
  height?: number
  id_person?: number
  is_active?: number
  person_email?: string
  person_name?: string
  person_password?: string
  weightList?: WeightList[]
  workoutList?: CadWorkout[]
}

export type WeightList = {
  id_weight: number
  weight: number
  weighted_date: string
}

export type Workout = {
  id_workout: number
  person_id_person: number
  workout_type: string
  exerciseList: Exercice[]
}

export type CadWorkout = {
  id_workout: number
  workout_type: string
  exerciseList: CadExercice[]
}

export type CadExercice = {
  id_exercise: number
  exercise_name?: string
  quant?: number
  sets?: number
  metric?: string
}

type Exercice = {
  exercise_name: string
  id_exercise: number
  metric: string
  quant: number
  sets: number
  workout_id_workout: number
}
