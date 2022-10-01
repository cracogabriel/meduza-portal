import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SidebarContainer, SidebarImage } from './style'

function Sidebar() {
  const meduzaLogo = require('../../../../assets/images/meduzaLogo.png')
  const leaveIcon = require('../../../../assets/images/leaveIcon.png')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('gym')
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <SidebarContainer>
      <SidebarImage src={meduzaLogo} alt={'meduza'} width={24} height={37} onClick={() => navigate('/home')} />
      <SidebarImage src={leaveIcon} alt={'meduza'} width={19} height={17} onClick={handleLogout} />
    </SidebarContainer>
  )
}

export default Sidebar
