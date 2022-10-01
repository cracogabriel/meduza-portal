import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}

export default App
