import React  from 'react';
import './login.css';

function Login(props){
    return(
        <div className=" p-4">
        <br/><br/>
        <div className="col-md-4 ml-auto login-form  m-4 " >
            <div className="card-body">
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
                        <input type="password" className="form-control form-control-sm" placeholder="Contraseña" name="password"  onChange={props.methodData}/>
                        <p className="text_ p-1"  >Olvide mi contraseña? <a href="/signup" className="link_">Recuperar</a></p>

                    </div>

                    <div className="form-group custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label mb-1 p-1" >Recordar datos</label>
                    </div> 
                    <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Ingresar</button>

                    <p  align="center">No tienes una cuenta? <a href="/signup" className="link_">Registrate</a></p>
                    </div>
                    <label> </label>
                    <div className="col-sm-5 central-div p-4"> 
                    
            <a className="btn btn-block btn-outline-secondary btn-sm"   href="/"> <i clas="fas fa-arrow-left"></i> Volver</a>
            </div>

                </form>
            </div>
        </div>  
        
    </div>
    )
}
 

export default Login;