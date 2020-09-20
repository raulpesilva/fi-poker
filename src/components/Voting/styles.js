import styled from 'styled-components'
import { FiCoffee } from 'react-icons/fi'
import { CgInfinity } from 'react-icons/cg'

export const Container = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  padding: 20px;
  animation: enter 300ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards;
  min-height: fit-content;
  @keyframes enter {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

export const Title = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.header}px;
`

export const TitleDescription = styled.h2`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.title}px;
`

export const Description = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.highlight}dc;
  min-height: 5vh;
`

export const Board = styled.div`
  flex: 1;
  width: 80%;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
`
export const WrapperCards = styled.div`
  margin-top: 10px;
  display: flex;

  width: 70vw;
  & div + div {
    margin-left: 10px;
  }
`
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  width: 115px;
  height: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Points = styled.p`
  font-size: 70px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlight};
`
export const CoffeeIcon = styled(FiCoffee).attrs({ size: 70 })`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlight};
`
export const InfinityIcon = styled(CgInfinity).attrs({ size: 70 })`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.highlight};
`
