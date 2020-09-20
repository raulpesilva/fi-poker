import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ width }) => width ? width : 'unset'};
  height: ${({ height }) => height ? height : 'unset'};
  display: flex;
  flex-direction: column;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 9px;
`