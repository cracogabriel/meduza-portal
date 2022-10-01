import styled, { keyframes } from 'styled-components'

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(
    252.6deg,
    rgba(129, 0, 93, 0.71) 2.91%,
    rgba(87, 32, 72, 0.72) 12.64%,
    rgba(11, 9, 11, 0.583333) 37.9%,
    rgba(0, 0, 0, 0.87) 78.09%
  );
  background-repeat: no-repeat;
`

export const ImageLogin = styled.img`
  width: 500px;
  height: auto;
  object-fit: contain;
`

const entrance = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px;
  width: 500px;
  height: 460px;
  border-radius: 10px;
  background: linear-gradient(225.95deg, rgba(255, 255, 255, 0.212) 7.47%, rgba(255, 255, 255, 0.053) 96.58%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  animation: ${entrance} 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

export const LoginLogo = styled.img`
  cursor: pointer;
  width: 160px;
  height: auto;
  object-fit: contain;
`
