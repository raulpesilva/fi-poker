import React, { useEffect, useState } from 'react'
import api from '../../api'
import useGlobalState from '../../hook/useGlobalState'
import * as Styled from './styles'

const SelectBoard = () => {
  const handleStop = e => {
    e.stopPropagation()
  }
  const [boards, setBoards] = useState([])
  const [lists, setLists] = useState([])
  const [, setCards] = useGlobalState('cards')
  const [idRoom] = useGlobalState('idRoom')

  useEffect(() => {
    window.Trello.get('/members/me/boards').then(response => {
      // console.log(response)
      setBoards(response)
    })
  }, [])
  const handleSelectBoard = board => {
    window.Trello.get(`/boards/${board.id}/lists`).then(response => {
      // console.log(response)
      setLists(response)
    })
  }
  const handleSelectList = list => {
    window.Trello.get(`/lists/${list.id}/cards`).then(response => {
      const formatedCards = response?.reduce((acc, card, index) => {
        setCards({ cardList: response, list })
        // console.log('formatedCards', response)
        return [...acc, { title: card.name, description: card.desc, meta: response.list }]
      }, [])

      api
        .post(`/rooms/${idRoom}/cards`, { cards: formatedCards })
        .then(data => {
          // console.log('dataaaaaaaa', data)
        })
        .catch(error => {
          // console.log(error)
        })
    })
  }
  return (
    <Styled.Container onClick={handleStop}>
      <Styled.Wrapper>
        {boards.map(board => (
          <Styled.Card
            url={board.prefs.backgroundImage}
            key={board.id}
            onClick={() => handleSelectBoard(board)}
          >
            <Styled.Title>{board.name}</Styled.Title>
          </Styled.Card>
        ))}
      </Styled.Wrapper>
      <Styled.Wrapper>
        {lists.map(list => (
          <Styled.Card key={list.id} onClick={() => handleSelectList(list)}>
            <Styled.Title>{list.name}</Styled.Title>
          </Styled.Card>
        ))}
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default SelectBoard
