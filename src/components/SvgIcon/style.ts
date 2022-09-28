import styled from 'styled-components'

export type SvgIconBaseProps = {
  width: string
}

export const SvgIconBase = styled.img<SvgIconBaseProps>`
  width: ${(props) => props.width};
`
