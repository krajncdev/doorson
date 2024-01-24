import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nalogi from './pages/Nalogi.tsx';
import NovNalog from './pages/NovNalog.tsx';
import App from './App.tsx';
import { store } from './config/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './config/styled-components/GlobalStyle.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './config/styled-components/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/nalogi' element={<Nalogi />} />
            <Route path='/nov-nalog' element={<NovNalog />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
