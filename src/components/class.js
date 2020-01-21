import React, { Component } from 'react';

class Class extends Component {

    render() {
        return (
            <div className="container p-2">
               <div className="row m-1">
               <div className="col-sm-6">
                    <h6 className="font-fredoka-small">Curso de logica y algortimo/ Modulo: Conceptos de logica y algoritmo</h6>
                    
                </div> 
                <div className="col-sm-4 ml-auto">
                <div className="progress">
                              <div className="progress-bar progress-bar-striped bg-success" role="progressbar"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                         </div>
                </div>
               </div>


                <div className="col-md-12">
                    <div className="card shadow mb-3">

                        <div className="card-body">
                        
                    

                        </div>
                        <hr/>
                        <div className=" row m-2">
                            <div className="form-group ml-auto">
                                
                              <a className="btn btn btn btn-dark btn-sm  mr-auto" href="#" role="button">Atras</a>
                              <a className="btn btn btn-success btn-sm margin-person" href="#" role="button">Siguiente</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Class;