import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyle from "../styles/globalStyles";
import { UserContextProvider } from "../contexts/UserContext";
import { Main } from "./screens";
import { Container, Title } from "./style";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <Container>
          <BrowserRouter>
            <Title>CADASTRE.ME</Title>
            <Routes>

              <Route path="/" element={<Main />}/>
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </Container>
      </UserContextProvider>  
    </>
  );
}
