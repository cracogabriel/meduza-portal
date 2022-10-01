import React from 'react'
import { ButtonContainer, ButtonContainerProps } from './style'

type Props = ButtonContainerProps & {
  content: string
  onClick: () => void
}

function Button(props: Props) {
  return (
    <ButtonContainer disabled={props.disabled} {...props}>
      {props.content}
    </ButtonContainer>
  )
}

export default Button
