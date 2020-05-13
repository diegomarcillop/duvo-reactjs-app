import React from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div className="p-2">
      <div
        className="mx-auto registerForm shadow"
        style={{
          marginTop: "4vh",
          width: "50vh",
        }}
      >
        <div className="card-body">
          <div className="text-center">
            <h1>Registro</h1>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control shadow"
                placeholder="Nombre"
                onChange={props.methodData}
                name="names"
                autoComplete="off"
                autoFocus
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control  shadow"
                placeholder="Apellidos"
                onChange={props.methodData}
                name="surNames"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control  shadow"
                aria-describedby="inputGroup-sizing-sm"
                onChange={props.methodData}
                placeholder="Email"
                name="email"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group ">
              <input
                type="text"
                className="form-control  shadow"
                placeholder="Usuario"
                onChange={props.methodData}
                name="userName"
                autoComplete="off"
                required
              />
              <div className="invalid-feedback">
                El nombre de usuario ya esta registrado
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control  shadow"
                placeholder="Contraseña"
                onChange={props.methodData}
                name="password"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control shadow"
                placeholder="Repetir Contraseña"
                name="cpassword"
                id="validationServer05"
                onChange={props.methodData}
                autoComplete="off"
                required
              />
              <div className="invalid-feedback">
                Las contraseñas no coinciden
              </div>
            </div>

            <div className="form-group">
              <button className="btn button-duvo  btn-block shadow">
                Registrar
              </button>
            </div>
           
          </form>
          <p  align="center" style={{
              fontSize:'2vh'
          }}>
                Tienes una cuenta?{" "}
                <Link className="register-label" to="/signin">
                  Ingresar
                </Link>
              </p>
        </div>
      </div>
    </div>
  );
} 
