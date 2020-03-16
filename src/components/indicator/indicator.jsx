import React from './node_modules/react';
import './indicator.css';

function Indicator() {
    return (
        <div>
            
                <div className="container central-content">
                     <div className="  row">
                     <div className="col-sm-3 card-indicator shadow-sm   rounded">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/estudiante.svg"></img>
                                </div>
                                <div className="col-6 border-left">
                                    <h2 className="m-2">120</h2>
                                </div>
                            </div>
                            <h1 className="text-center">Estudiantes</h1> 
                        </div> 
                    </div>

                    <div className="col-sm-3 card-indicator shadow-sm rounded">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/cursos.svg"></img>
                                </div>
                                <div className="col-6 border-left">
                                    <h2 className="m-2">120</h2>
                                </div>
                            </div>
                            <h1 className="text-center">Cursos</h1> 
                        </div> 
                    </div>

                    <div className="col-sm-3 card-indicator shadow-sm rounded">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/tablero.svg"></img>
                                </div>
                                <div className="col-6 border-left">
                                    <h2 className="m-2">20</h2>
                                </div>
                            </div>
                            <h1 className="text-center">Docentes</h1> 
                        </div> 
                    </div>
                    <div className="col-sm-3 card-indicator shadow-sm rounded">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <img src="/img/lapiz.svg"></img>
                                </div>
                                <div className="col-6 border-left">
                                    <h2 className="m-2">20</h2>
                                </div>
                            </div>
                            <h1 className="text-center">Universidades</h1> 
                        </div> 
                    </div>

                     </div>

                    
                </div>
                <hr/>
            
        </div>
    )
}

export default Indicator;