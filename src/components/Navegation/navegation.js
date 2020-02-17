import React, { Component, useContext, Fragment } from 'react';
import './navegation.css'
import Item from './items'
import { UsuarioContext } from '../../Context/usuario-context';

function Navegation() {

    const { user } = useContext(UsuarioContext);
    const idRol = user.idRol;
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg  nav-dark  navbar-dark  ">
                <a className="navbar-brand" href="/">
                    <img src="/img/logo.png" width="70" height="30" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse p-1" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        {idRol===1 ? ( 
                             <Fragment>
                                  <Item name="Inicio" url="/" />
                                 <Item name="Mis Cursos" url="/" />
                                 <Item name="Mi Cuenta" url="/" /> 
                             </Fragment>
                        ) : (
                                <Fragment>
                                    <Item name="Inicio" url="/" />
                                    <Item name="¿Quienes Somos?" />
                                    <Item name="Iniciar Sesion" url="/signin" icon="fas fa-user-circle icon-config color-yellow" />
                                    <Item name="Registrarse" url="/signup" icon="far fa-address-card icon-config" />
                                </Fragment>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div >
    )
}


export default Navegation;