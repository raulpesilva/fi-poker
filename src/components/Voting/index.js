import React from 'react'
import api from '../../api';
import * as Styled from './styles'

const Voting = ({ title, description, id, roomId }) => {
  const handleClick = e => {
    e.stopPropagation()
  };

  const handleSelectVote = async vote => {
    const { data } = await api.post(`/rooms/${roomId}/cards/${id}/vote`, {
      vote, 
    })

    console.log('vote', data);
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TitleDescription>Descrição</Styled.TitleDescription>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Board></Styled.Board>
      <Styled.WrapperCards>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(0)}>0</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(1)}>1</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(2)}>2</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(3)}>3</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(5)}>5</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote(8)}>8</Styled.Points>
        </Styled.Card>
        <Styled.Card>
          <Styled.Points onClick={() => handleSelectVote('?')}>?</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote('infinity')}>
          <Styled.InfinityIcon />
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote('coffee')}>
          <Styled.CoffeeIcon />
        </Styled.Card>
      </Styled.WrapperCards>
    </Styled.Container>
  )
}

export default Voting
