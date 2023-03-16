import { createContext, useState } from "react";

export const UserContext = createContext();

export const resetedAddress = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
}

export function UserContextProvider ({ children }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState(resetedAddress)

    return (
        <UserContext.Provider value={{name, setName, address, setAddress}}>
            {children}
        </UserContext.Provider>
    )
}