<<<<<<< HEAD
import React, { useRef } from 'react'
import * as Styled from './styles'
import Input from '../shared/input'
import TextArea from '../shared/textArea'
import Button from '../shared/button'

const CardCreator = ({ onCreate, onCancel }) => {
  const cardId = Math.floor(Math.random() * 999999);
  const titleRef = useRef()
  const descriptionRef = useRef()

  const hendleClickConclude = () => {
    const title = titleRef?.current?.value;
    const description = descriptionRef?.current?.value;

    console.log({ title, description, _id: cardId });
    onCreate && onCreate({ name: title, description, _id: cardId });
  }

  const hendleClickCancel = () => {
    onCancel && onCancel();
  }

  return (
    <Styled.Container>
      <Input width="100%" placeholder="Nome" ref={titleRef}></Input>
      <TextArea margin="9px 0" placeholder="Descrição" ref={descriptionRef}></TextArea>
      <Styled.ButtonWrapper>
        <Button
          width="80px"
          color="red"
          textColor="highlight"
          margin="0 23px"
          onClick={hendleClickCancel}
        >
          Cancelar
        </Button>
        <Button width="80px" color="green" textColor="highlight" onClick={hendleClickConclude}>
          Concluir
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Container>
  )
}

export default CardCreator
=======
import React from 'react'
import * as Styled from  './styles'
import Input from '../shared/input'
import TextArea from '../shared/textArea'

const CardCreator = () => {
  return (
    <Styled.Container>
      <Input width='100%'></Input>
      <TextArea></TextArea>
    </Styled.Container>
  )
} 

export default CardCreator
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
