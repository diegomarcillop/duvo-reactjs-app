import React from "react";
import "./authElement.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function AuthElements(props) {
  return (
    <div className=" p-3">
      <Helmet>
        <title>Duvo- Iniciar Sesión </title>
      </Helmet>
      <div className="col-md-4 ml-auto login-form   ">
        <br />
        <br />
        <div className="card-body animated pulse ">
          <form onSubmit={props.handleSubmit}>
            <div className="text-center p-1">
              <h1>Iniciar Sesión</h1>
              <hr />
            </div>

            <div className="form-group mb-1  font-releway-input mb-3"> 
              <input
                id="userName"
                type="text"
                name="userName"
                className="form-control form-control-sm  shadow "
                placeholder="Usuario"
                onChange={props.methodData}
              />
            </div>

            <div className="form-group mb-1  font-releway-input  "> 
              <input
                type="password"
                className="form-control form-control-sm shadow"
                placeholder="Contraseña"
                name="password"
                onChange={props.methodData}
               />
              <p className="text_ p-1">
                Olvide mi contraseña?{" "}
                <a href="/signup" className="link_">
                  Recuperar
                </a>
              </p>
            </div>

            <div className="form-group custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="exampleCheck1"
              />
              <label
                className="custom-control-label mb-1 p-1"
                htmlFor="exampleCheck1"
              >
                Recordar datos
              </label>
            </div>

            <div className="form-group">
              <button className="btn btn-succes btn-block" type="submit"> 
                Ingresar
              </button>

              <p align="center">
                No tienes una cuenta?{" "}
                <Link className="link_" to="/signup">
                  Registrate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthElements;
