import React, { Component, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../Context/usuario-context';

function ShowModule(props) {


    const { user } = useContext(UsuarioContext);
    const { idRol } = user;

    const showOptions = () => {
        switch (idRol) {
            case 1:
                return (

                    <Fragment> 
                        <i className="fas fa-check-double p-1"></i> 
                    </Fragment>
                )
                break;
                case 2:
                return (

                    <Fragment>
                        <Link push to="/module/add" title="Modificar modulo">
                            <i className="fas fa-pencil-alt icon-cambios"></i>
                        </Link>

                        <Link to="/class/add" title="Nueva clase">
                            <i className="fas fa-chalkboard-teacher icon-class"></i>
                        </Link>
                    </Fragment>
                )
                break;
            default:
        }
    }

    return (
        <div className="central-content">
            <div className="row">
                <div className="card-body table-responsive text-center ">
                    <tr>
                        <th scope="row">1.  </th>
                        <td>  Introducción a logica y algortimos</td>
                        <td>
                    {showOptions()}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2. </th>
                        <td>Que es logica computacional?</td>
                        <td>
                        

                        </td>
                    </tr>

                </div>

            </div>
        </div>
    )
}


export default ShowModule;