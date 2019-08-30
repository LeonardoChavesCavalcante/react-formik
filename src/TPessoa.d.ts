export type TPessoa = {
  codigo?: number;
  nome: string;
  email: string;
  endereco: {
    cidade: string;
    logradouro: string;
  };
};
