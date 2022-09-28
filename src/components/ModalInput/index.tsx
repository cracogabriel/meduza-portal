import React from 'react'
import { IconBase, LoginInputContainer, LoginInputField, LoginInputIcon } from './style'

type Props = {
  iconSrc?: string
  margin?: string
  placeholder?: string
  inputType?: 'password' | 'number' | 'email'
  jsxIcon?: JSX.Element
}

function ModalInput(props: Props) {
  return (
    <LoginInputContainer margin={props.margin}>
      <>
        {props.jsxIcon && <IconBase>{props.jsxIcon}</IconBase>}
        {props.iconSrc && <LoginInputIcon src={props.iconSrc} />}
        <LoginInputField placeholder={props.placeholder} type={props.inputType} />
      </>
    </LoginInputContainer>
  )
}

export default ModalInput
