import React, { useEffect } from 'react'
import Button from '../../components/shared/button'
import CardColumn from '../../components/cardColumn'
import useModal from '../../hook/useModal'
import { useParams } from 'react-router-dom'
import * as Styled from './styles'
import UserList from '../../components/UserList'
const Room = () => {
  const { sendMessage } = useModal()
  let { id } = useParams()
  useEffect(() => {
    console.log(id)
  }, [id])
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
        <CardColumn />
        <UserList />
      </Styled.Main>
    </>
  )
}

export default Room
