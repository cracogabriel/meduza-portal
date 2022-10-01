import styled, { keyframes } from 'styled-components'

const bgAnimation = keyframes`
  0% {
    background: #fdfdfd;
  }
  50% {
    background: #fdfd;
  }
  100% {
    background: #fdfdfd;
  }
`

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation: ${bgAnimation} 7s linear infinite alternate both;
  animation: ${bgAnimation} 7s linear infinite alternate both;
`
