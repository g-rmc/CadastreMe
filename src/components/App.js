import React from "react";
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
              <Route path="/name" element={<>Name</>} />
              <Route path="/address" element={<>Address</>} />
              <Route path="/validate" element={<>Validate</>} />
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </Container>
      </UserContextProvider>  
    </>
  );
}
