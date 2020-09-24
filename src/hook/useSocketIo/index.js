import React, { createContext, useContext } from 'react'
import io from 'socket.io-client'

const SocketIoContext = createContext()

const useSocketIo = () => {
  const socket = useContext(SocketIoContext)
  return socket
}

export const SocketIoProvider = ({ children, url }) => {
  const socket = io(url, {})
  return <SocketIoContext.Provider value={socket}>{children}</SocketIoContext.Provider>
}

export default useSocketIo
