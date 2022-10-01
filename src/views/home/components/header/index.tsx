import { HeaderButton, HeaderContainer, HeaderTitle } from './style'

type Props = {
  title: string
  handleModal: () => void
}

function Header(props: Props) {
  const { title } = props

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButton onClick={props.handleModal}>cadastrar aluno</HeaderButton>
    </HeaderContainer>
  )
}

export default Header
