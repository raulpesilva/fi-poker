import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 294px;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.radii.normal}px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 10px;
`

export const User = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const initial = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.highlight};
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`

export const Name = styled.p`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fontSize.title}px;
`
