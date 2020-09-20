import { useContext } from 'react'
import StorageContext from './StorageContext'

const useStorageContext = () => {
  const storage = useContext(StorageContext)

  if (storage === undefined) {
    throw new Error(
      'não foi possível achar o objeto de storage. seu componente está dentro de um storage provider?'
    )
  }
  return storage
}

export default useStorageContext
