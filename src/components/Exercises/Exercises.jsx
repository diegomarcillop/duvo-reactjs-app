import React from "react";
import "./Exercises.css";

function Exercises() {
  return (
    <div className="col-12 ">
      <div className="col-sm-8 central-div card-exercises p-2 ">
        <div className="card">
          <div className="card-header text-center">
            <h1>Practica del modulo</h1>
            <p className="p-0 ultimo">
              <strong>Modulo:</strong> Introducción a algoritmo
            </p>
          </div>
          <div className="card-body">
            <h2 className="  p-2">Ejercicios</h2>

            <div className="problem">
              <h6 className="text-user">
                <strong>1.</strong>Se desea calcular la distancia recorrida(m)
                por un movil que tiene velocidad constante (m/s) durante un
                tiempo T (Sg), considerar que es un MRU (Movimiento Rectilineo
                Uniforme)
              </h6>
            </div>
            <hr />
            <div className="problem">
              <h6 className="text-user">
                <strong>2.</strong> Se necesita saber el promedio de la nota de
                un estudiante de un curso de logica y algoritmo apartir de sus
                tres notass parciales
              </h6>
            </div>
          </div>
          <hr />
          <div className="col-sm-6 row m-1">
            <div className="col-sm-3 p-0">
              <button className="btn btn-block btn-succes btn-sm">
                <i class="far fa-save"></i> Guardar
              </button>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-block btn-dark btn-sm">Volver</button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Exercises;
