import React, { Component } from 'react';

class ShowModule extends Component {
    render() {
        return (
          <div className=" ">
                 <div className="row central-content">
              
                <div className="card-body table-responsive text-center ">
                 <table className="table">
                    
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
        )
    }
}

export default ShowModule;