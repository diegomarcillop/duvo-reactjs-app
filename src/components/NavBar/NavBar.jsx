import React from "react";
import "./navbar.css";
import Item from "./Items";
import { Link } from "react-router-dom";

function NavBar({ idRol, userName, signOut }) {
  const opciones = () => {
    switch (idRol) {
      // Student
      case 1:
        return (
          <>
            <Item name=" Inicio" url="/" />     
            <Item name=" Mis Cursos" url="/student/cursos/" />
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle dropleft active"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="icon-user fas fa-user-astronaut"></i> {userName}
              </a>
              <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="/questionary">
                  Mi cuenta
                </Link>
                <Link className="dropdown-item" to="/questionary">
                  Questionario
                </Link>
                <Link className="dropdown-item" to="/exercises">
                  Ejercicios
                </Link>
                <Link className="dropdown-item" to="/signin" onClick={signOut}>
                  Cerrar Sesión
                </Link>
              </div>
            </li>
          </>
        );

      //Admin
      case 2:
        return (
          <>
            <Item name=" Inicio" url="/"/>

            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropleft active"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              > 
                Gestionar Cursos
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" to="/course/add">
                  Crear Curso
                </Link>
                <Link className="dropdown-item" to="/course">
                  Todos los cursos
                </Link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropleft active"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon-user fas fa-user-astronaut"></i> {userName}
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="/">
                  Mi cuenta
                </a>
                <a class="dropdown-item" onClick={signOut} href="/">
                  Cerrar Sesión
                </a>
              </div>
            </li>
          </>
        );
      default:
        return (
          <>
            <Item name=" Inicio" url="/" />
            <Item name="Cursos" url="/courses" />
            <Item name="Registrate" url="/signup" />
            <Item name="Iniciar Sesión" url="/signin" />
          </>
        );
    }
  };

  return (
    <div>
      <nav className="navbar sticky-top  navbar-expand-sm shadow-sm  nav-dark  navbar-dark  ">
        <a className="navbar-brand" href="/">
          <img
            src="/img/logo.png"
            width="70"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">{opciones()}</ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
