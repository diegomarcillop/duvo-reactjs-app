import React from "react";
import './Carousel.css'

export default function Carousel() {
  return ( 
      <div
        id="carouselExampleIndicators"
        className="carousel slide  "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/carrusel1.jpg"
              className="d-block  img-carrusel"
              alt="..."
            />
            <div className="row">
              <div className="carousel-caption d-none d-md-block">
                <h5>Preparate para el futuro</h5>
                <p>
                  Especializate en las carreras del futuro y saca tu mejor
                  potencial.
                </p>
                <button type="button" className="btn btn-carousel-info">
                  Cursos
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/carrusel2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Trabaja como un profesional</h5>
              <p>
                Adquiere las mejores practicas en la industria del software y
                aumenta tus posibilidad de empleo
              </p>
              <button type="button" className="btn btn-carousel-info">
                Comenza ahora
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/carrusel3.jpg"
              className="d-block w-100 "
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Aumenta el potencial de tu equipo</h5>
              <p>Saca el mejor potencial de tu equipo, te ayudamos!</p>
              <button type="button" className="btn btn-carousel-info">
                Contacto
              </button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> 
  );
}
