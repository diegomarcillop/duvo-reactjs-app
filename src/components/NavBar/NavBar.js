import React, { Component, useContext, Fragment, useEffect } from 'react';
import './navbar.css'
import Item from './items'
import { Link } from 'react-router-dom';

function NavBar({idRol, userName, signOut}) {

    const opciones = () => {
        switch (idRol) {
        // Student 
            case 1: return (<Fragment>
                <Item name=" Inicio" url="/" icon="icon-home fas fa-school" />
                <div className="user">
                    <Item name=" Mis Cursos" icon="icon-class fas fa-chalkboard-teacher" url="/student/cursos/" />
                </div>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-user fas fa-user-astronaut"></i> {userName}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Mi cuenta</a>
                        <Link className="dropdown-item"  to="/questionary">Questionario</Link>
                        <Link className="dropdown-item"  to="/exercises">Ejercicios</Link>
                        <Link className="dropdown-item"  to="/exercises">Ejercicios</Link>
                        <Link className="dropdown-item" to="/signin" onClick={signOut} >Cerrar Sesión</Link> 
                    </div>
                </li>

            </Fragment>)

            //Admin
            case 2: return  (
                <Fragment>
               <Item name=" Inicio" url="/" icon="icon-home fas fa-school" />

                <li className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icon-class fas fa-chalkboard-teacher"></i> Gestionar Cursos
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/course/add">Crear Curso</Link>
                    <Link className="dropdown-item" to="/course">Todos los cursos</Link> 
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle dropleft active" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-user fas fa-user-astronaut"></i> {userName}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Mi cuenta</a>
                        <a class="dropdown-item"  onClick={signOut} >Cerrar Sesión</a>
                    </div>
                </li>
                </Fragment>
            );
            default: return  ( <Fragment>
                <Item name=" Inicio" url="/" icon=" icon-home  fas fa-home" /> 
                <Item name=" Quienes Somos" url="/about" icon="fas fa-users icon-somos" />

                <Item name="Registrarse" url="/signup" icon="far fa-address-card icon-config" />
                <Item name="Iniciar Sesion" url="/signin" icon="fas fa-sign-in-alt icon-config color-yellow" /> 
            </Fragment>)
        }
    }
   
    return (
        <div>
            <nav className="navbar sticky-top  navbar-expand-sm shadow-sm  nav-dark  navbar-dark  "  >
                <a className="navbar-brand" href="/">
                    <img src="/img/logo.png" width="70" height="30" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto"> 
                    {opciones()} 
                    </ul>
                </div>
            </nav>
        </div >
    )
}


export default NavBar;