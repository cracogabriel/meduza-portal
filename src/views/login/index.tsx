import React from 'react'
import Button from '../../components/Button'
import LoginInput from '../../components/LoginInput'
import { Background, FormContainer, ImageLogin, LoginLogo } from './styles'

function Login() {
  const meduzaLogin = require('../../assets/images/meduzaLogin.png')
  const meduzaLoginLogo = require('../../assets/images/meduzaLoginLogo.png')
  const loginIcon = require('../../assets/images/loginIcon.png')
  const passwordIcon = require('../../assets/images/passwordIcon.png')

  return (
    <Background>
      <FormContainer>
        <LoginLogo src={meduzaLoginLogo} />
        <LoginInput IconSrc={loginIcon} margin={'50px 0 0 0'} placeholder={'email'} />
        <LoginInput IconSrc={passwordIcon} margin={'20px 0 0 0'} placeholder={'senha'} inputType={'password'} />
        <Button
          width={'100%'}
          height={'36px'}
          content={'registrar'}
          margin={'20px 0 0 0'}
          fontFamily={'SackersGothicStd'}
          background={'#969596'}
          onClick={() => console.log('registrou')}
        />
        <Button
          width={'100%'}
          height={'36px'}
          content={'entrar'}
          margin={'20px 0 0 0'}
          fontFamily={'SackersGothicStd'}
          background={'#9F4786'}
          onClick={() => console.log('entrou')}
        />
      </FormContainer>
      <ImageLogin src={meduzaLogin} />
    </Background>
  )
}

export default Login
