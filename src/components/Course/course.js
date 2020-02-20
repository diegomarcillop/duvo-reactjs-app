import React, { useContext, Fragment }  from 'react';
import './course.css';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../../Context/usuario-context';

function Course({ title, imagen }) {

    const { user } = useContext(UsuarioContext);
    const { idRol } = user;

    const showOptions = () => { // show options -> | rol 1-> student | 2 -> admin ......
        switch(idRol){
            case 2:
               return(
                   <Fragment> 
                        <Link className="detalles" to="/course/index"><i className="fas fa-angle-double-left" ></i> Gestionar Curso</Link>

                   </Fragment>
                )
            break;
            default:
            return(
                <Link className="detalles" to="/"  data-toggle="modal" data-target="#exampleModal"><i className="fas fa-angle-double-left" ></i> Mostrar detalles</Link>
            ) 
        }
    } 

    return (
        <div className="col-sm-4 card-course ">
            <div className="card shadow-sm   central-content"   >
                 <div className="card-body">
                 <div className="row">
                     <div className="col-4">
                     <img src={imagen} className="card-img-top rounded shadow-sm" ></img>
                     </div>
                    <div className="col-8">
                    <h1>{title}</h1>
                    </div>
                 </div>
                 <div className="form-group">
                  <p className="p-2">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                 <hr/>
                 {showOptions()}
                  </div> 
                  </div>


            </div> 
            <br />
        </div>
    )
}


export default Course;