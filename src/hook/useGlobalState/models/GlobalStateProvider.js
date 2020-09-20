import React, { useReducer } from 'react'
import GlobalStateContext from './GlobalStateContext'
import GlobalStateReducer, { InitialState } from './GlobalStateReducer'

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalStateReducer, InitialState)
  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>{children}</GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
