import React, { useReducer } from 'react'
import StorageContext from './StorageContext'
import StorageReducer, { InitialState } from './StorageReducer'

const StorageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StorageReducer, InitialState)
  return (
    <StorageContext.Provider value={[state, dispatch]}>
      {children}
    </StorageContext.Provider>
  )
}

export default StorageProvider
