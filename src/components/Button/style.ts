import styled from 'styled-components'

export type ButtonContainerProps = {
  width: string
  height: string
  color?: string
  margin?: string
  background?: string
  borderRadius?: string
  fontFamily?: string
  fontStyle?: string
  fontSize?: string
  disabled?: boolean
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => (props.color ? props.color : '#fff')};
  background: ${(props) => (props.background ? props.background : '#9F4786')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '5px')};
  font-style: ${(props) => props.fontStyle};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  margin: ${(props) => props.margin};

  cursor: pointer;
  cursor: ${(props) => props.disabled && 'auto'};
  opacity: ${(props) => props.disabled && '0.6'};

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`
