import React from "react";
import "./course.css";

export default function CourseP({ title, imagen }) {
  return (
    <div className="card card-course shadow" style={{
      width: "16em",
      borderRadius: "10px",
      border: "none"
    }}>
      <img src="/img/logica.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1>Curso de logica y algoritmo</h1> 
         <p>15 Modulos</p>      
              </div>
    </div>
  );
}
