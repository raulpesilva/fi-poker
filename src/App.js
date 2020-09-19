import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styled from './styles';
import theme from './assets/theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyle />
      
      <Styled.App>
        <Routes />
      </Styled.App>
    </ThemeProvider>
  );
}

export default App;
