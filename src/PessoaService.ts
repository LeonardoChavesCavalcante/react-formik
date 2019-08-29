import { TPessoa } from "./TPessoa";

const pessoa: TPessoa = {
    codigo: 1,
    nome: 'Leonardo',
    email: 'leonardo.chavescavalcante@gmail.com',
    logradouro: 'Cocais'
};

export const getPessoa = (): Promise<TPessoa> => {
    return new Promise(resolve => {
        resolve(pessoa);
    });
}


