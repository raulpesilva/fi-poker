import React, { useEffect, useState } from 'react'
import useStorage from '../../hook/useStorage'
import useModal from '../../hook/useModal'
import Card from '../card'
import EditableCard from '../editableCard'
import * as Styled from './styles'
import api from '../../api'

const CardColumn = () => {
  const [cardList, setCardList] = useState([])
  const { sendMessage } = useModal()
  const [cards] = useStorage('cards')
  const [idRoom] = useStorage('idRoom')

  const authTrello = () => {
    var authenticationSuccess = function () {
      // console.log('Successful authentication')
      sendMessage({ type: 'selectBoard' })
    }

    var authenticationFailure = function () {
      // console.log('Failed authentication')
    }

    window.Trello.authorize({
      type: 'popup',
      name: 'localhost',
      scope: {
        read: 'true',
      },
      expiration: 'never',
      success: authenticationSuccess,
      error: authenticationFailure,
    })
  }
  const handleSelectCard = async card => {
    const a = await api.post(`/rooms/${idRoom}/cards/${card.id}/stage`)
    const { data } = await api.get(`/rooms/${idRoom}`)

    console.log('aquiii', data)
  }
  const handleOnCardCreate = data => {
    setCardList([...cardList, data])
  }

  const handleOnCardDelete = id => {
    const newCardList = cardList.filter(({ _id }) => _id !== id)

    setCardList(newCardList)
  }

  return (
    <Styled.Container>
      <Styled.CreatorWrapper>
        <EditableCard onCardCreate={handleOnCardCreate}>Criar tarefa</EditableCard>
        <Styled.IntegrationIcon onClick={authTrello} />
      </Styled.CreatorWrapper>
      {cardList.map(({ title, description, _id }) => (
        <Card
          title={title}
          description={description}
          key={_id}
          id={_id}
          onDelete={handleOnCardDelete}
        />
      ))}
      {cards?.cardList?.map(card => (
        <Card
          onClick={() => handleSelectCard(card)}
          title={card.name}
          description={card.desc}
          key={card.id}
          id={card.id}
          onDelete={handleOnCardDelete}
        />
      ))}
    </Styled.Container>
  )
}

export default CardColumn
