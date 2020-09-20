import styled, { css } from 'styled-components'

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
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.normal}px;
  ${({ url }) =>
    url &&
    css`
      background-image: url(${url});
      background-size: cover;
    `}
`
export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.title}px;
  text-shadow: 0 0 6px #000000dc;
  font-weight: 600;
`
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    margin-left: 0px;
  }
`
