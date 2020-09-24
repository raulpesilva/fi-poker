import React, { useCallback, useEffect } from 'react'
import * as Styled from './styles'
import CardColumn from '../../components/cardColumn'
import UserList from '../../components/UserList'

import api from '../../api'
import useGlobalState from '../../hook/useGlobalState'
import useRealTimeRoom from '../../hook/useRealTimeRoom'
import useRealTimeCard from '../../hook/useRealTimeCard'
import useRealTimeVote from '../../hook/useRealTimeVote'

const Room = () => {
  useRealTimeCard()
  useRealTimeRoom()
  useRealTimeVote()
  const [idRoom] = useGlobalState('idRoom')
  const [, setCards] = useGlobalState('cards')
  const [, setUsers] = useGlobalState('users')

  const getAtualList = useCallback(async () => {
    const { data } = await api.get(`/rooms/${idRoom}`)

    const formatedData = data?.cards?.reduce((acc, card) => {
      return [...acc, { name: card.title, desc: card.description, id: card._id }]
    }, [])

    data?.cards && setCards({ cardList: formatedData })
  }, [idRoom, setCards])

  const getUsers = useCallback(
    user => {
      api.get(`/rooms/${idRoom}`).then(({ data }) => {
        data?.participants && setUsers(data?.participants)
      })
    },
    [idRoom, setUsers]
  )

  useEffect(() => {
    getUsers()
  }, [getUsers])

  useEffect(() => {
    getAtualList()
  }, [getAtualList])

  return (
    <>
      <Styled.Header>
        <Styled.Logo>Fi Poker</Styled.Logo>
      </Styled.Header>
      <Styled.Main>
        <Styled.WrapperColumns>
          <CardColumn />
        </Styled.WrapperColumns>
        <UserList />
      </Styled.Main>
    </>
  )
}

export default Room
