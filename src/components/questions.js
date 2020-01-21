import React, { Component } from 'react';

class Questions extends Component {
    render() {
        return (
            <div className="col-sm-6 central-content p-3">
               <div className="card shadow white-background ">
               <div className="text-center p-1">
                    <h1>Nueva pregunta</h1>
                    <hr/>
                </div> 
                <div className="card-body">
                    <form>
                        <div className="form-row "> 
                            <div className="form-group col-md-12">
                                <h6>Pregunta</h6>
                                <input type="text" className="form-control form-control-sm font-releway-input "
                                    id="inputNameQuestion" />
                            </div>
                            <div className="form-group col-md-12 ">
                                <h6>Tipo</h6>
                                <select id="inputTypeQuestionss" className="form-control form-control-sm font-releway-input">
                                    <option>--Seleccionar--</option>
                                    <option>Respuesta correcta</option>
                                    <option>Redireccionar a una clase</option>
                                </select>
                            </div>  
                                <div className="form-group col-sm-6">
                                <h6>Nombre de respuesta</h6> 
                                <input type="text" className="form-control form-control-sm" /> 
                            </div>
                            <div className="form-group col-md-3 ">
                                <h6>Estado</h6>
                                <select id="inputStateQuestions" className="form-control form-control-sm font-releway-input">
                                    <option>Seleccionar</option>
                                    <option>Correcto</option>
                                    <option>Incorrecto</option>
                                </select>
                            </div> 
                            <div className="form-group col-md-3 p-4">
                                <button className="btn btn-dark btn-sm btn-block"><i class="fas fa-plus-circle margin-person"></i>Añadir</button>
                            </div> 
                            
                            <br/>
                            <div className="form-group col-md-4 p-0 mr-auto">
                                <button className="btn btn-success btn-sm btn-block">Terminar</button>
                            </div> 
                        </div>  
                    </form>
                    <hr/>
                    <h6 >Review</h6>

                </div>
               </div>
            </div>
        );
    }
}

export default Questions;