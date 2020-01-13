import React, { Component } from 'react';
 
class Searcher extends Component {
    render() {
        return (
            <div className="buscador  p-5 w-100">
                <form >
                    <h3 className="title-search text-center text-white  ">Encuentra todo lo que buscas en un solo sitio!</h3>
                    <div className="input-group mb-3 col-sm-6 central-content">
                        <input type="text" className="form-control" placeholder="Buscador de cursos.."
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-light btn-sm" type="button" id="button-addon2"><i
                                 className="fas fa-search"></i></button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default Searcher;