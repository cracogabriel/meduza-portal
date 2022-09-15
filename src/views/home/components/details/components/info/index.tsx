import React from 'react'
import { DetailedContainer, DetailedImage, DetailedText, InfoContainer } from './style'

function Info() {
  const personIcon = require('../../../../../../assets/images/personIcon.png')

  return (
    <InfoContainer>
      <DetailedImage src={personIcon} />
      <DetailedContainer>
        <DetailedText fontSize={40} fontWeight={'600'} margin={'0 0 4px 0'}>
          Gabriel Craco Tasarz
        </DetailedText>
        <DetailedText fontSize={20}>gabriel_craco@hotmail.com</DetailedText>
        <DetailedText fontSize={20}>(44)991133921</DetailedText>
        <DetailedText fontSize={20}>1.78m</DetailedText>
      </DetailedContainer>
    </InfoContainer>
  )
}

export default Info
