import styled from 'styled-components'

type LoginInputContainerProps = {
  margin?: string
}

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: tomato;
`

export const LoginInputContainer = styled.div<LoginInputContainerProps>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.margin};
`

export const InputContainer = styled.div<LoginInputContainerProps>`
  width: 100%;
  display: flex;
  height: 36px;

  font-family: 'DMSerifDisplay';
  font-style: italic;
  background: #727072;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 10px;
  align-items: center;
  margin: ${(props) => props.margin};
`
export const LoginInputField = styled.input`
  border: none;
  font-size: 16px;

  align-items: center;
  width: 100%;
  color: #ffffff;
  background: transparent;
  padding: 0 8px;

  &::placeholder {
    color: #cbcbcb;
  }

  &:focus {
    border: none;
    outline: none;
  }
`

export const LoginInputIcon = styled.img`
  width: 16px;
  height: auto;
  object-fit: contain;
`
