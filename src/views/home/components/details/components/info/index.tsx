import SvgIcon from '../../../../../../components/SvgIcon'
import { Member } from '../../../../../../types/GymData'
import { DetailedContainer, DetailedImage, DetailedText, DetailedWhatsapp, InfoContainer } from './style'
import whatsappIcon from '../../../../../../assets/images/whatsappIcon.svg'

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
          {member && member.person_name && member.person_name.length > 30
            ? member.person_name.slice(0, 30) + '...'
            : member?.person_name}
        </DetailedText>
        <DetailedText fontSize={20}>{member?.person_email}</DetailedText>
        {member && member.cellphone && (
          <DetailedWhatsapp
            fontSize={20}
            href={`https://api.whatsapp.com/send?phone=55${member && member.cellphone}&text=Ol%C3%A1%20${
              member && member.person_name
            }%2C%20tudo%20bem%3F`}
            target='_blank'
          >
            {member &&
              member.cellphone &&
              member.cellphone.replace(/\D+/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')}
            <SvgIcon width={'18px'} margin='0 0 3px 4px' src={whatsappIcon} />
            <p>abrir whatsapp</p>
          </DetailedWhatsapp>
        )}

        <DetailedText fontSize={20}>
          {member && member.height && member.height / 100}
          {member && member.height && 'm'} {member && member.height && ' | '}{' '}
          {member && member.person_age && member.person_age}
          {member && member.person_age && ' anos'}
        </DetailedText>
      </DetailedContainer>
    </InfoContainer>
  )
}

export default Info
