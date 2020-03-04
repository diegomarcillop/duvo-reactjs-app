import React, { Component, Fragment, useContext } from 'react';
import ShowModule from '../showModules';
import { UsuarioContext } from '../../Context/usuario-context';
import { Link } from 'react-router-dom';

function CourseInfo(props) {

  const { user } = useContext(UsuarioContext);
  const { idRol } = user;

  const showOptions = () => {
    switch (idRol) {
      case 1:
        return (
          <Fragment>
            
              <div className="col-sm-4">
              <Link className="btn btn-dark btn-sm btn" to="/course/"><i className="fas fa-angle-left"></i> Volver</Link>
              </div>
               <div className="col-sm-5 ml-auto">
              <Link className="btn btn-succes btn-sm btn-block" to="/class"><i className="fas fa-play"></i> Continuar</Link>
              </div>
           
          </Fragment>
        )
        break;
      case 2:
        return (
          <Fragment>
         
              <div className="col-sm-3">
              <Link className="btn btn-dark btn-sm btn" to="/course/"><i className="fas fa-angle-left"></i> Volver</Link>
              </div>
               <div className="col-sm-5 ml-auto">
              <Link className="btn btn-succes btn-sm btn-block" to="/module/add"><i className="fas fa-cubes"></i> Agregar modulo</Link>
              </div>
          
          </Fragment>
        )
        break;
      default:
        return (
          <div className="col-sm-6 ml-auto">
            <a href="/signin" className="btn btn-succes btn-sm btn-block"><i className="fas fa-play"></i> Iniciar</a>
          </div>
        )
    }
  }

  return (
    <div className={props.size}>
      <div className="card-info p-2 m-1 card-course shadow-sm">
        <div className="  card-body courseInfo central-content">
          <div className="m-2">

            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-3">
                    <img src="/img/logica2.jpg" alt="" width="90%" />
                  </div>
                  <div className="text-center col-8">
                    <h1>Curso de logica y algoritmo I</h1>
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-releway text-justify">
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title
                     and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content
                </p>
                </div>

               <div className="row">
               {showOptions()}
               </div>

              </div>

              <div className="col-sm-6 ">
                <h1>Modulos</h1>
                <hr />
                <ShowModule />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  )
}


export default CourseInfo;