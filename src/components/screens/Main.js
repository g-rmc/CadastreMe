import React from "react";

import { ScreenContainer, ScreenTitle } from "./style";
import { CustomButton } from "../utils";

export function Main() {

    return (
        <ScreenContainer>
            <ScreenTitle>
                Cadastre-se e envie seus dados para o maravilhoso mundo da internet!
            </ScreenTitle>
            <CustomButton message={"VAMOS COMEÇAR!"} navigateTo={"/name"}/>
        </ScreenContainer>
    )
}