import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ width }) => width ? width : 'unset'};
  height: ${({ height }) => height ? height : 'unset'};
  
`