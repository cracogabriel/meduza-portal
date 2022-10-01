import styled from 'styled-components'
import { breakpoints } from '../../../../../../styles/Global'

type DetailedTextProps = {
  fontSize: number
  fontFamily?: string
  fontWeight?: string
  margin?: string
}

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  min-width: 150px;

  height: 240px;

  align-items: center;
`

export const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`

export const DetailedImage = styled.img`
  width: 200px;
  height: auto;

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 170px;
  }
`

export const DetailedText = styled.p<DetailedTextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
`

export const DetailedWhatsapp = styled.a<DetailedTextProps>`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  color: black;
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
`
