import React, { Component } from 'react';
import './index.css';
import ProgressBar from '../progressBar/progressBar';
import { Link } from 'react-router-dom';

function Course() {
    return (
        <div className="col-sm-4 m-2">
            <div className="card shadow-sm central-content card-course-user"   >
             <div className="card-body">
             <div className="row m-1 info-course-1">
                     <div className="col-3">
                     <img src="/img/logica.jpg" className="card-img-top rounded shadow-sm" ></img>
                     </div> 
                    <div className="col-6">
                       <div className="row">
                       <h1>Curso de logica y algoritmo I</h1> 
                       </div>
                    </div> 
                    <div className="col-3">
                    <Link to="/course/index" className="circulo">
                      <i className="fas fa-play-circle"></i>
                      </Link>
                        </div>
                      
 
                 </div>
                 <div className="col-sm-12 m-1">
                 <p className="p-2">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                       <ProgressBar progress="20"/>
                       </div>

                     
             </div>
                 
            </div>

            <br />
        </div>
    )
}

export default Course;