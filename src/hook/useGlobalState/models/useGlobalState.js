import { useCallback, useEffect } from 'react'
import useGlobalStateContext from './useGlobalStateContext'

const useGlobalState = (name, initialState) => {
  const [state, dispatch] = useGlobalStateContext()

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
  useEffect(() => {
    !state[name] ?? initialState ?? setItem(initialState)
  }, [initialState, name, setItem])

  return [state[name], setItem, removeItem, state]
}

export default useGlobalState
