import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff00;
  animation: backgroundEnter 250ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  @keyframes backgroundEnter {
    from {
      background-color: #ffffff00;
    }
    to {
      background-color: #ffffff20;
    }
  }
`
