import { useEffect } from 'react'
import useSocketIo from '../useSocketIo'
import useGlobalState from '../useGlobalState'
import useModal from '../useModal'

const useRealTimeVote = () => {
  const socket = useSocketIo()
  const [idRoom] = useGlobalState('idRoom')
  const [cards] = useGlobalState('cards')
  const [voteSessionFinished, setVoteSessionFinished] = useGlobalState('voteSessionFinished')
  const [votes, setVotes] = useGlobalState('votes', [])
  const { sendMessage } = useModal()

  useEffect(() => {
    socket.on('CARD_VOTED', data => {
      if (data.data.roomId === idRoom && !voteSessionFinished) {
        console.log('CARD_VOTED', data)
        // setVoteSessionFinished(true)
        if (votes?.length) {
          setVotes([...votes, data.data])
          console.log([...votes, data.data])
        } else {
          setVotes([data.data])
          console.log([data.data], votes)
        }
      }
    })
    socket.on('CARD_STAGED_TO_VOTE', data => {
      if (data.data.roomId === idRoom) {
        console.log('CARD_STAGED_TO_VOTE', data)
        const card = cards?.cardList?.find?.(c => c.id === data.data.cardId)
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
        setVoteSessionFinished(true)
      }
    })
  }, [
    cards,
    idRoom,
    sendMessage,
    setVoteSessionFinished,
    setVotes,
    socket,
    voteSessionFinished,
    votes,
  ])

  return
}

export default useRealTimeVote
