import styled, { css } from 'styled-components';

export const Button = styled.button`
  max-width: 360px;
  width: ${({ width }) => width ? width : '360px'};
  margin: ${({ margin }) => margin ? margin : 0 };
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'GilRoy', sans-serif;
  border-radius: ${({ theme }) => theme.radii.normal}px;

  ${({theme, color, textColor }) => css`
    background-color: ${color ? theme.colors[color] : theme.colors.highlight};
    color: ${textColor ? theme.colors[textColor] : '#000000'};
  `}
`