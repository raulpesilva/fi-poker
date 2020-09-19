import React, { useState } from 'react'
import * as Styled from './styles'

const CreatorButton = ({ children, editable, onCreate, onClick ,...props }) => {
  const [ editing, setEditing ] = useState(false);
  const [ value, setValue ] = useState('');

  const handleClickContainer = (e) => {
    editable && setEditing(true);
    onClick && onClick(e);
  };

  const handleBlurInput = () => {
    setTimeout(() => {
      setEditing(false);
    }, 100)
  };

  const hancleClickIcon = () => {
    onCreate && onCreate(value);
  };

  const handleChangeInput = ({ target }) => {
    const value = target.value;

    setValue(value);
  };

  return(
    <Styled.Container onClick={handleClickContainer} {...props}>
      { editing && <Styled.Input onChange={handleChangeInput} onBlur={handleBlurInput} autoFocus></Styled.Input> }
      <Styled.Icon onClick={hancleClickIcon}/>
      { !editing && <Styled.Text>{children}</Styled.Text>}
    </Styled.Container>
  )
}

export default CreatorButton;