import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'


export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  font-weight: 600;
  margin-bottom: 6px;
  word-break: break-all;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.paragraph}px;
  word-break: break-all;
`

export const RemoveWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  right: 5px;
  top: 5px;
  transition: 300ms;
  opacity: 0;

  &:hover {
    transform: scale(.95);
  }
  
`

export const Container = styled.div`
  width: ${({ width }) => (width ? width : '272px')};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  margin: 10px 0;
  height: fit-content;
  padding: 11px 17px;
  position: relative;
  cursor: pointer;

  &:hover{
    & ${RemoveWrapper}{
      opacity: 1;
    }
  }
`

export const Trash = styled(FaRegTrashAlt)`
  color: ${({ theme }) => theme.colors.red};
`

export const RemoveConfirmation = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize.small}px;
`
