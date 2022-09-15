import React from 'react'
import { SidebarContainer, SidebarImage } from './style'

function Sidebar() {
  const meduzaLogo = require('../../../../assets/images/meduzaLogo.png')
  const leaveIcon = require('../../../../assets/images/leaveIcon.png')

  return (
    <SidebarContainer>
      <SidebarImage src={meduzaLogo} alt={'meduza'} width={24} height={37} />
      <SidebarImage src={leaveIcon} alt={'meduza'} width={19} height={17} />
    </SidebarContainer>
  )
}

export default Sidebar
