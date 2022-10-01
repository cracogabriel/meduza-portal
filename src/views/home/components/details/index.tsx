import { Member } from '../../../../types/GymData'
import Info from './components/info'
import Workout from './components/workout'
import { InfoContainer } from './style'

type Props = {
  member?: Member
}

function Details({ member }: Props) {
  return (
    <InfoContainer>
      <Info member={member} />
      <Workout member={member} />
    </InfoContainer>
  )
}

export default Details
