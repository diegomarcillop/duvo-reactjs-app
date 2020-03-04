import React from 'react';
import './about.css';

function About(){
    return(
        <div className="about">
             <div className="col-sm-10 central-content">
               <div className="form-group p-3">
                 <div className="col-md-6 md-3 p-2">
                 <h1 className="text-center">Quienes Somos?</h1>
                    <p>Somos  DUVO, una plataforma de aprendizaje donde podras alquirir el conocimiento de bases solidas en logica y algoritmo para que puedas dominar cualquier lenguaje de programación.</p>
                    <h1 className="text-center">Servicios</h1>

                    <div className="row">
                       <div className="col-sm-4">
                       <div className="card text-white bg-dark mb-3 shadow-sm">
                         <div className="card-body">
                         <h2 className="text-center">Interactividad</h2>
                         </div>
                      </div>
                       </div>

                       <div className="col-sm-4">
                       <div className="card text-white bg-info mb-3">
                         <div className="card-body">
                         <h2 className="text-center">Soporte</h2>
                         </div>
                      </div>
                       </div>

                       <div className="col-sm-4">
                       <div className="card text-white bg-success mb-3 shadow-sm">
                         <div className="card-body">
                         <h2 className="text-center">Escalabilidad</h2>
                         </div>
                      </div>
                       </div>
                    </div>
                 </div>
                </div> 
            </div>
        </div>
    )
}

export default About;