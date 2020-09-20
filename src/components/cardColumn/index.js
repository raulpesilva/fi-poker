import React, { useState } from 'react'
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
      sendMessage({ type: 'selectBoard' })
    }

    var authenticationFailure = function () {}

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
    api.post(`/rooms/${idRoom}/cards/${card.id}/stage`)
  }
  const handleOnCardCreate = data => {
    api.post(`/rooms/${idRoom}/cards`, { cards: [data] }).then(response => {
      console.log('handleCreate', response)
    })
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
      <Styled.Scroll>
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
      </Styled.Scroll>
    </Styled.Container>
  )
}

export default CardColumn
