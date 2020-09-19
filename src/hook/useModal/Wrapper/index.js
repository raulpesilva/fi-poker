import React from 'react'
import * as Styled from './styles'
const Wrapper = ({ children, close }) => {
  return <Styled.Wrapper onClick={close}>{children}</Styled.Wrapper>
}

export default Wrapper
