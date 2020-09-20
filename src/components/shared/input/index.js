import React, { forwardRef } from 'react'
import * as Styled from './styles';

const Input = ( props, ref ) => {
  return(<Styled.Input {...props} ref={ref}></Styled.Input>)
}

export default forwardRef(Input);

