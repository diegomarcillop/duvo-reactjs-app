
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import UsuarioContextProvider from './Context/usuario-context';



ReactDOM.render(
    <UsuarioContextProvider>
        <App />
    </UsuarioContextProvider>, 
    document.getElementById('root'));

