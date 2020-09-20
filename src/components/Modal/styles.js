import styled from 'styled-components'
import { FaTrello } from 'react-icons/fa'

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  width: 405px;
  height: 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: enter 250ms cubic-bezier(0.165, 0.84, 0.44, 1) backwards;
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
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.header}px;
`
export const DescriptionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.highlight};
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.highlight};
`
export const Icon = styled(FaTrello).attrs({ size: 31.5 })`
  color: ${({ theme }) => theme.colors.highlight};
`
export const Separator = styled.div`
  height: 23px;
`
export const SeparatorMedium = styled.div`
  height: 34px;
`
