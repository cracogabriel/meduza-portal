import { ModalBackground, ModalCard, ModalContainerProps } from './style'

type Props = ModalContainerProps & {
  isOpen: boolean
  children: JSX.Element
  handleCloseModal: () => void
}

function Modal(props: Props) {
  return (
    <ModalBackground>
      <ModalBackground
        onClick={props.handleCloseModal}
        style={props.isOpen ? { visibility: 'visible' } : { display: 'none' }}
      />
      {props.isOpen && <ModalCard {...props}>{props.children}</ModalCard>}
    </ModalBackground>
  )
}

export default Modal
