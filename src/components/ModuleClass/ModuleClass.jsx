import React from "react";
import "./ModuleClass.css";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function ModuleClass() {
  return (
    <div className="container p-2 classView col-md-10">
      <div className="row m-1">
        <div className="col-sm-6">
          <h6 className="">
            Curso de logica y algortimo/ Modulo: Conceptos de logica y algoritmo
          </h6>
        </div>
        <div className="col-sm-4 ml-auto">
          <ProgressBar progress="50" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="card shadow mb-3">
          <div className="card-body">
            <div className="col-sm-12">
              <h3 className="display-9 text-center">¿Que es un algoritmo?!</h3>
              <p className=" text-user">
                Es un conjunto de instrucciones o reglas definidas y
                no-ambiguas, ordenadas y finitas que permite, típicamente,
                solucionar un problema, realizar un cómputo, procesar datos y
                llevar a cabo otras tareas o actividades. Dados un estado
                inicial y una entrada, siguiendo los pasos sucesivos se llega a
                un estado final y se obtiene una solución. Los algoritmos son el
                objeto de estudio de la algoritmia.
              </p>

              <img className="central-div" src="/img/algoritmo.png" alt="" />
              <hr className="my-1" />
              <h6>La definición de un algoritmo debe describir tres partes:</h6>
              <div className="row  ">
                <div className="col-sm-8 central-div  ">
                  <div>
                    <button
                      type="button"
                      className="form-control btn btn-outline-success space btn-block   btn-xs w-100"
                    >
                      Entrada, proceso y salida
                    </button>
                  </div>
                  <div>
                    <button className="form-control form-control-sm   btn btn-outline-success space">
                      Entrada, programación y salida
                    </button>
                  </div>
                  <div>
                    <button className="form-control btn btn-outline-success space form-control-sm">
                      Información, proceso y salida
                    </button>
                  </div>
                  <div>
                    <button className="form-control btn btn-outline-success space form-control-sm">
                      Información, programación y salida
                    </button>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>

          <hr />
          <div className=" row m-2">
            <div className="form-group ml-auto">
              <a
                className="btn btn btn btn-dark btn-sm  mr-auto"
                href="/"
                role="button"
              >
                Atras
              </a>
              <a
                className="btn btn btn-success btn-sm margin-person"
                href="/"
                role="button"
              >
                Siguiente
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
