import React, { FC, Fragment, useState } from 'react';
import { TPessoa } from './TPessoa';
import { getPessoa } from './PessoaService';

type Props = {
    title: string;
}

let initialPessoa: TPessoa = {
    codigo: 1,
    nome: 'Leonardo',
    email: 'leonardo.chavescavalcante@gmail.com',
    logradouro: 'Cocais'
}

const [pessoa, setPessoa] = useState<TPessoa>(initialPessoa);

const PessoaFormik: FC<Props> = ({ title }) => {

    getPessoa().then(data => console.log('aqui', data));

    return (
        <Fragment>
            <h1>PESSOA FORMIK {title} </h1>

            {JSON.stringify(pessoa)}

        </Fragment>
    )
}

export default PessoaFormik;