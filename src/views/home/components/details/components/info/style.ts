import styled from 'styled-components'

type DetailedImageProps = {
  width: number
  height: number
}

type DetailedTextProps = {
  fontSize: number
  margin?: string
}

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 750px;
  min-width: 300px;

  height: 300px;

  align-items: center;
`

export const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`

export const DetailedImage = styled.img<DetailedImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`

export const DetailedText = styled.p<DetailedTextProps>`
  font-size: ${(props) => props.fontSize}px;
  margin: ${(props) => props.margin};
`
