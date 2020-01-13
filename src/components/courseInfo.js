import React,{ Component } from 'react';
import ShowModule from './showModules';
import Modal from './modal';

class CourseInfo extends Component{

    render(){
        return(
            <div className="container p-2">
                <div className="col-sm-8 white-background courseInfo shadow central-content">  
                <div className="m-2">
                <div className="text-center p-2">
                 <h1>Introducción a la programación</h1>
                 </div>
                <hr/>

                <div className="row">
                <div className="col-sm-8">
                <h6>Descripción</h6>  
                <p className="font-releway text-justify">
                    Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title
                     and make up the bulk of the card's content Some quick example text to build on the card title and make up the bulk of the card's content
                </p>
                </div>

                <div className="col-sm-4">
                    <img src="/img/course_1.jpg" alt="" width="90%"/>
                </div>
                </div> 
                
                <div className="row p-2 text-center"> 
                    <div className="col-sm-3">
                        <h6>Estado</h6>
                        <p>Activo</p>
                    </div>

                    <div className="col-sm-3">
                        <h6>Fecha de inicio</h6>
                        <p>01 de diciembre de 2020</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Categoria</h6>
                        <p>Teorico-practico</p>
                    </div>

                    <div className="col-sm-3">
                        <h6>Modulos</h6>
                        <p>6</p>
                    </div>
                </div>
                </div>
            
                <button className="btn-success btn" type="btn"  data-toggle="modal" data-target="#modalAddModule" ><i class="fas fa-plus-circle"></i> Nuevo modulo</button>
                <Modal id="modalAddModule" title="Nuevo modulo"/>
                <ShowModule/>
                </div>
                
                 

            </div>
        )
    }
}

export default CourseInfo;