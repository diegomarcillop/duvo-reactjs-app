import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClassAdd extends Component {
  render() {
    return (
      <div className="container">
        <div className="shadow  central-content card-add col-sm-10">
          <div className="m-4">
            <div className="text-center p-3">
              <h1>Nueva clase</h1>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Nombre</label>
                <input type="text" className="form-control " id="nameClass" />
              </div>
              <div className="form-group col-md-3">
                <label>Estado</label>
                <select id="inputState" className="form-control">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label>Tipo de clase</label>
                <select id="inputType" className="form-control">
                  <option>Lectura</option>
                  <option>Video</option>
                </select>
              </div>
              <div className="form-group col-md-6 ">
                <label>Modulo</label>
                <select id="inputCourse" className="form-control">
                  <option>--Seleccionar--</option>
                  <option>Curso de ...</option>
                  <option>Curso de logica y algoritmo</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>Clase anterior</label>
                <select id="inputClass" className="form-control">
                  <option>--Seleccionar--</option>
                  <option>Curso de ...</option>
                  <option>Curso de logica y algoritmo</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Contenido</label>
              <textarea
                rows="5"
                cols="8"
                className="form-control  shadow-sm"
                name="description"
                required
              ></textarea>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-sm-2 mr-auto">
                <Link
                  type="button"
                  class="btn-secondary btn btn-sm  btn-block"
                  to="/course/index"
                >
                  <i class="fas fa-angle-left"></i> Volver
                </Link>
              </div>
              <div className="col-sm-3 ml-auto">
                <Link
                  type="button"
                  class="btn button-success-duvo  btn-add btn-sm btn btn-block"
                  to="/course/index"
                >
                  {" "}
                  Crear Clase
                </Link>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ClassAdd;
