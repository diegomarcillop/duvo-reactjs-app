import React, { Component } from 'react';
import EditorTexto from './editorText';

class Class extends Component {
    render() {
        return (
            <div className="container p-1">
                <div className="white-background">
                    <div className="m-4">

                        <div className="text-center p-3">
                            <h1>Nueva clase</h1>
                            <hr />
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <h6>Nombre</h6>
                                <input type="text" className="form-control form-control-sm font-releway-input "
                                    id="nameClass" />
                            </div>
                            <div className="form-group col-md-3">
                                <h6>Estado</h6>
                                <select id="inputState"
                                    className="form-control form-control-sm  font-releway-input">
                                    <option >Activo</option>
                                    <option >Inactivo</option>

                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <h6> Tipo de clase</h6>
                                <select id="inputType"
                                    className="form-control form-control-sm font-releway-input">
                                    <option >Lectura</option>
                                    <option >Video</option>

                                </select>
                            </div>



                            <div className="form-group col-md-6 ">
                                <h6>Modulo</h6>
                                <select id="inputCourse"
                                    className="form-control form-control-sm font-releway-input">
                                    <option >--Seleccionar--</option>
                                    <option>Curso de ...</option>
                                    <option>Curso de logica y algoritmo</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <h6>Clase anterior</h6>
                                <select id="inputClass"
                                    className="form-control form-control-sm font-releway-input">
                                    <option  >--Seleccionar--</option>
                                    <option>Curso de ...</option>
                                    <option>Curso de logica y algoritmo</option>
                                </select>
                            </div>


                        </div>

                         <div className="form-group">
                             <h6>Contenido</h6>
                         <EditorTexto />
                        
                         </div>
                         
                             <div className="mr-auto">
                                <a href="/">
                                    <button className="btn-dark btn margin-person btn-sm" type="button">Volver</button>
                                </a>
                                <button type="submit" className="btn btn-success btn-sm">Crear clase</button>
                            </div>
                            <br />
                     </div>

                </div>

            </div>
        )
    }
}

export default Class;