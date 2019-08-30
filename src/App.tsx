import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PessoaForm from './PessoaForm';
import PessoaFormik from './PessoaFormik';



const App: React.FC = () => {
  return (
    <div id="root">
      <div className="App">
        <header className="App-header">
          Exemplos Form vs Formik
      </header>
        <BrowserRouter basename="http://localhost:3000/">
          <div> <Link to="/pessoa-form">Form</Link></div>
          <div> <Link to="/pessoa-formik">Formik</Link></div>
          <hr />
          <Route path="/pessoa-form" component={PessoaForm} />
          <Route path="/pessoa-formik" component={PessoaFormik} />
        </BrowserRouter>
      </div >
    </div>
  );
}

export default App;
