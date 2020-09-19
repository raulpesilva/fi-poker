import styled from 'styled-components'

export const TextArea = styled.textarea`
  width: ${({ width }) => width ? width : '272px'};
  height: ${({ height }) => height ? height : '211px'};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  color: ${({ theme }) => theme.colors.highlight};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin: ${({ margin }) => margin ? margin : 0 };
  padding: 15px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.highlight}4D;
  };

  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.highlight};
  }
`