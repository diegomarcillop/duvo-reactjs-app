import React, { Component } from 'react';

class ShowModule extends Component {
    render() {
        return (
          <div className=" ">
                 <div className="row central-content">
                <div className="col-sm-6 p-2  ">
                <div className="card card-body table-responsive text-center ">
                <caption className="text-center">Modulos</caption>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Introducción a logica y algortimos</td>
                            <td>
                                <a href="/mod" title="Modificar modulo">
                                    <i class="fas fa-pencil-alt icon-cambios"></i>
                                </a>


                                <a href="/classAdd" title="Nueva clase">
                                    <i class="fas fa-chalkboard-teacher icon-class"></i>
                                </a>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
                 </div>
                </div>
          </div>
        )
    }
}

export default ShowModule;