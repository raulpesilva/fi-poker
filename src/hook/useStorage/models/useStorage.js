import { useCallback, useEffect } from 'react'
import useStorageContext from './useStorageContext'

const useStorage = name => {
  const [state, dispatch] = useStorageContext()
  const getItem = useCallback(() => {
    try {
      const value = localStorage.getItem(name)
      return JSON.parse(value)
    } catch (error) {}
  }, [name])

  const setItem = useCallback(
    value => {
      try {
        localStorage.setItem(name, JSON.stringify(value))
        dispatch({ type: 'set', payload: { name, value } })
      } catch (error) {
        // Error saving data
      }
    },
    [dispatch, name]
  )

  const removeItem = () => {
    try {
      localStorage.removeItem(name)
      dispatch({ type: 'clear', payload: { name } })
    } catch (error) {}
  }
  useEffect(() => {
    // getItem?.().then(data => data && setItem(data))
  }, [getItem, setItem])

  return [state[name], setItem, removeItem, state]
}

export default useStorage
