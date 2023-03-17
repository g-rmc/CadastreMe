import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

import { UserContext } from "../../contexts/UserContext";

export function AddressForm({loading}) {
    const { address, setAddress } = useContext(UserContext);

    function handleChange(e) {
        setAddress({...address, [e.target.name]: e.target.value});
    }

    return (
        <Container>
            <TextField
                required
                fullWidth
                disabled={loading}
                id="standard-required"
                name="logradouro"
                label="Logradouro"
                value={address.logradouro}
                onChange={handleChange}
                variant="standard"
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`