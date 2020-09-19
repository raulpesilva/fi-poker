import React from 'react'
import * as Styled from './styles'
import image from '../../assets/image/board.svg'
import Input from '../../components/shared/input'
import Button from '../../components/shared/button'

const Login = () => {
  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.Title>Fi Poker</Styled.Title>
        <Input placeholder="Seu nome" />
        <Styled.SeparatorLarge />
        <Input placeholder="Sala" />
        <Styled.Separator />
        <Button>Entrar</Button>
        <Styled.SeparatorMedium />
        <Styled.WrapperDivision>
          <Styled.Line />
          <Styled.DivisionText>ou</Styled.DivisionText>
          <Styled.Line />
        </Styled.WrapperDivision>
        <Styled.SeparatorMedium />
        <Input placeholder="Nome da sala" />
        <Styled.Separator />
        <Button>Criar sala</Button>
      </Styled.Form>
      <Styled.Image src={image} />
    </Styled.Container>
  )
}

export default Login
