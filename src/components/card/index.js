import React, { useState } from 'react'
import api from '../../api'
import useStorage from '../../hook/useStorage'
import * as Styled from './styles'

const Card = ({ title, description, characterLimit = 100, id, onDelete, ...rest }) => {
  const [removing, setRemoving] = useState(false)
  const [idRoom] = useStorage('idRoom')


  const ellipisDescription =
    description &&
    [...description].reduce((acc, letter, index) => {
      if (index > characterLimit) return acc
      if (index === characterLimit) return (acc += '...')

      return (acc += letter)
    }, '')

  const handleOnCardRemove = (e) => {
    e.stopPropagation();
    setRemoving(true)
  }

  const handleConfirmRemove = async (e) => {
    e.stopPropagation();

    const { data } = await api.delete(`/rooms/${idRoom}/cards/${id}`);

    console.log(data);
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
