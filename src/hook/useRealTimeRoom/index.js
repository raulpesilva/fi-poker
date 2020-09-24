import { useCallback, useEffect } from 'react'
import useSocketIo from '../useSocketIo'
import useGlobalState from '../useGlobalState'
import api from '../../api'

const useRealTimeRoom = () => {
  const socket = useSocketIo()
  const [idRoom] = useGlobalState('idRoom')
  const [, setUsers] = useGlobalState('users')
  const [, setCards] = useGlobalState('cards')

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
        // console.log(data.participants)
      })
    },
    [idRoom, setUsers]
  )
  useEffect(() => {
    socket.on('ROOM_CONFIG_UPDATED', data => {
      if (data.data.roomId === idRoom) {
        console.log('ROOM_CONFIG_UPDATED', data)
      }
    })

    socket.on('NEW_ROOM_PARTICIPANT', data => {
      if (data.data.roomId === idRoom) {
        console.log('NEW_ROOM_PARTICIPANT', data)
        getUsers()
        getAtualList()
      }
    })
  }, [getAtualList, getUsers, idRoom, socket])

  return
}

export default useRealTimeRoom
