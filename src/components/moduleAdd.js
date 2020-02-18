import React, { Component } from 'react';

class ModuleAdd extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <div className="card card-body central-content col-sm-10 ">
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
                            <div className="custom-file">
                                <input type="file" className="form-control-file fuente-releway "
                                    id="exampleFormControlFile1" name="photo" required />
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
 
                    <div className="modal-footer">
                        <button type="button" class="btn-dark btn btn-sm" data-dismiss="modal">Volver</button>
                        <button type="submit" className="btn btn-info btn-sm">Agregar modulo</button>
                    </div>
                </form>
                </div> 
            </div>
        )
    }
}

export default ModuleAdd;