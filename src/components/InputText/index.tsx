import { ErrorMessage, InputContainer, LoginInputContainer, LoginInputField, LoginInputIcon } from './styles'

type Props = {
  IconSrc: string
  margin?: string
  placeholder?: string
  inputType?: 'password' | 'number'
  value: string
  handleChange: (e: string) => void
  errorMessage?: string
}

function LoginInput(props: Props) {
  return (
    <LoginInputContainer margin={props.margin}>
      <ErrorMessage>
        {props.errorMessage && '*'}
        {props.errorMessage}
      </ErrorMessage>
      <InputContainer>
        <LoginInputIcon src={props.IconSrc} />
        <LoginInputField
          onChange={(e) => props.handleChange(e.target.value)}
          value={props.value}
          placeholder={props.placeholder}
          type={props.inputType}
        />
      </InputContainer>
    </LoginInputContainer>
  )
}

export default LoginInput
