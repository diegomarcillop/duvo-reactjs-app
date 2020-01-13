import React, { Component } from 'react';

class Questions extends Component {
    render() {
        return (
            <div>
                <div className="text-center p-0">
                    <p>Nueva pregunta</p>
                </div>

                <div className="card-body">
                    <form>
                        <div className="form-row ">

                            <div className="form-group col-md-12">
                                <label for="inputEmail4">Pregunta</label>
                                <input type="text" className="form-control form-control-sm font-releway-input "
                                    id="inputEmail4" />
                            </div>
                            <div className="form-group col-md-12 ">
                                <label for="inputState">Tipo</label>
                                <select id="inputState" className="form-control form-control-sm font-releway-input">
                                    <option>--Seleccionar--</option>
                                    <option>Respuesta correcta</option>
                                    <option>Redireccionar a una clase</option>
                                </select>
                            </div>

                            <div className="form-group col-sm-6">
                                <label for="inputEmail4">Respuestas +</label>

                                <input type="text" className="form-control form-control-sm" />
                                <h6 className="link12">
                                    <i className="fas fa-plus size-iconn" > </i><a href="#">Agregar</a>
                                </h6>



                            </div>
                            <div className="form-group col-md-3 ">
                                <label for="inputState">Estado</label>
                                <select id="inputState" className="form-control form-control-sm font-releway-input">
                                    <option>Seleccionar</option>
                                    <option>Correcto</option>
                                    <option>Incorrecto</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3 ">
                                <label for="inputState">Destino/ Clase</label>
                                <select id="inputState" className="form-control form-control-sm font-releway-input">
                                    <option >Ninguno</option>
                                    <option>Correcto</option>
                                    <option>Incorrecto</option>
                                    <option>Incorrecto</option>
                                </select>
                            </div>


                        </div>


                    </form>

                </div>
            </div>
        );
    }
}