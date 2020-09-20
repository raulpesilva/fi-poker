import React from 'react'
import api from '../../api'
import useStorage from '../../hook/useStorage'
import Button from '../shared/button'
import * as Styled from './styles'

const Voting = ({ title, description, id, roomId }) => {
  const [userId] = useStorage('userId')
  const [votes, setVotes] = useStorage('votes')
  const [voteSessionFinished, setVoteSessionFinished] = useStorage('voteSessionFinished')

  const handleClick = e => {
    e.stopPropagation()
  }

  const handleSelectVote = async vote => {
    const { data } = await api.post(`/rooms/${roomId}/cards/${id}/vote`, {
      vote: vote.toString(),
      userId,
    })
  }

  const handleClickFinish = async () => {
    const { data } = await api.post(`/rooms/${roomId}/cards/${id}/stage`, {})

    console.log(data)
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TitleDescription>Descrição</Styled.TitleDescription>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Board>
        {votes?.map?.((vote, index) => {
          return (
            <Styled.Card vote={`card-${index}-${Math.random() * 9999}`}>
              {voteSessionFinished && <Styled.Points>{vote.vote}</Styled.Points>}
            </Styled.Card>
          )
        })}
      </Styled.Board>
      <Styled.WrapperCards>
        <Styled.Card onClick={() => handleSelectVote(0)} color="vote0">
          <Styled.Points>0</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote(1)} color="vote1">
          <Styled.Points>1</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote(2)} color="vote2">
          <Styled.Points>2</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote(3)} color="vote3">
          <Styled.Points>3</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote(5)} color="vote5">
          <Styled.Points>5</Styled.Points>
        </Styled.Card>
        <Styled.Card onClick={() => handleSelectVote(8)} color="vote8">
          <Styled.Points>8</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote" onClick={() => handleSelectVote('?')}>
          <Styled.Points>?</Styled.Points>
        </Styled.Card>
        <Styled.Card color="voteInfinity" onClick={() => handleSelectVote('infinity')}>
          <Styled.InfinityIcon />
        </Styled.Card>
        <Styled.Card color="voteCoffee" onClick={() => handleSelectVote('coffee')}>
          <Styled.CoffeeIcon />
        </Styled.Card>

        <Styled.WrapperButton>
          <Button
            width="184px"
            height="64px"
            color="green"
            textColor="highlight"
            onClick={handleClickFinish}
          >
            Finalizar
          </Button>
        </Styled.WrapperButton>
      </Styled.WrapperCards>
    </Styled.Container>
  )
}

export default Voting
