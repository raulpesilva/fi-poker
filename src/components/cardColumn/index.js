import React, { useState } from 'react'
import Card from '../card'
import CreatorButton from '../creatorButton'
import EditableCard from '../editableCard'
import * as Styled from './styles'

const CardColumn = () => {
  const [ cardList, setCardList ] = useState([]);

  const handleOnCardCreate = data => {
    setCardList([...cardList, data]);
  }

  const handleOnCardDelete = id => {
    const newCardList = cardList.filter(({ _id }) => _id !== id);

    setCardList(newCardList);
  }

  return (
    <Styled.Container>
      <Styled.CreatorWrapper>
        <EditableCard onCardCreate={handleOnCardCreate}>Criar tarefa</EditableCard>
        <Styled.IntegrationIcon></Styled.IntegrationIcon>
      </Styled.CreatorWrapper>
      { cardList.map(({ name, description, _id }) => 
        <Card title={name} description={description} key={_id} id={_id} onDelete={handleOnCardDelete}/>
      ) }
    </Styled.Container>
  )
}

export default CardColumn