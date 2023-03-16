import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import { UserContextProvider } from '../contexts/UserContext';
//import { Component } from './Component';


export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <Container>
          <BrowserRouter>
            <Routes>

              <Route path='/' element={<>Bla</>}/>
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </Container>
      </UserContextProvider>  
    </>
  );
}

//Styled for mimic app screen into PC
const Container = styled.div` 
  width: 100%;
  min-width: 350px;
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
