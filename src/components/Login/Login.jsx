import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function AuthElements(props) {
  return (
     
        <div className="container">
        <div
        className="  mx-auto login-form shadow "
        style={{
          marginTop: "2vh",
          width: "50vh",
        }}
      >
        <div className="card-body ">
          <form onSubmit={props.handleSubmit}>
            <div className="text-center p-1">
              <h1>Iniciar Sesión</h1>
            </div>

            <div className="form-group ">
              <input
                id="userName"
                type="text"
                name="userName"
                className="form-control   shadow"
                placeholder="Usuario"
                onChange={props.methodData}
                autoComplete="off"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control shadow"
                placeholder="Contraseña"
                name="password"
                onChange={props.methodData}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <button className="btn button-duvo btn-block" type="submit">
                Ingresar
              </button>

              <p align="center" className="text">
                No tienes una cuenta?{" "}
                <Link className="register-label" to="/signup">
                  Registrate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Link to="/">
        <p align="center" className="restablecer">
          Olvide mi contraseña
        </p>
      </Link>
        </div>
   
  );
}

export default AuthElements;
