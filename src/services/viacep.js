import axios from 'axios';

function generateViaCepUrl (cep) {
    if (isNaN(cep)) throw new Error('CEP must be a number!')
    if (cep.toString().length !== 8) throw new Error('Invalid CEP length!')
    return `https://viacep.com.br/ws/${cep}/json/`
}

export function getCEPinfo (cep){
    const promise = axios.get(generateViaCepUrl(cep));
    return promise;
}
