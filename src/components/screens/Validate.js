import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { RotatingLines } from "react-loader-spinner";

import { UserContext } from "../../contexts/UserContext";
import { ScreenContainer, ScreenTitle, ButtonBox } from "./style";
import { AddressForm, CustomButton } from "../utils";

export function Validate() {
    const { name, address } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [confirmated, setConfirmated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!address.cep) navigate("/address");
    }, [address, navigate]);

    function handleConfirmation() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setConfirmated(true);
        }, 1000);
    }

    function ConfirmationForm() {
        return (
            <>
                <ScreenTitle>
                    Confira seus dados!
                </ScreenTitle>
                <TextField
                    required
                    disabled
                    fullWidth
                    id="standard-required"
                    label="Nome"
                    value={name}
                    variant="standard"
                    margin="normal"
                />
                <TextField
                    required
                    disabled
                    fullWidth
                    id="standard-required"
                    label="CEP"
                    value={address.cep}
                    variant="standard"
                    margin="normal"
                />
                <AddressForm readOnly={true} />
                <ButtonBox>
                    <CustomButton message={"VOLTAR"} disabled={loading} navigateTo={"/address"}/>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="40"
                        visible={loading}
                    />
                    <CustomButton message={"CONFIRMAR"} disabled={loading} action={handleConfirmation}/>
                </ButtonBox>
            </>
        )
    }

    function ConfirmationMessage() {
        return (
            <>
                <ScreenTitle>
                    Cadastro efetuado com sucesso!
                    Seus dados já foram compartilhados com a internet :D
                </ScreenTitle>
                <CustomButton message={"FINALIZAR"} navigateTo={"/"}/>
            </>
        ) 
    }

    return (
        <ScreenContainer>
            {confirmated? <ConfirmationMessage /> : <ConfirmationForm />}
        </ScreenContainer>
    )
}