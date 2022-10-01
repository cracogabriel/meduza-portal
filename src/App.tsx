import axios from 'axios'
import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { ComponentContext, ComponentContextData } from './context/ComponentContext'
import Home from './views/home'
import Login from './views/login'

function App() {
  const [loginInfo, setLoginInfo] = useState<ComponentContextData>()
  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://26.181.166.34:8080/api/gym/login', {
        gym_email: email,
        gym_password: password,
      })
      setLoginInfo(response.data)
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('gym', response.data.id_gym)
      if (response.status === 200 || response.status === 201) navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ComponentContext.Provider value={loginInfo || {}}>
      <Routes>
        <Route path='login' element={<Login handleLogin={handleLogin} />} />
        <Route path='home' element={<Home />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </ComponentContext.Provider>
  )
}

export default App
