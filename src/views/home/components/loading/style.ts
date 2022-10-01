import styled, { keyframes } from 'styled-components'

const bgAnimation = keyframes`
  0% {
    background-position:100% 50%;
  }
  100% {
    background-position:0 50%
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
  background: linear-gradient(225.95deg, rgba(255, 255, 255, 0.212) 7.47%, rgba(255, 255, 255, 0.053) 96.58%);
  animation: ${bgAnimation} 8s infinite alternate both;
`
