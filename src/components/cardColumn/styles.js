import styled from 'styled-components'
import { FaTrello } from 'react-icons/fa'

export const Container = styled.ul`
  width: ${({ width }) => width ?? '294px'};

  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 13px;
  width: 294px;
  height: 90vh;
`

export const CreatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`

export const IntegrationIcon = styled(FaTrello)`
  color: ${({ theme }) => theme.colors.highlight};
  width: 31.5px;
  height: unset;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`
