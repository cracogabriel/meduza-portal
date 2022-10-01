import styled from 'styled-components'

export type SvgIconBaseProps = {
  width: string
  margin?: string
}

export const SvgIconBase = styled.img<SvgIconBaseProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`
