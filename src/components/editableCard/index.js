import React, { useState } from 'react'
import CardCreator from '../cardCreator';
import CreatorButton from '../creatorButton'
import * as Styled from './styles'

const EditableCard = ({ children, onCardCreate }) => {
  const [ editing, setEditing ] = useState(false);

  const handleClickCreator = () => {
    setEditing(true);
  }

  const handleOnCancel = () => {
    setEditing(false);
  }

  const handleOnCreate = data => {
    if (!onCardCreate) return;

    onCardCreate(data);
    setEditing(false);
  }

  return (
    <Styled.Container>
      {!editing && <CreatorButton onClick={handleClickCreator}>{ children }</CreatorButton> }
      {editing && <CardCreator onCancel={handleOnCancel} onCreate={handleOnCreate}></CardCreator>}
    </Styled.Container>
  )
}

export default EditableCard;