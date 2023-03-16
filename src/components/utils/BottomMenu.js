import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function BottomMenu() {
    const [menuIndex, setMenuIndex] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/") setMenuIndex(0);
        if (location.pathname === "/name") setMenuIndex(1);
        if (location.pathname === "/address") setMenuIndex(2);
        if (location.pathname === "/validate") setMenuIndex(3);
    }, [location.pathname]);

    function handleChange(e, newValue) {
        if (newValue === 0) navigate("/");
        if (newValue === 1) navigate("/name");
        if (newValue === 2) navigate("/address");
        if (newValue === 3) navigate("/validate");
    }

    return (
        <Container>
            <BottomNavigation
                    showLabels
                    value={menuIndex}
                    onChange={handleChange}
                    
                >
                <BottomNavigationAction label="Início" />
                <BottomNavigationAction label="Nome" />
                <BottomNavigationAction label="Endereço" />
                <BottomNavigationAction label="Confirmação" />
            </BottomNavigation>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-width: 350px;
    max-width: 700px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 0px 0px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    position: fixed;
    bottom: 0;

    .MuiBottomNavigation-root {
        height: 100%;
        width: 100%;
        background-color: none;
    }

    .MuiBottomNavigationAction-label {
        font-family: 'Lexend Deca', sans-serif;
        color: #9C9C9C;  
    }

    .Mui-selected {
        color: #21480B;
        font-weight: 600;
    }
`;
