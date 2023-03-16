import styled from "styled-components";

const Container = styled.div` 
  width: 100%;
  min-width: 350px;
  max-width: 700px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.h1`
  font-family: 'Monofett', cursive;
  letter-spacing: 0.05em;
  font-size: 100px;
  margin: 60px 0 20px 0;
  @media screen and (min-width: 350px) and (max-width: 700px) {
    font-size: calc(100vw/7);
  }
  @media screen and (max-width: 350px) {
    font-size: 50px;
  }
`

export { Container, Title };