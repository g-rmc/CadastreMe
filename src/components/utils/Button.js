import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function CustomButton({message, action, navigateTo, disabled}) {
    const navigate = useNavigate();
    let buttomAction;

    if (action) buttomAction = action;
    if (navigateTo) buttomAction = () => {navigate(navigateTo)};

    return (
        <Container onClick={buttomAction} disabled={disabled}>
            {message}
        </Container>
    )
}

const Container = styled.button`
    width: 100%;
    height: 40px;
    font-size: 24px;
    color: white;
    ${props => props.disabled? "background-color: #9C9C9C;" : "background-color: #21480B;"}
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`