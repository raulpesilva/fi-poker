import styled from 'styled-components'

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
export const Card = styled.div`
  width: 300px;
  height: 127px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-left: 10px;
  margin-top: 10px;

  border-radius: ${({ theme }) => theme.radii.normal}px;
`
export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.title}px;
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    margin-left: 0px;
  }
`
