import React from 'react'
import Button from '../../components/shared/button'
import Input from '../../components/shared/input'
import CreatorButton from '../../components/creatorButton'
import useModal from '../../hook/useModal'

const Room = () => {
  const { sendMessage } = useModal()
  const handleClick = () => {
    sendMessage({
      title: 'teste',
      descriptionTitle: 'marcos lixo',
      description: 'testestasdfhas hasdkfhaklsdhj',
      type: 'teste',
    })
  }
  return (
    <>
      <Button onClick={handleClick}>Entrar</Button>
      <Input placeholder="Teste"></Input>
      <CreatorButton editable={true}>Criar tarefa</CreatorButton>
    </>
  )
}

export default Room
