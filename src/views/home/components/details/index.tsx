import React from 'react'
import Info from './components/info'
import Workout from './components/workout'
import { InfoContainer } from './style'

function Details() {
  return (
    <InfoContainer>
      <Info />
      <Workout />
    </InfoContainer>
  )
}

export default Details
