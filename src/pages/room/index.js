import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/button'
import Input from '../../components/shared/input'
import TextArea from '../../components/shared/textArea'
import CreatorButton from '../../components/creatorButton'
import CardCreator from '../../components/cardCreator'
import useModal from '../../hook/useModal'

const Room = () => {
  const [teste, setTest] = useState('')
  const { sendMessage } = useModal()
  useEffect(() => {
    console.log(teste)
  }, [teste])
  const handleCLick = () => {
    sendMessage({ title: 'tests' })
  }
  return (
    <>
      <Button onClick={handleCLick}>Entrar</Button>
      <Input placeholder="Teste"></Input>
      <CreatorButton editable={true} onCreate={setTest}>
        Criar tarefa
      </CreatorButton>
      <CreatorButton onClick={() => console.log('testeeewe')}>Criar tarefa</CreatorButton>
      <TextArea placeholder="teste"></TextArea>
      <CardCreator></CardCreator>
    </>
  )
}

export default Room
