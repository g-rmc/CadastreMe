import React, { useContext } from "react";
import TextField from "@mui/material/TextField";

import { UserContext } from "../../contexts/UserContext";
import { ScreenContainer, ScreenTitle, ButtonBox } from "./style";
import { CustomButton } from "../utils";

export function Validate() {
    const { name, address } = useContext(UserContext);

    function isButtonDisabled() {
        if (!name) return true
        return false
    }

    function handleChange(e) {
        //setName(e.target.value);
    }

    return (
        <ScreenContainer>
            <ScreenTitle>
                {name}, confira seus dados!
            </ScreenTitle>
            <TextField
                required
                fullWidth
                id="standard-required"
                label="Nome"
                value={name}
                onChange={handleChange}
                variant="standard"
            />
            <ButtonBox>
                <CustomButton message={"VOLTAR"} navigateTo={"/address"}/>
                <CustomButton message={"CONFIRMAR"} navigateTo={"/address"} disabled={isButtonDisabled()}/>
            </ButtonBox>
        </ScreenContainer>
    )
}