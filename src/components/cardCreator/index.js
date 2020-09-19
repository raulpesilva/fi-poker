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