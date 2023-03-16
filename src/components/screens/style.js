import styled from "styled-components";

const ScreenContainer = styled.div` 
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(120, 177, 89, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  margin: auto 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ScreenTitle = styled.h1`
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`

export { ScreenContainer, ScreenTitle };