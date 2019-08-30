import React, { FC, Fragment, useState, ChangeEvent, FormEvent } from "react";
import { TPessoa } from "./TPessoa";
import { getPessoa } from "./PessoaService";
import { DisplayFormikState } from "./utils";

type Props = {
  title: string;
};

const PessoaForm: FC<Props> = ({ title }) => {
  let initialPessoa: TPessoa = {
    codigo: 1,
    nome: "Leonardo",
    email: "leonardo.chavescavalcante@gmail.com",
    endereco: {
      cidade: "Maringa",
      logradouro: "Cocais"
    }
  };

  const [pessoa, setPessoa] = useState<TPessoa>(initialPessoa);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let name = e.target.name;
    setPessoa(prevState => ({ ...prevState, [name]: value }));
  };

  const handleChangeEndereco = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let name = e.target.name;
    setPessoa(prevState => ({
      ...prevState,
      endereco: { ...prevState.endereco, [name]: value }
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("dados enviados", pessoa);
    console.log("event", event.currentTarget.checkValidity());
  };

  return (
    <Fragment>
      <h1>PESSOA FORM {title} </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Codigo</label>
          <input name="codigo" value={pessoa.codigo} onChange={handleChange} />
          <br />
          <label>Nome</label>
          <input
            name="nome"
            required
            data-value-missing="O nome precisa ser informado."
            value={pessoa.nome}
            onChange={handleChange}
          />
          <br />
          <label>Cidade</label>
          <input
            name="cidade"
            required
            data-value-missing="O nome precisa ser informado."
            value={pessoa.endereco.cidade}
            onChange={handleChangeEndereco}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <hr />
      <div>
        <DisplayFormikState {...pessoa} />
      </div>
    </Fragment>
  );
};

export default PessoaForm;

//https://medium.com/reactbrasil/formik-construa-formul%C3%A1rios-em-react-sem-l%C3%A1grimas-a80c52887882
