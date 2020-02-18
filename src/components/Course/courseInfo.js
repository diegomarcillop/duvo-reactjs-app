import React,{ Component, Fragment, useContext } from 'react';
import ShowModule from '../showModules';
 import { UsuarioContext } from '../../Context/usuario-context';
 import { Link } from 'react-router-dom';

function CourseInfo(){

  const { user } = useContext(UsuarioContext);
  const { idRol } = user;

  const showOptions = () => {
    switch(idRol){
      case 2:
        return(  
            <Link className="btn btn-success btn-sm btn-block" to="/module/add"><i class="fas fa-cubes"></i> Agregar modulo</Link>             
        )
        break;
      default:
        return(
          <button className="btn btn-success btn-sm btn-block"><i class="fas fa-play"></i> Iniciar</button>
        )
    }
  }
 
        return(
            <div className="p-2 m-1 card-course">
                <div className="card-body courseInfo shadow central-content">  
                <div className="m-2">
                  
                <div className="row">
                  <div className="col-sm-6">
                  <div className="row">
                  <div className="col-sm-3">
                    <img src="/img/course_1.jpg" alt="" width="90%"/>
                </div>
                  <div className="text-center col-8">
                 <h1>Introducción a la programación</h1>
                 </div> 
                  </div>  
                <div className="p-2">
                <p className="font-releway text-justify">
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title
                     and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content
                </p>
                </div>  
                 <div className="col-sm-6 ml-auto">
                 {showOptions()}
                  </div>
                  </div>

                <div className="col-sm-6">
                <h1>Modulos</h1>
                <hr/>
                  
                </div>

                </div> 
                 
                </div>   
                </div> 
            </div>
        )
    }
 

export default CourseInfo;