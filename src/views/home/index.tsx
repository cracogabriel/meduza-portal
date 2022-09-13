import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Member } from '../../types/GymData'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { HomeBackground, HomeContainer } from './style'

function Home() {
  const [loading, setLoading] = useState(true)
  const [members, setMembers] = useState<Member[]>([])

  const handleUserData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://26.181.166.34:8080/api/v1/gym/1')
      setMembers(response.data)
      console.log(response.data)
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
    <HomeContainer>
      <HomeBackground>
        <Sidebar />
        <Header />
      </HomeBackground>
    </HomeContainer>
  )
}

export default Home
