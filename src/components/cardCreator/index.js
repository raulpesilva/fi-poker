import React, { useEffect, useState } from 'react'
import * as Styled from './styles'
import Input from '../shared/input'
import TextArea from '../shared/textArea'
import Button from '../shared/button'

const CardCreator = ({ onCreate, onCancel }) => {
  const [value, setValue] = useState({})

  const handleChangeInput = ({ target }) => {
    const inputValue = target.value
    setValue({ ...value, name: inputValue })
  }

  const handleChangeTextarea = ({ target }) => {
    const textareaValue = target.value
    setValue({ ...value, description: textareaValue })
  }

  const hendleClickConclude = () => {
    onCreate && onCreate(value);
  }

  const hendleClickCancel = () => {
    onCancel && onCancel();
  }

  useEffect(() => {
    console.log(value)
  }, [value]);

  return (
    <Styled.Container>
      <Input width="100%" placeholder="Nome" onChange={handleChangeInput}></Input>
      <TextArea margin="9px 0" placeholder="Descrição" onChange={handleChangeTextarea}></TextArea>
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
