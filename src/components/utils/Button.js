import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function CustomButton({message, action, navigateTo}) {
    const navigate = useNavigate();
    let buttomAction;

    if (action) buttomAction = action;
    if (navigateTo) buttomAction = () => {navigate(navigateTo)};

    return (
        <Container onClick={buttomAction}>
            {message}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    font-family: "Bebas Neue", sans-serif;
    font-size: 24px;
    color: white;
    background-color: #21480B;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover{
        filter: brightness(0.6);
    }

    :active{
        transform: translateY(2px);
    }
`