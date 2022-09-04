import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

function Home() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const handleUserData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get('any_url')
      console.log(response)
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

  return <>Home page with axios</>
}

export default Home
