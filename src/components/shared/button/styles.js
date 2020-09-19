import styled, { css } from 'styled-components';

export const Button = styled.button`
  max-width: 360px;
  width: 360px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  ${({ theme: { colors: { highlight }, radii: { normal } }, color, textColor }) => css`
    background-color: ${color ? color : highlight};
    color: ${textColor ? textColor : '#000000'};
    border-radius: ${normal}px;
  `}
`