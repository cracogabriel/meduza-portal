import React from 'react'
import { LoginInputContainer, LoginInputField, LoginInputIcon } from './style'

type Props = {
  IconSrc: string
  margin?: string
  placeholder?: string
  inputType?: 'password' | 'number'
}

function LoginInput(props: Props) {
  return (
    <LoginInputContainer margin={props.margin}>
      <LoginInputIcon src={props.IconSrc} />
      <LoginInputField placeholder={props.placeholder} type={props.inputType} />
    </LoginInputContainer>
  )
}

export default LoginInput
