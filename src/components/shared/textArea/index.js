import React, { forwardRef } from 'react'
import * as Styled from './styles'

const TextArea = (props, ref) => {
  return (<Styled.TextArea ref={ref} {...props}/>)
}

export default forwardRef(TextArea);