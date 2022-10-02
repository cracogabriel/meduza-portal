import { AlertColor } from '@mui/material'
import { Member } from '../../../../types/GymData'
import Info from './components/info'
import Workout from './components/workout'
import { InfoContainer } from './style'

type Props = {
  member?: Member
  handleSuccess: () => void
  handleSnackbar: (isOpen: boolean, message: string, severity: AlertColor) => void
}

function Details({ member, handleSuccess, handleSnackbar }: Props) {
  return (
    <InfoContainer>
      <Info member={member} />
      <Workout member={member} handleSuccess={handleSuccess} handleSnackbar={handleSnackbar} />
    </InfoContainer>
  )
}

export default Details
