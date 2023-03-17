import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyle from "../styles/globalStyles";
import { UserContextProvider } from "../contexts/UserContext";
import { Main, Name, Address, Validate } from "./screens";
import { Container, Title } from "./style";
import { BottomMenu } from "./utils";


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
              <Route path="/name" element={<Name />} />
              <Route path="/address" element={<Address />} />
              <Route path="/validate" element={<Validate />} />
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
            <BottomMenu />
          </BrowserRouter>
        </Container>
      </UserContextProvider>  
    </>
  );
}
