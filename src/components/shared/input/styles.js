import styled from "styled-components";

export const Input = styled.input`
  width: 360px;
  height: 40px;
  padding-left: 15px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  color: ${({ theme }) => theme.colors.highlight};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.highlight}4D;
  };

  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.highlight};
  }
`;
