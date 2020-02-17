import React from 'react';
import './login.css';
import { Helmet } from 'react-helmet' 

function Login(props) {
    return (
        <div className=" p-3">
           
            <div className="col-md-4 ml-auto login-form  m-1  " >
            <br /><br />
                <div className="card-body animated pulse ">
                    <form onSubmit={props.handleSubmit}>
                        <div className="text-center p-1">
                            <h1>Iniciar Sesión</h1>
                            <hr />
                        </div>

                        <div className="input-group mb-1  font-releway-input   shadow mb-3">
                            <input type="text" name="userName" className="form-control form-control-sm  "
                                placeholder="Usuario" onChange={props.methodData} />
                        </div>

                        <div className="input-group mb-1  font-releway-input  ">
                            <input type="password" className="form-control form-control-sm" placeholder="Contraseña" name="password" onChange={props.methodData} />
                            <p className="text_ p-1"  >Olvide mi contraseña? <a href="/signup" className="link_">Recuperar</a></p> 
                        </div>

                        <div className="form-group custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                            <label className="custom-control-label mb-1 p-1" htmlFor="exampleCheck1" >Recordar datos</label>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-info btn-block" type="submit">Ingresar</button>

                            <p align="center">No tienes una cuenta? <a href="/signup" className="link_">Registrate</a></p>
                        </div>
                         

                    </form>
                </div>
            </div>

        </div>
    )
}


export default Login;