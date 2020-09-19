import styled from 'styled-components'

export const Modal = styled.div`
  background-color: #fff;
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
export const Title = styled.h1``
export const DescriptionTitle = styled.h2``
export const Description = styled.p``
