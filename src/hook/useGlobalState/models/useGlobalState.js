import { useCallback } from 'react'
import GlobalStateContext from './useGlobalState'

const useGlobalState = name => {
  const [state, dispatch] = GlobalStateContext()

  const setItem = useCallback(
    value => {
      try {
        dispatch({ type: 'set', payload: { name, value } })
      } catch (error) {
        // Error saving data
      }
    },
    [dispatch, name]
  )

  const removeItem = () => {
    try {
      dispatch({ type: 'clear', payload: { name } })
    } catch (error) {}
  }

  return [state[name], setItem, removeItem, state]
}

export default useGlobalState
