import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { RotatingLines } from "react-loader-spinner";

import { UserContext } from "../../contexts/UserContext";
import { ScreenContainer, ScreenTitle, ButtonBox } from "./style";
import { CustomButton, AddressForm } from "../utils";
import { getCEPinfo } from "../../services/viacep";

export function Address() {
    const { name, address, setAddress } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false);
    const [ cepError, setCepError ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!name) navigate("/name");
    }, [name, navigate]);

    function isButtonDisabled() {
        if (address.cep.length < 8) return true;
        if (!address.logradouro || !address.numero || !address.bairro || !address.localidade || !address.uf) return true;
        return false
    }

    async function consultCep(cep) {
        setLoading(true);
        try {
            const { data } = await getCEPinfo(cep);
            if (data.erro) {
                setCepError(true);
            } else {
                data.cep = data.cep.replace("-","");
                setAddress({...address, ...data});
            };
            setLoading(false);
        } catch (error) {
            console.log(error)
            setCepError(true);
            setLoading(false);
        }
    }

    function handleChange(e) {
        if (isNaN(e.nativeEvent.data)) return;
        if (e.target.value.length > 8) return;

        setCepError(false);
        setAddress({...address, [e.target.name]: e.target.value});

        if (e.target.value.length === 8) consultCep(e.target.value);
    }

    return (
        <ScreenContainer>
            <ScreenTitle>
                {name}, insira seus dados!
            </ScreenTitle>
            <TextField
                required
                fullWidth
                error={cepError}
                helperText={cepError? "CEP inválido" : " "}
                disabled={loading}
                id="standard-required"
                name="cep"
                label="CEP"
                value={address.cep}
                onChange={handleChange}
                variant="standard"
            />
            <AddressForm loading={loading} />
            <ButtonBox>
                <CustomButton message={"VOLTAR"} navigateTo={"/name"} disabled={loading}/>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="40"
                    visible={loading}
                />
                <CustomButton message={"AVANÇAR"} navigateTo={"/validate"} disabled={isButtonDisabled() || loading}/>
            </ButtonBox>
        </ScreenContainer>
    )
}