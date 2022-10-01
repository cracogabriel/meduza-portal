import { Alert, AlertColor, Snackbar } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import RegisterMemberModal from '../../components/Modals/RegisterMemberModal'
import { ComponentContext } from '../../context/ComponentContext'
import { api } from '../../services/api'
import { Gym } from '../../types/GymData'
import Details from './components/details'
import Header from './components/header'
import Loading from './components/loading'
import Sidebar from './components/sidebar'
import Table from './components/table'
import { HomeBackground, HomeLimiter, TableDetailsLimiter } from './style'

type SnackbarType = {
  isOpen: boolean
  message: string | null
  severity: AlertColor | undefined
}

function Home() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [snackbar, setSnackbar] = useState<SnackbarType>({ isOpen: false, message: null, severity: undefined })
  const [gym, setGym] = useState<Gym | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedMember, setSelectedMember] = useState<number>(0)
  const idGym = localStorage.getItem('gym')

  const fetchGym = async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/api/gym/${idGym}`)
      setGym(response.data)
      if (response.data && response.data.memberList && response.data.memberList[0].id_person)
        setSelectedMember(response.data.memberList[0].id_person)
    } catch (error) {
      setSnackbar({ isOpen: true, message: 'falha ao buscar dados!', severity: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGym()
  }, [])

  document.title = gym ? `${gym.gym_name}` : 'Meduza'

  if (isLoading) {
    return <Loading />
  }

  return (
    <HomeBackground>
      <Sidebar />
      <HomeLimiter>
        <Header handleModal={() => setIsOpenModal(true)} title={`${gym && gym.gym_name}`} />
        <TableDetailsLimiter>
          <Table
            members={gym?.memberList}
            openCadModal={setIsOpenModal}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
          />
          <Details member={gym?.memberList.find((member) => member.id_person === selectedMember)} />
        </TableDetailsLimiter>
      </HomeLimiter>
      {isOpenModal && <RegisterMemberModal isOpenModal={isOpenModal} handleCloseModal={() => setIsOpenModal(false)} />}
      <Snackbar
        open={snackbar.isOpen}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
          severity={snackbar.severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </HomeBackground>
  )
}

export default Home
