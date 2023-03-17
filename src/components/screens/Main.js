import React, { useContext, useEffect } from "react";

import { ScreenContainer, ScreenTitle } from "./style";
import { CustomButton } from "../utils";
import { UserContext } from "../../contexts/UserContext";

export function Main() {
    const { setName, setAddress, resetedAddress } = useContext(UserContext);

    useEffect(() => {
        setName("");
        setAddress(resetedAddress);    
    }, [setName, setAddress, resetedAddress])

    return (
        <ScreenContainer>
            <ScreenTitle>
                Cadastre-se e envie seus dados para o maravilhoso mundo da internet!
            </ScreenTitle>
            <CustomButton message={"VAMOS COMEÇAR!"} navigateTo={"/name"}/>
        </ScreenContainer>
    )
}