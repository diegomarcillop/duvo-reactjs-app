import React, { Component } from 'react';
import './module.css';
import { Link } from 'react-router-dom';

class ModuleAdd extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                
                <div className="card card-body card-module central-content col-sm-10 ">
                <h1 className="text-center"> Nuevo modulo</h1>
                    <hr/>
                <form action="/cursos/modulos/registrarModulo/{{this.id}}" method="POST">
                    <div className="form-row p- ">
                        <div className="form-group col-md-12 ">
                            <h6>Nombre</h6>
                            <input type="text" className="form-control form-control-sm fuente-releway "
                                id="inputEmail4" name="title" autofocus required />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12  ">
                            <h6 >Portada [PNG, jpg, SVG] </h6>
                            <div className="custom-file ">
                                <input type="file" className="form-control-file fuente-releway "
                                    id="exampleFormControlFile1  " name="photo" required />
                            </div>
                        </div>

                        <div className="form-group col-md-12">
                            <h6>Estado</h6>
                            <select id="inputState" className="form-control form-control-sm fuente-releway"
                                name="stateModule" required>
                                <option selected>Seleccionar</option>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            <h6>Modulo obligatorio anterior</h6>
                            <select id="inputState" className="form-control form-control-sm fuente-releway" required>
                                <option selected>Ninguno</option>
                                <option>Curso de ...</option>
                                <option>Curso de logica y algoritmo</option>
                            </select>
                        </div>
                    </div>
                        <br/><br/>
                     <div className="row">
                          
                        <div className="col-sm-2 mr-auto">
                            <Link type="button" class="btn-dark btn btn-sm  btn-block"  to="/course/index"><i class="fas fa-angle-left"></i> Volver</Link> 
                        </div> 
                        <div className="col-sm-3 ml-auto"> 
                        <Link type="button" class="btn-succes btn btn-sm  btn-block"  to="/course/index"><i class="fas fa-cubes"></i> Crear Modulo</Link> 
                        </div>
                     </div>
                 </form>
                </div> 
            </div>
        )
    }
}

export default ModuleAdd;