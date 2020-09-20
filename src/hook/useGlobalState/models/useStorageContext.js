import { useContext } from 'react'
import GlobalStateContext from './GlobalStateContext'

const useGlobalStateContext = () => {
  const GlobalState = useContext(GlobalStateContext)

  if (GlobalState === undefined) {
    throw new Error(
      'não foi possível achar o objeto de GlobalState. seu componente está dentro de um GlobalState provider?'
    )
  }
  return GlobalState
}

export default useGlobalStateContext
