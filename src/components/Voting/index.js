import React from 'react'
import * as Styled from './styles'

const Voting = ({ title, description }) => {
  const handleClick = e => {
    e.stopPropagation()
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TitleDescription>Descrição</Styled.TitleDescription>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Board></Styled.Board>
      <Styled.WrapperCards>
        <Styled.Card color="vote0">
          <Styled.Points>0</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote1">
          <Styled.Points>1</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote2">
          <Styled.Points>2</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote3">
          <Styled.Points>3</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote5">
          <Styled.Points>5</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote8">
          <Styled.Points>8</Styled.Points>
        </Styled.Card>
        <Styled.Card color="vote">
          <Styled.Points>?</Styled.Points>
        </Styled.Card>
        <Styled.Card color="voteInfinity">
          <Styled.InfinityIcon />
        </Styled.Card>
        <Styled.Card color="voteCoffee">
          <Styled.CoffeeIcon />
        </Styled.Card>
      </Styled.WrapperCards>
    </Styled.Container>
  )
}

export default Voting
