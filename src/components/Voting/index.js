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
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
        <Styled.Card />
      </Styled.WrapperCards>
    </Styled.Container>
  )
}

export default Voting
