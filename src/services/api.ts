import axios, { AxiosRequestConfig } from 'axios'

export const baseURL = 'http://26.181.166.34:8080'

export const api = axios.create({
  baseURL,
})

api.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  const token = localStorage.getItem('token')
  if (config.headers && token) config.headers.token = token
  return config
})
