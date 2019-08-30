import React from 'react';
import { Formik, Form } from 'Formik'

const FormTeste = props => <Form />

const FormExemploWithComponent = props =>
    <Formik component={FormTeste} />



const FormExemploWithRender = props =>
    <Formik
        render={props => {
            return (
                <Form>
                </Form>
            )
        }
        } />



const FormExemploWithChildren = props =>
    <Formik>
        {props => {
            return (
                <Form>

                </Form>
            )
        }}
    </Formik>        