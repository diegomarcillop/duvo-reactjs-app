import React from 'react';
import './questionary.css';

function Questionary(){
    return(
        <div className="col-12"  > 
    <div className="questionary col-sm-8 central-div">
        <div className="card card-body m-3 shadow-lg">
            <div claclassNamess="card-header text-center">
                <h1 className="text-center">Evaluacion del modulo</h1>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="form-group m-2">
                         <h2>Objetivo</h2>
                        <h5 className="text-user">Evaluar el conocimiento adquirido durante el modulo [<strong>Introducción
                                a algoritmo</strong>]</h5>
                    </div>
                </div>
                <hr/>
                <div className="question">
                    <h6 className="text-user"><strong>1.</strong>Representa la operación o conjunto de operaciones que
                        permiten comunicar al exterior el o los resultados alcanzados
                        ?</h6>
                    <div className="answer text-user p-1"> 
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                	Datos de entrada
                            </label>
                        </div>
                        
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label clasclassNames="form-check-label" for="defaultCheck1">
                                		Procesamiento de datos
                            </label>
                        </div>

                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                		Impresión de resultados
                            </label>
                        </div>

                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                		Ninguna de las anteriores
                            </label>
                        </div>
                    </div>


                </div>
        <hr/>
                 <div className="question">
                    <h6 className="text-user"><strong>2.</strong>Llamado Falso lenguaje ya que es una descripción de alto nivel, compacta e informal de un lenguaje de programación real.
                        ?</h6>
                    <div className="answer text-user p-1"> 
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                		Algortimo
                            </label>
                        </div>
                        
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                			Diagrama de Flujo
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                			pSeudocodigo
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                		Ninguna de las anteriores
                            </label>
                        </div>
                    </div>


                </div>
            </div>
            <hr/>
            <div className="col-sm-6 row m-1">
                <div className="col-sm-5 p-0">
                     <button className="btn btn-block btn-succes btn-sm"><i class="fas fa-paper-plane"></i> Enviar</button>
           
                </div>
                     <div className="col-sm-3">
                         <button className="btn btn-block btn-dark btn-sm">Volver</button>
                </div>
                    
                     
                  
            </div>
            <br/>
        </div>

    </div>
    </div>
    )
}

export default Questionary;