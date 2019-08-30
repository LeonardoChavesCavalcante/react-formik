import { TPessoa } from "./TPessoa";


let pessoa: TPessoa = {
    codigo: 1,
    nome: 'Leonardo',
    email: 'leonardo.chavescavalcante@gmail.com',
    endereco: {
        cidade: "Maringa",
        logradouro: 'Cocais'
    }
}

export const getPessoa = (): Promise<TPessoa> => {
    return new Promise(resolve => {
        resolve(pessoa);
    });
}


