import { useCallback, useEffect } from 'react'
import useSocketIo from '../useSocketIo'
import useGlobalState from '../useGlobalState'
import api from '../../api'
import useModal from '../useModal'

const useRealTimeCard = () => {
  const socket = useSocketIo()
  const [idRoom] = useGlobalState('idRoom')
  const [cards, setCards] = useGlobalState('cards')
  const { sendMessage } = useModal()

  const getAtualList = useCallback(async () => {
    const { data } = await api.get(`/rooms/${idRoom}`)

    const formatedData = data?.cards?.reduce((acc, card) => {
      return [...acc, { name: card.title, desc: card.description, id: card._id }]
    }, [])

    data?.cards && setCards({ cardList: formatedData })
  }, [idRoom, setCards])

  useEffect(() => {
    socket.on('NEW_CARDS_ADDED', data => {
      if (data.data.roomId === idRoom) {
        console.log('NEW_CARDS_ADDED', data)
        getAtualList()
      }
    })

    socket.on('CARD_DELETED', data => {
      if (data.data.roomId === idRoom) {
        console.log('CARD_DELETED', data)
        getAtualList()
      }
    })
  }, [cards, getAtualList, idRoom, sendMessage, socket])

  return
}

export default useRealTimeCard
