import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import LoginInput from '../../components/LoginInput'
import { Background, FormContainer, ImageLogin, LoginLogo } from './styles'

function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const passwordRegex: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i

  const loginError = emailRegex.test(email) || email.length === 0 ? '' : 'email inválido'
  const passwordError =
    passwordRegex.test(password) || password.length === 0 ? '' : 'a senha deve conter 8 caracteres e ao menos 1 número'
  const confirmPasswordError =
    password !== confirmPassword && confirmPassword.length !== 0 ? 'as senhas devem coincidir' : ''

  const handleRegister = () => {
    console.log('registrou')
  }

  const meduzaLogin = require('../../assets/images/meduzaLogin.png')
  const meduzaLoginLogo = require('../../assets/images/meduzaLoginLogo.png')
  const loginIcon = require('../../assets/images/loginIcon.png')
  const passwordIcon = require('../../assets/images/passwordIcon.png')

  return (
    <Background>
      <FormContainer>
        <LoginLogo src={meduzaLoginLogo} onClick={() => navigate('/login')} />
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
          margin={passwordError ? '5px 0 0 0' : '20px 0 0 0'}
          placeholder={'senha'}
          inputType={'password'}
          handleChange={setPassword}
          value={password}
          errorMessage={passwordError}
        />

        <LoginInput
          IconSrc={passwordIcon}
          margin={confirmPasswordError ? '5px 0 0 0' : '20px 0 0 0'}
          placeholder={'confirmar senha'}
          inputType={'password'}
          handleChange={setConfirmPassword}
          value={confirmPassword}
          errorMessage={confirmPasswordError}
        />

        <Button
          width={'100%'}
          height={'36px'}
          content={'cadastrar'}
          margin={'20px 0 0 0'}
          fontFamily={'SackersGothicStd'}
          background={'#9F4786'}
          disabled={
            loginError.length !== 0 ||
            passwordError.length !== 0 ||
            confirmPasswordError.length !== 0 ||
            password.length === 0 ||
            email.length === 0 ||
            confirmPassword.length === 0
          }
          onClick={handleRegister}
        />
      </FormContainer>
      <ImageLogin src={meduzaLogin} />
    </Background>
  )
}

export default Register
