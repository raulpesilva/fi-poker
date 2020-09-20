import React from 'react'
import Button from '../shared/button'
import Input from '../shared/input'
import * as Styled from './styles'
const Modal = () => {
  const handleClick = e => {
    e.stopPropagation()
  }
  return (
    <Styled.Modal onClick={handleClick}>
      <Styled.SeparatorMedium />
      <Styled.Icon />
      <Styled.SeparatorMedium />
      <Styled.Title>Digite seu token</Styled.Title>
      <Styled.Separator />
      <Input placeholder="Token" />
      <Styled.Separator />
      <Button>Entrar</Button>
      <Styled.Separator />
      <Button outlined>Obter token</Button>
    </Styled.Modal>
  )
}

export default Modal
