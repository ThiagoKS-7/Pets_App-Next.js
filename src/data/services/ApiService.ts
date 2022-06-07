import axios from 'axios';

/*DEFINIÇÃO DA CONFIGURAÇÃO BÁSICA DO AXIOS*/
export const ApiService = axios.create({   
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})