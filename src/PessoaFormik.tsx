import React, { FC, Fragment } from 'react';
import { TPessoa } from './TPessoa';
import { getPessoa } from './PessoaService';

type Props = {
    title: string;
}

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