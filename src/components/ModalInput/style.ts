import styled from 'styled-components'

type LoginInputContainerProps = {
  margin?: string
  error?: boolean
}

export const LoginInputContainer = styled.div<LoginInputContainerProps>`
  width: 100%;
  display: flex;
  height: 30px;

  border-bottom: 2px solid #000000;
  align-items: center;
  margin: ${(props) => props.margin};
  border-bottom: ${(props) => props.error && '2px solid tomato'};

  & > input {
    border: none;
    font-size: 16px;

    align-items: center;
    width: 100%;
    color: #000000;
    background: transparent;
    padding: 0 8px;

    &::placeholder {
      color: #626262;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`
export const LoginInputField = styled.input`
  border: none;
  font-size: 16px;

  align-items: center;
  width: 100%;
  color: #000000;
  background: transparent;
  padding: 0 8px;

  &::placeholder {
    color: #626262;
  }

  &:focus {
    border: none;
    outline: none;
  }
`

export const LoginInputIcon = styled.img`
  width: 24px;
  height: auto;
  object-fit: contain;
`

export const IconBase = styled.div`
  width: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 4px;
  object-fit: contain;
`
