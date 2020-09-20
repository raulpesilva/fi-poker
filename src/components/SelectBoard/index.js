import React, { useEffect, useState } from 'react'
import useStorage from '../../hook/useStorage'
import * as Styled from './styles'

const SelectBoard = () => {
  const handleStop = e => {
    e.stopPropagation()
  }
  const [boards, setBoards] = useState([])
  const [lists, setLists] = useState([])
  const setCards = useStorage('cards')[1]

  useEffect(() => {
    window.Trello.get('/members/me/boards').then(response => {
      console.log(response)
      setBoards(response)
    })
  }, [])
  const handleSelectBoard = board => {
    //https://api.trello.com/1/boards/${listkey}/lists?key=${key}&token=${token}
    window.Trello.get(`/boards/${board.id}/lists`).then(response => {
      console.log(response)
      setLists(response)
    })
  }
  const handleSelectList = list => {
    //https://api.trello.com/1/lists/${listkey}/cards?key=${key}&token=${token}
    window.Trello.get(`/lists/${list.id}/cards`).then(response => {
      console.log('vnjbvnkdvnkb', response)
      setCards(response)
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
