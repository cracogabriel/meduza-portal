import React from 'react'
import { IconBase, LoginInputContainer, LoginInputField, LoginInputIcon } from './style'
import InputMask from 'react-input-mask'

type Props = {
  iconSrc?: string
  margin?: string
  placeholder?: string
  inputType?: 'password' | 'number' | 'email'
  jsxIcon?: JSX.Element
  error?: boolean
  value: string
  mask?: string | (string | RegExp)[]
  maskPlaceholder?: string
  handleChange: (e: string) => void
}

function ModalInput(props: Props) {
  return (
    <LoginInputContainer margin={props.margin} error={props.error}>
      <>
        {props.jsxIcon && <IconBase>{props.jsxIcon}</IconBase>}
        {props.iconSrc && <LoginInputIcon src={props.iconSrc} />}
        {props.mask ? (
          <InputMask
            placeholder={props.placeholder}
            onChange={(e) => props.handleChange(e.target.value)}
            value={props.value}
            mask={props.mask}
            maskPlaceholder={props.maskPlaceholder}
          ></InputMask>
        ) : (
          <LoginInputField
            placeholder={props.placeholder}
            type={props.inputType}
            onChange={(e) => props.handleChange(e.target.value)}
            value={props.value}
          />
        )}
      </>
    </LoginInputContainer>
  )
}

export default ModalInput
