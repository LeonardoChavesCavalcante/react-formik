import React, { FC, Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { TPessoa } from './TPessoa';
import { getPessoa } from './PessoaService';
import { DisplayFormikState } from './utils';
import { Formik, Form, Field, FastField, FormikProps, ErrorMessage, FormikValues, FormikActions } from 'formik';
import * as Yup from 'yup';

type Props = {
    title: string;
}

const PessoaFormik
    : FC<Props> = ({ title }) => {

        let initialPessoa: TPessoa = {
            codigo: 1,
            nome: 'Leonardo',
            email: 'leonardo.chavescavalcante@gmail.com',
            endereco: {
                cidade: "Maringa",
                logradouro: 'Cocais'
            }
        }

        const [pessoa, setPessoa] = useState<TPessoa>(initialPessoa);

        const validationSchema = Yup.object().shape({
            nome: Yup.string().required('O nome precisa ser informado'),
            codigo: Yup.string().required('O codigo precisa ser informado')
        });

        return (
            <Fragment>
                <h1>Formik {title} </h1>
                <Formik<TPessoa> initialValues={initialPessoa}
                    onSubmit={(values: TPessoa, actions: FormikActions<TPessoa>) => {
                        console.log('values', values);
                        console.log('actions', actions);
                        setPessoa(values);
                        actions.setSubmitting(false);
                    }}
                    //       validationSchema={() => validationSchema}
                    render={(props: FormikProps<TPessoa>) => {

                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset,
                            setFieldValue
                        } = props;

                        return <form onSubmit={handleSubmit}>

                            <label htmlFor="codigo">Codigo </label>
                            <Field name="codigo" />
                            {errors.codigo && touched.codigo && (
                                <div className="input-feedback">{errors.codigo}</div>
                            )
                            }
                            <label htmlFor="nome"> Nome </label>
                            <Field name="nome" />
                            <ErrorMessage name="nome" />

                            <label htmlFor="email"> Email </label>
                            <Field name="email" />
                            <ErrorMessage name="email" />

                            <label htmlFor="cidade"> Cidade </label>
                            <Field name="endereco.cidade" />
                            <ErrorMessage name="endereco.cidade" />

                            <br />

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            <DisplayFormikState {...props} />
                        </form>
                    }} />
                <button onClick={() =>
                    validationSchema.validate(pessoa, { abortEarly: false }).then(values => console.log('validado com sucesso', values))
                        .catch(err => console.log("Dados invalidos", err))
                } > Validar yup </button>

            </Fragment >
        )
    }

export default PessoaFormik
    ;

//https://medium.com/reactbrasil/formik-construa-formul%C3%A1rios-em-react-sem-l%C3%A1grimas-a80c52887882