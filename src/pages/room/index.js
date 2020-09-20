import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/button'
import Input from '../../components/shared/input'
import TextArea from '../../components/shared/textArea'
import CreatorButton from '../../components/creatorButton'
import CardCreator from '../../components/cardCreator'
import useModal from '../../hook/useModal'
import { useParams } from 'react-router-dom'

const Room = () => {
  const [teste, setTest] = useState('')
  const { sendMessage } = useModal()
  let { id } = useParams()
  useEffect(() => {
    console.log(id)
  }, [id])
  const handleCLick = () => {
    sendMessage()
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
      <Input placeholder="Teste"></Input>
      <CreatorButton editable={true} onCreate={setTest}>
        Criar tarefa
      </CreatorButton>
      <CreatorButton onClick={handleOpenRoom}>Criar tarefa</CreatorButton>
      <TextArea placeholder="teste"></TextArea>
      <CardCreator></CardCreator>
    </>
  )
}

export default Room
