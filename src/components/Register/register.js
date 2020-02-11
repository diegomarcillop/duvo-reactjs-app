import React, { Component } from 'react';
import './register.css';

function Register(props) {
    return (
        <div className="p-2">
            <div className="col-md-4 ml-auto registerForm  " >
                <div className="form-group text-center">
                    <h1>Registro</h1> 
                    <hr/>
                </div>
                <div className="card-body"> 
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-group">
                             <input type="text" className="form-control form-control-sm   mb-3 shadow-sm"
                             placeholder="Nombre" onChange={props.methodData} name="names" autoFocus  required/>
                        </div>

                        <div className="form-group">
                             <input type="text" className="form-control form-control-sm  mb-3 shadow-sm" 
                            placeholder="Apellidos" onChange={props.methodData}  name="surNames"required />
                        </div>

                        <div className="form-group">
                             <input type="text" className="form-control form-control-sm   mb-3 shadow-sm"
                                aria-describedby="inputGroup-sizing-sm" onChange={props.methodData}   placeholder="Email" name="email" required />
                        </div>

                        <div className="form-group ">
                             <input type="text" className="form-control form-control-sm  mb-3 shadow-sm"
                                placeholder="Usuario" onChange={props.methodData} name="userName" required />
                                 <div className="invalid-feedback">
                                  El nombre de usuario ya esta registrado
                               </div>
                        </div>
                        <div className="form-group">
                             <input type="password" className="form-control form-control-sm  mb-3 shadow-sm "
                                placeholder="Contraseña" onChange={props.methodData}  name="password" required  />
                                 
                        </div>
                        <div className="form-group"> 
                             <input type="password" className="form-control form-control-sm  mb-2 shadow-sm"
                                placeholder="Repetir Contraseña" name="cpassword"  id="validationServer05"  onChange={props.methodData} required />
                             <div className="invalid-feedback">
                                  Las contraseñas no coinciden
                               </div>
                        </div>

                        <div className="form-group p-1">
                        <label><strong>Fecha nacimiento</strong> </label>  

                            <div className="col-sm-9">
                                <input className="form-control form-control-sm" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm" onChange={props.methodData} type="date" name="birthDate" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-info  btn-block">Registrar</button>
                            <p className="text_" align="center">Tienes una cuenta? <a href="/signin" className="link_">Ingresar</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;