import React from 'react'
import * as Styled from './styles'

const Button = ({ color, textColor, children, ...props }) => {
return (<Styled.Button {...props} color={color} textColor={textColor}>{children}</Styled.Button>)
}

export default Button;