import axios, { AxiosRequestConfig } from 'axios'

export const baseURL = 'http://26.181.166.34:8080'

export const api = axios.create({
  baseURL,
})

api.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  //   const { token } = store.getState().user || {};

  // if (token !== null && token !== undefined) {
  if (config.headers) config.headers.token = 'SDMtwAANIHLvb56UCRJTp%N7WVot8y2w%hVK4W6LLnRZn2Ptev@tVRWW2D#bp6c0'
  // }
  return config
})
