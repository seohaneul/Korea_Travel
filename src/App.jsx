import React from 'react'
import GlobalStyle from './asset/page/GlobalStyle';
import Main from './asset/page/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}