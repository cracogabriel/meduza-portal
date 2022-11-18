import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Background, FormContainer, ImageLogin, LoginLogo } from './styles'
import { MD5 } from 'md5-js-tools'
import { Alert, AlertColor, Snackbar } from '@mui/material'
import Loading from '../home/components/loading'
import LoginInput from '../../components/InputText'

type SnackbarType = {
  isOpen: boolean
  message: string | null
  severity: AlertColor | undefined
}

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const [snackbar, setSnackbar] = useState<SnackbarType>({ isOpen: false, message: null, severity: undefined })
  const [isLoading, setIsLoading] = useState(false)
  const loginError = emailRegex.test(email) || email.length === 0 ? '' : 'email inválido'
  const passwordError = ''

  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      const md5password = MD5.generate(password)
      const response = await axios.post('http://26.181.166.34:8080/api/gym/login', {
        gym_email: email,
        gym_password: md5password,
      })

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('gym', response.data.id_gym)
      if (response.status === 200 || response.status === 201) navigate('/home')
    } catch (error) {
      setSnackbar({ isOpen: true, message: 'falha ao entrar!', severity: 'error' })
      setPassword('')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) navigate('/home')
  }, [])

  const meduzaLogin = require('../../assets/images/meduzaLogin.png')
  const meduzaLoginLogo = require('../../assets/images/meduzaLoginLogo.png')
  const loginIcon = require('../../assets/images/loginIcon.png')
  const passwordIcon = require('../../assets/images/passwordIcon.png')

  if (isLoading) {
    return <Loading />
  }

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
      <Snackbar
        open={snackbar.isOpen}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
          severity={snackbar.severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Background>
  )
}

export default Login
