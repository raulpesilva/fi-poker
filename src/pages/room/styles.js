import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 0 20px;
`
export const Header = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header}px;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: bold;
`
export const WrapperColumns = styled.div`
  flex: 1;
  display: flex;
`
