import React from 'react'
import { ButtonContainer, ButtonContainerProps } from './style'

type Props = ButtonContainerProps & {
  content: string
  onClick: () => void
}

function Button(props: Props) {
  return (
    <ButtonContainer
      width={props.width}
      height={props.height}
      color={props.color}
      background={props.background}
      borderRadius={props.borderRadius}
      fontFamily={props.fontFamily}
      fontSize={props.fontSize}
      fontStyle={props.fontStyle}
      margin={props.margin}
    >
      {props.content}
    </ButtonContainer>
  )
}

export default Button
