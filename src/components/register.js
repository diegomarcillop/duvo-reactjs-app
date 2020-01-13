import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container p-2">
                <div className="col-sm-4 central-div  shadow div-while rounded-lg " >
                    <div className="text-center p-1">
                        <h1>Registro</h1>
                        <hr />
                    </div>

               <div className="card-body">
               <form action="/signup" method="POST">
                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm  font-releway-input mb-2" placeholder="Nombre" name="names" autofocus />
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm font-releway-input mb-2" placeholder="Apellidos" name="surNames" />
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm font-releway-input  mb-2"
                                aria-describedby="inputGroup-sizing-sm" placeholder="Email" name="email" />
                        </div>

                        <div className="input-group">
                            <input type="text" className="form-control form-control-sm  mb-2"
                                placeholder="Usuario" name="username" />
                        </div>
                        <div className="input-group">
                            <input type="password" className="form-control form-control-sm  mb-2 "
                                placeholder="Contraseña" name="password" />
                        </div>
                        <div className="input-group">
                            <input type="password" className="form-control form-control-sm  mb-2"
                                placeholder="Repetir Contraseña" name="cpassword" />
                        </div>

                        <div className="form-group">
                            <h6  >Fecha de nacimiento</h6>
                            <div className="col-sm-9">
                                <input className="form-control form-control-sm" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" type="date" name="birthDate" />
                            </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary  btn-block">Registrar</button>
                            <p className="text_" align="center">Tienes una cuenta? <a href="/signin" class="link_">Ingresar</a></p>
                        </div>

                    </form>
               </div>

                </div>
            </div>
        )
    }
}
export default Register;