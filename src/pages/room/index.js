import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/button'
import CardColumn from '../../components/cardColumn'
import useModal from '../../hook/useModal'
// import { useParams } from 'react-router-dom'
import * as Styled from './styles'
import UserList from '../../components/UserList'

import io from 'socket.io-client'

const SOCKET_ORIGIN = 'http://ec2-54-201-21-116.us-west-2.compute.amazonaws.com/'

const Room = () => {
  const { sendMessage } = useModal()
  const [socket, setSocket] = useState({})
  // let { id } = useParams()

  useEffect(() => {
    if (!(socket && socket.on)) {
      return
    }

    socket.on('ROOM_CONFIG_UPDATED', data => {
      console.log('ROOM_CONFIG_UPDATED', data)
    })
    socket.on('NEW_ROOM_PARTICIPANT', data => {
      console.log('NEW_ROOM_PARTICIPANT', data)
    })
    socket.on('NEW_CARDS_ADDED', data => {
      console.log('NEW_CARDS_ADDED', data)
    })
    socket.on('CARD_STAGED_TO_VOTE', data => {
      console.log('CARD_STAGED_TO_VOTE', data)
    })
    socket.on('VOTE_SESSION_FINISHED', data => {
      console.log('VOTE_SESSION_FINISHED', data)
    })
    socket.on('VOTE_UPDATED', data => {
      console.log('VOTE_UPDATED', data)
    })
    socket.on('CARD_VOTED', data => {
      console.log('CARD_VOTED', data)
    })
    // return () => socket && socket.disconnect && socket.disconnect()
  }, [socket])

  useEffect(() => {
    setSocket(io(SOCKET_ORIGIN, {}))
  }, [])

  const handleCLick = () => {
    sendMessage({ type: 'default' })
  }

  const handleOpenRoom = () => {
    sendMessage({
      type: 'voting',
      title: 'tests',
      description: 'asdl jflasdjf lasjdklafjs ljafslçdfj lasjdfl jasdlfjals jd',
    })
  }
  return (
    <>
      <Button onClick={handleCLick}>Entrar</Button>
      <Button onClick={handleOpenRoom}>sala</Button>
      <Styled.Main>
        <CardColumn/>
        <UserList />
      </Styled.Main>
    </>
  )
}

export default Room
