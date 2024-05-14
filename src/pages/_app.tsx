// src/pages/_app.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
