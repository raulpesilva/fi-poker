import React, { useEffect, useState } from 'react'
import useStorage from '../../hook/useStorage'
import useModal from '../../hook/useModal'
import Card from '../card'
import EditableCard from '../editableCard'
import * as Styled from './styles'
import api from '../../api'
import { useParams } from 'react-router-dom'

const CardColumn = () => {
  const [cardList, setCardList] = useState([])
  const { sendMessage } = useModal()
  const [ cards ] = useStorage('cards')
  const { id } = useParams()

  const authTrello = () => {
    var authenticationSuccess = function () {
      console.log('Successful authentication')
      sendMessage({ type: 'selectBoard' })
    }

    var authenticationFailure = function () {
      console.log('Failed authentication')
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
  

  const handleOnCardCreate = data => {
    setCardList([...cardList, data])
  }

  const handleOnCardDelete = id => {
    const newCardList = cardList.filter(({ _id }) => _id !== id)

    setCardList(newCardList)
  }
  useEffect(() => {
    console.log('aquiiii', cards)
  }, [cards])
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
      {cards?.cardList?.map(({ name, desc, id }) => (
        <Card title={name} description={desc} key={id} id={id} onDelete={handleOnCardDelete} />
      ))}
    </Styled.Container>
  )
}

export default CardColumn
