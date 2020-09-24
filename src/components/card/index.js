import React, { useState } from 'react'
import api from '../../api'
import useGlobalState from '../../hook/useGlobalState'
import * as Styled from './styles'

const Card = ({ title, description, characterLimit = 100, id, onDelete, ...rest }) => {
  const [removing, setRemoving] = useState(false)
  const [idRoom] = useGlobalState('idRoom')

  const ellipisDescription =
    description &&
    [...description].reduce((acc, letter, index) => {
      if (index > characterLimit) return acc
      if (index === characterLimit) return (acc += '...')

      return (acc += letter)
    }, '')

  const handleOnCardRemove = e => {
    e.stopPropagation()
    setRemoving(true)
  }

  const handleConfirmRemove = async e => {
    e.stopPropagation()

    api.delete(`/rooms/${idRoom}/cards/${id}`)

    onDelete && onDelete(id)
  }

  return (
    <Styled.Container {...rest}>
      <Styled.RemoveWrapper>
        {removing ? (
          <Styled.RemoveConfirmation onClick={handleConfirmRemove}>
            Clique para deletar
          </Styled.RemoveConfirmation>
        ) : (
          <Styled.Trash onClick={handleOnCardRemove} />
        )}
      </Styled.RemoveWrapper>
      <Styled.Title>{title || 'Titulo'}</Styled.Title>
      <Styled.Description>{ellipisDescription || 'Description'}</Styled.Description>
    </Styled.Container>
  )
}

export default Card
