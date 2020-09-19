import React from 'react'
import * as Styled from './styles'

const Modal = ({ type, title, descriptionTitle, description }) => {
  const handleClick = e => {
    e.stopPropagation()
  }
  return (
    <Styled.Modal onClick={handleClick}>
      <Styled.Title>{title ?? 'Placeholder Title'}</Styled.Title>
      <Styled.DescriptionTitle>
        {descriptionTitle ?? 'Placeholder Title Description'}
      </Styled.DescriptionTitle>
      <Styled.Description>{description ?? 'Placeholder Description'}</Styled.Description>
    </Styled.Modal>
  )
}

export default Modal
