import React, { useState } from 'react'
import * as Styled from './styles'

const Card = ({ title, description, characterLimit = 100, id, onDelete }) => {
  const [removing, setRemoving] = useState(false)

  const ellipisDescription =
    description &&
    [...description].reduce((acc, letter, index) => {
      if (index > characterLimit) return acc
      if (index === characterLimit) return (acc += '...')

      return (acc += letter)
    }, '')

  const handleOnCardRemove = () => {
    setRemoving(true)
  }

  const handleConfirmRemove = () => {
    onDelete && onDelete(id)
  }

  return (
    <Styled.Container>
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
