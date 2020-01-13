import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container p-2 ">
                <div className="col-md-3 central-div shadow rounded-lg div-while" >
                    <div className="card-body ">
                        <form action="/signin" method="POST">
                            <div className="text-center p-1">
                                <h1>Iniciar Sesión</h1>
                                <hr />
                            </div>
                            <div className="input-group mb-1  font-releway-input">
                                <input type="text" name="username" className="form-control form-control-sm"
                                    placeholder="Usuario" />
                            </div>
                            <div className="input-group mb-1  font-releway-input ">
                                <input type="password" className="form-control form-control-sm" placeholder="Contraseña" name="password" />
                                <p class="text_  text-small p-1"  >Olvide mi contraseña? <a href="/signup" className="link_">Recuperar</a></p>

                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="Check1" />
                                <p className="form-check-label " for="Check1">Recordar datos</p>
                            </div>
                            
                             


                            <div className="form-group">
                            <button className="btn btn-primary btn-block">Ingresar</button>
 
                            <p class="text_" align="center">No tienes una cuenta? <a href="/signup" className="link_">Registrate</a></p>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;