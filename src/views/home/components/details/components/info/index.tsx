import React from 'react'
import { Member } from '../../../../../../types/GymData'
import { DetailedContainer, DetailedImage, DetailedText, InfoContainer } from './style'

type Props = {
  member?: Member
}

function Info({ member }: Props) {
  const personIcon = require('../../../../../../assets/images/personIcon.png')

  return (
    <InfoContainer>
      <DetailedImage src={personIcon} />
      <DetailedContainer>
        <DetailedText fontSize={40} fontWeight={'600'} margin={'0 0 4px 0'}>
          {member && member.person_name.length > 30 ? member.person_name.slice(0, 30) + '...' : member?.person_name}
        </DetailedText>
        <DetailedText fontSize={20}>{member?.person_email}</DetailedText>
        <DetailedText fontSize={20}>
          {member?.cellphone.replace(/\D+/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
        </DetailedText>
        <DetailedText fontSize={20}>{member && member.height / 100}m</DetailedText>
      </DetailedContainer>
    </InfoContainer>
  )
}

export default Info
