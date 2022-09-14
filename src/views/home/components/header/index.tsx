import React from 'react'
import { HeaderButton, HeaderContainer, HeaderTitle } from './style'

type Props = {
  title: string
}

function Header(props: Props) {
  const { title } = props

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButton>cadastrar aluno</HeaderButton>
    </HeaderContainer>
  )
}

export default Header
