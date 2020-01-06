import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container p-2 ">
                <div className="col-md-3 central-div shadow rounded-lg div-while " >
                    <div className="card-body ">
                        <form action="/signin" method="POST">
                            <div className="text-center p-2">
                                <h1>Iniciar Sesión</h1>
                                <hr />
                            </div>
                            <div className="input-group input-group-sm mb-1 ds">
                                <input type="text" name="username" className="form-control"
                                    placeholder="usuario" />
                            </div>
                            <div className="input-group input-group-sm mb-3 ds">
                                <input type="password" className="form-control" placeholder="contraseña" name="password" />
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="Check1" />
                                <label className="form-check-label" for="Check1">Recordar datos</label>
                            </div>
                            
                            <button className="btn btn-primary btn-block">Ingresar</button>
                            <p class="text_" align="center">No tienes una cuenta? <a href="/signup" className="link_">Registrate</a></p>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;