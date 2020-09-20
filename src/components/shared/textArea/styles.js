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
<<<<<<< HEAD
  outline: none;
=======
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6

  &::placeholder {
    color: ${({ theme }) => theme.colors.highlight}4D;
  };

  &:focus{
<<<<<<< HEAD
    border: 1px solid ${({ theme }) => theme.colors.xlightGray}90;
=======
    border: 1px solid ${({ theme }) => theme.colors.highlight};
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
  }
`