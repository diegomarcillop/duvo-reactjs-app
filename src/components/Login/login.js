import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className=" p-4">
                <div className="col-md-4 ml-auto login-form  m-4" >
                    <div className="card-body   ">
                        <form action="/signin" method="POST">
                            <div className="text-center p-1">
                                <h1>Iniciar Sesión</h1>
                                <hr />
                            </div>
                            <div className="input-group mb-1  font-releway-input   shadow mb-3">
                                <input type="text" name="username" className="form-control form-control-sm  "
                                    placeholder="Usuario" />
                            </div>
                            <div className="input-group mb-1  font-releway-input  ">
                                <input type="password" className="form-control form-control-sm" placeholder="Contraseña" name="password" />
                                <p class="text_ p-1"  >Olvide mi contraseña? <a href="/signup" className="link_">Recuperar</a></p>

                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="Check1" />
                                <p>Recordar datos</p>
                            </div> 
                            <div className="form-group">
                            <button className="btn btn-primary btn-block">Ingresar</button>
 
                            <p  align="center">No tienes una cuenta? <a href="/signup" className="link_">Registrate</a></p>
                            </div>

                            <div className="col-sm-5 central-div p-4"> 
                            
                    <a className="btn btn-block btn-outline-secondary btn-sm"   href="/"> <i class="fas fa-arrow-left"></i> Volver</a>
                    </div>

                        </form>
                    </div>
                </div> 

                
            </div>
        )
    }
}

export default Login;