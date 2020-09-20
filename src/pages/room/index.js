import React, { useCallback, useEffect, useState } from 'react'
import CardColumn from '../../components/cardColumn'
import useModal from '../../hook/useModal'
import * as Styled from './styles'
import UserList from '../../components/UserList'

import io from 'socket.io-client'
import api from '../../api'
import useStorage from '../../hook/useStorage'

const SOCKET_ORIGIN = 'http://ec2-54-201-21-116.us-west-2.compute.amazonaws.com/'

const Room = () => {
  const { sendMessage } = useModal()
  const [socket, setSocket] = useState({})
  const [idRoom] = useStorage('idRoom')
  const [cards, setCards] = useStorage('cards')
  const [voteSessionFinished, setVoteSessionFinished] = useStorage('voteSessionFinished')
  const [votes, setVotes] = useStorage('votes')
  const [users, setUsers] = useStorage('users')

  const getAtualList = useCallback(async () => {
    const { data } = await api.get(`/rooms/${idRoom}`)

    const formatedData = data?.cards?.reduce((acc, card) => {
      return [...acc, { name: card.title, desc: card.description, id: card._id }]
    }, [])

    setCards({ cardList: formatedData })
  }, [idRoom, setCards])

  const getUsers = useCallback(
    user => {
      api.get(`/rooms/${idRoom}`).then(({ data }) => {
        setUsers(data.participants)
        // console.log(data.participants)
      })
    },
    [idRoom, setUsers]
  )
  useEffect(() => {
    if (!(socket && socket.on)) {
      return
    }

    socket.on('ROOM_CONFIG_UPDATED', data => {
      if (data.data.roomId === idRoom) {
        console.log('ROOM_CONFIG_UPDATED', data)
      }
    })
    socket.on('NEW_ROOM_PARTICIPANT', data => {
      if (data.data.roomId === idRoom) {
        console.log('NEW_ROOM_PARTICIPANT', data)
        getUsers()
      }
    })
    socket.on('NEW_CARDS_ADDED', data => {
      if (data.data.roomId === idRoom) {
        console.log('NEW_CARDS_ADDED', data)
        getAtualList()
      }
    })
    socket.on('CARD_STAGED_TO_VOTE', data => {
      if (data.data.roomId === idRoom) {
        console.log('CARD_STAGED_TO_VOTE', data)
        const card = cards?.cardList?.find?.(c => c.id === data.data.cardId)
        // console.log('cccccccccccccccaaa', card, cards)
        if (card) {
          sendMessage({
            id: card.id,
            type: 'voting',
            title: card.name,
            description: card.desc,
            roomId: data.data.roomId,
          })
        }
      }
    })
    socket.on('VOTE_SESSION_FINISHED', data => {
      if (data.data.roomId === idRoom) {
        console.log('VOTE_SESSION_FINISHED', data)
        setVoteSessionFinished(true)
      }
    })
    socket.on('VOTE_UPDATED', data => {
      if (data.data.roomId === idRoom && !voteSessionFinished) {
        console.log('VOTE_UPDATED', data)
      }
    })
    socket.on('CARD_VOTED', data => {
      if (data.data.roomId === idRoom && !voteSessionFinished) {
        console.log('CARD_VOTED', data)
        if (votes?.[0]) {
          setVotes([...votes, data.data])
          console.log([...votes, data.data])
        } else {
          setVotes([data.data])
        }
      }
    })
  }, [
    socket,
    cards,
    idRoom,
    getUsers,
    getAtualList,
    sendMessage,
    setVoteSessionFinished,
    voteSessionFinished,
  ])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  useEffect(() => {
    getAtualList()
  }, [getAtualList])

  useEffect(() => {
    setSocket(io(SOCKET_ORIGIN, {}))
  }, [])

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
