import React, { useState } from 'react'
import * as Styled from './styles'

const CreatorButton = ({ children, editable, onCreate }) => {
  const [ editing, setEditing ] = useState(false);

  const handleClickContainer = () => {
    editable && setEditing(true);
  };

  const handleBlurInput = () => {
    setEditing(false);
  };

  return(
    <Styled.Container onClick={handleClickContainer}>
      { editing && <Styled.Input onBlur={handleBlurInput} autoFocus></Styled.Input> }
      <Styled.Icon></Styled.Icon>
      { !editing && <Styled.Text>{children}</Styled.Text>}
    </Styled.Container>
  )
}

export default CreatorButton;