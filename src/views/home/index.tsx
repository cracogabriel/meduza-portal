import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import RegisterMemberModal from '../../components/Modals/RegisterMemberModal'
import { Member } from '../../types/GymData'
import Details from './components/details'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Table from './components/table'
import { HomeBackground, HomeLimiter, TableDetailsLimiter } from './style'

function Home() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  document.title = `academia dos frango`
  // const fetchMembers = async () => await axios.get('http://26.181.166.34:8080/api/v1/gym/1').then((res) => res.data)
  // const result = useQuery<Member[]>(['members'], fetchMembers)

  // if (result.isLoading) {
  //   return <>carregando...</>
  // }

  return (
    <HomeBackground>
      <Sidebar />
      <HomeLimiter>
        <Header handleModal={() => setIsOpenModal(true)} title={'academia dos frango'} />
        <TableDetailsLimiter>
          <Table />
          <Details />
        </TableDetailsLimiter>
      </HomeLimiter>
      {isOpenModal && <RegisterMemberModal isOpenModal={isOpenModal} handleCloseModal={() => setIsOpenModal(false)} />}
    </HomeBackground>
  )
}

export default Home
