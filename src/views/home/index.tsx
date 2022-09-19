import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Member } from '../../types/GymData'
import Details from './components/details'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Table from './components/table'
import { HomeBackground, HomeLimiter, TableDetailsLimiter } from './style'

function Home() {
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState<Member[]>([])
  document.title = 'Home '

  const handleUserData = useCallback(async () => {
    try {
      setLoading(true)
      // const response = await axios.get('http://26.181.166.34:8080/api/v1/gym/1')
      // setMembers(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleUserData()
  }, [handleUserData])

  if (loading) {
    return <>carregando...</>
  }

  return (
    <HomeBackground>
      <Sidebar />
      <HomeLimiter>
        <Header title={'academia dos frango'} />
        <TableDetailsLimiter>
          <Table />
          <Details />
        </TableDetailsLimiter>
      </HomeLimiter>
    </HomeBackground>
  )
}

export default Home
