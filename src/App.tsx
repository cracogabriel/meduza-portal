import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'
import Register from './views/register'

function App() {
  const token = localStorage.getItem('token')

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='home' element={!!token ? <Home /> : <Navigate to='/login' replace />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}

export default App
