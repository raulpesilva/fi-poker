import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as Styled from './styles'
import image from '../../assets/image/board.svg'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'
import { useParams } from 'react-router-dom'
import api from '../../api'
import useStorage from '../../hook/useStorage'

const Login = ({ setLogedIn }) => {
  const nameRef = useRef()
  const roomIdRef = useRef()
  const newRoomRef = useRef()
  const { id } = useParams()
  const [, setIdRoom] = useStorage('idRoom')
  const [, setUserId] = useStorage('userId')
  const history = useHistory()

  const handleCreateRoom = async () => {
    const newRoomName = newRoomRef.current.value
    const userName = nameRef.current.value

    const { data } = await api.post('/rooms', {
      roomName: newRoomName,
      userName,
    })

    setUserId(data.owner._id)

    const roomId = data.room?._id

    api.post(`/rooms/${roomId}/config`, {
      sequence: ['0', '1', '2', '3', '5', '8', '?', 'infinity', 'coffee'],
    })

    history.push(`/${data?.room?.code}`)
    data?.room?._id && setIdRoom(data.room._id)
    setLogedIn(true)
  }

  const handleJoinRoom = async () => {
    const newRoomName = id ?? roomIdRef.current.value
    const userName = nameRef.current.value

    const { data } = await api.post(`/rooms/join/${newRoomName}`, {
      name: userName,
    })

    setUserId(data._id)
    setLogedIn(true)
  }

  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.Title>Fi Poker</Styled.Title>
        <Input placeholder="Seu nome" ref={nameRef} />
        {!id && <Styled.SeparatorLarge />}
        {!id && <Input placeholder="Sala" ref={roomIdRef} />}
        <Styled.Separator />
        <Button onClick={handleJoinRoom}>Entrar</Button>
        <Styled.SeparatorMedium />
        {!id && (
          <Styled.WrapperDivision>
            <Styled.Line />
            <Styled.DivisionText>ou</Styled.DivisionText>
            <Styled.Line />
          </Styled.WrapperDivision>
        )}
        {!id && <Styled.SeparatorMedium />}
        {!id && <Input placeholder="Nome da sala" ref={newRoomRef} />}
        <Styled.Separator />
        {!id && <Button onClick={handleCreateRoom}>Criar sala</Button>}
      </Styled.Form>
      <Styled.Image src={image} />
    </Styled.Container>
  )
}

export default Login
