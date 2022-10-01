import * as React from 'react'

export type ComponentContextData = {
  token: string
  id_gym: string
}

const context = React.createContext<Partial<ComponentContextData>>({})
const { Consumer, Provider } = context

export { context as ComponentContext }
export { Consumer as ComponentContextConsumer }
export { Provider as ComponentContextProvider }
