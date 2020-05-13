import React from "react";
import "./Indicators.css";
import Category from "./Category/Category";

export default function Indicator() {
  return (
    <>
      <div className="container central-content">
        <div className="  row">
          <Category
            title="Estudiantes"
            count="120"
            image="/img/estudiante.svg"
          />
          <Category title="Cursos" count="90" image="/img/cursos.svg" />
          <Category title="Docentes" count="20" image="/img/tablero.svg" />
          <Category title="Universidades" count="20" image="/img/lapiz.svg" />
        </div>
      </div>
    </>
  );
}
