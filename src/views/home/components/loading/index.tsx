import React from 'react'
import Spinner from './spinner'
import { LoadingContainer } from './style'

function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  )
}

export default Loading
