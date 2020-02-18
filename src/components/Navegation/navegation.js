import React, { Component, useContext, Fragment, useEffect } from 'react';
import './navegation.css'
import Item from './items'
import { UsuarioContext } from '../../Context/usuario-context';
 import { Link } from 'react-router-dom';

function Navegation() {

    const { user } = useContext(UsuarioContext);
    const { idRol, userName } = user;


    const opciones = () => {
        switch (idRol) {

            case 1: return (<Fragment>
                <Item name=" Inicio" url="/" icon="icon-home fas BigMama4" />
                <div className="user">
                    <Item name=" Mis Cursos" icon="icon-class fas fa-chalkboard-teacher" url="/" />
                </div>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-user fas fa-user-astronaut"></i> {userName}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Mi cuenta</a>
                        <a class="dropdown-item" href="#">Cerrar Sesión</a>
                    </div>
                </li>

            </Fragment>)
            case 2: return  (
                <Fragment>
               <Item name=" Inicio" url="/" icon="icon-home fas fa-school" />

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-class fas fa-chalkboard-teacher"></i> Gestionar Cursos
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/course/add">Crear Curso</Link>
                        <a class="dropdown-item" href="#">Todos los cursos</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-user fas fa-user-astronaut"></i> {userName}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/course/add"></Link>

                     </div>
                </li>
                </Fragment>
            );
            default: return  ( <Fragment>
                <Item name="Inicio" url="/" />
                <Item name="¿Quienes Somos?" />
                <Item name="Iniciar Sesion" url="/signin" icon="fas fa-user-circle icon-config color-yellow" />

                 <Item name="Registrarse" url="/signup" icon="far fa-address-card icon-config" />
            </Fragment>)
        }
    }

    useEffect(()=>{
     },[idRol])


    return (
        <div>
            <nav className="navbar  navbar-expand-sm shadow-sm  nav-dark  navbar-dark  "  >
                <a className="navbar-brand" href="/">
                    <img src="/img/logo.png" width="70" height="30" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse p-1" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto"> 
                    {opciones()} 
                    </ul>
                </div>
            </nav>
        </div >
    )
}


export default Navegation;