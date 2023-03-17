import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

export function AddressForm({loading = false, readOnly = false}) {
    const { address, setAddress } = useContext(UserContext);

    function handleChange(e) {
        setAddress({...address, [e.target.name]: e.target.value});
    }

    return (
        <Container>
            <TextField
                required
                fullWidth
                InputProps={{
                    readOnly,
                }}
                disabled={loading}
                id="standard-required"
                name="logradouro"
                label="Logradouro"
                value={address.logradouro}
                onChange={handleChange}
                variant="standard"
                margin="normal"
            />
            <SubContainer>
                <TextField
                    required
                    InputProps={{
                        readOnly,
                    }}
                    disabled={loading}
                    id="standard-required"
                    name="numero"
                    label="Número"
                    value={address.numero}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                />
                <TextField
                    InputProps={{
                        readOnly,
                    }}
                    disabled={loading}
                    id="standard-required"
                    name="complemento"
                    label="Complemento"
                    value={address.complemento}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                />
            </SubContainer>
            <TextField
                required
                fullWidth
                InputProps={{
                    readOnly,
                }}
                disabled={loading}
                id="standard-required"
                name="bairro"
                label="Bairro"
                value={address.bairro}
                onChange={handleChange}
                variant="standard"
                margin="normal"
            />
            <SubContainer>
                <TextField
                    required
                    InputProps={{
                        readOnly,
                    }}
                    disabled={loading}
                    id="standard-required"
                    name="localidade"
                    label="Cidade"
                    value={address.localidade}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                />
                <TextField
                    required
                    InputProps={{
                        readOnly,
                    }}
                    disabled={loading}
                    id="standard-required"
                    name="uf"
                    label="Estado"
                    value={address.uf}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                />
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    flex-direction: column;
`

const SubContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    .MuiTextField-root {
        width: calc(50% - 30px)
    }
`
