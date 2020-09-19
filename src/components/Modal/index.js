import React from 'react'
import * as Styled from './styles'

const Modal = ({ type, title, descriptionTitle, description, grande }) => {
  return grande ? (
    <Styled.Modal>
      <Styled.Title>{title ?? 'Placeholder Title'}</Styled.Title>
      <Styled.DescriptionTitle>
        {descriptionTitle ?? 'Placeholder Title Description'}
      </Styled.DescriptionTitle>
      <Styled.Description>{description ?? 'Placeholder Description'}</Styled.Description>
    </Styled.Modal>
  ) : (
    <h1>{title}</h1>
  )
}

export default Modal
