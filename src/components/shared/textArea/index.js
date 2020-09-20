<<<<<<< HEAD
import React, { forwardRef } from 'react'
import * as Styled from './styles'

const TextArea = (props, ref) => {
  return (<Styled.TextArea ref={ref} {...props}/>)
}

export default forwardRef(TextArea);
=======
import React from 'react'
import * as Styled from './styles'

const TextArea = ({ ...props }) => {
  return (<Styled.TextArea {...props}/>)
}

export default TextArea;
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
