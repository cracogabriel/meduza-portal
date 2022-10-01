import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import LoginInput from '../../components/LoginInput'
import { Background, FormContainer, ImageLogin, LoginLogo } from './styles'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const loginError = emailRegex.test(email) || email.length === 0 ? '' : 'email inválido'
  const passwordError = ''

  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://26.181.166.34:8080/api/gym/login', {
        gym_email: email,
        gym_password: password,
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('gym', response.data.id_gym)
      if (response.status === 200 || response.status === 201) navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const meduzaLogin = require('../../assets/images/meduzaLogin.png')
  const meduzaLoginLogo = require('../../assets/images/meduzaLoginLogo.png')
  const loginIcon = require('../../assets/images/loginIcon.png')
  const passwordIcon = require('../../assets/images/passwordIcon.png')

  return (
    <Background>
      <FormContainer>
        <LoginLogo src={meduzaLoginLogo} />
        <LoginInput
          IconSrc={loginIcon}
          margin={loginError ? '35px 0 0 0' : '50px 0 0 0'}
          placeholder={'email'}
          handleChange={setEmail}
          value={email}
          errorMessage={loginError}
        />
        <LoginInput
          IconSrc={passwordIcon}
          margin={'20px 0 0 0'}
          placeholder={'senha'}
          inputType={'password'}
          handleChange={setPassword}
          value={password}
          errorMessage={passwordError}
        />

        <Button
          width={'100%'}
          height={'36px'}
          content={'registrar'}
          margin={'20px 0 0 0'}
          fontFamily={'SackersGothicStd'}
          background={'#969596'}
          onClick={() => navigate('/register')}
        />
        <Button
          width={'100%'}
          height={'36px'}
          content={'entrar'}
          margin={'20px 0 0 0'}
          fontFamily={'SackersGothicStd'}
          background={'#9F4786'}
          disabled={
            loginError.length !== 0 || passwordError.length !== 0 || password.length === 0 || email.length === 0
          }
          onClick={() => handleLogin(email, password)}
        />
      </FormContainer>
      <ImageLogin src={meduzaLogin} />
    </Background>
  )
}

export default Login
