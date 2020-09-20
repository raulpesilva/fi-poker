import styled from "styled-components";

export const Input = styled.input`
  padding-left: 15px;
  border: none;
  outline: none;
  width: ${({ width }) => width ? width : '360px'};
  height: ${({ height }) => height ? height : '40px'};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  color: ${({ theme }) => theme.colors.highlight};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin: ${({ margin }) => margin ? margin : 0 };

  &::placeholder {
    color: ${({ theme }) => theme.colors.highlight}4D;
  };

  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.xlightGray}90;
  }
`;
