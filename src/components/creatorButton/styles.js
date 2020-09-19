import styled from 'styled-components'
import { FiPlus as Plus } from 'react-icons/fi'

export const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 19px;
  cursor: pointer;
  transition: 250ms;
  width: ${({ width }) => width ? width : '228px'};
  
  background-color: ${({ theme }) => theme.colors.lightGray};
  color:  ${({ theme }) => theme.colors.highlight};
  border-radius: ${({ theme }) => theme.radii.normal}px;
    
` 

export const Icon = styled(Plus)`
  transition: 300ms;
  width: 30px;
  height: unset;
`

export const Text = styled.span`
  width: 100%;
  margin-left: 33px;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.highlight};
  animation: input-in 300ms backwards;


  @keyframes input-in{
    from{
      width: 0px;
    }
    to{ 
      width: 100%;
    }
  }
`