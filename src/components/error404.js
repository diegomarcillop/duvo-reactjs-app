import React from 'react';
import { Link} from 'react-router-dom';
function Error404(){
    return(
        <div className="central-content">
               <div className="col-sm-10 mx-auto">
               <img src='/img/error404.svg' className="error404"/>
               </div>
               <div className="col-sm-2 mx-auto">
               <Link className="btn btn-info btn-sm btn-block" to="/"> <i class="fas fa-arrow-left"> </i>{" "}Volver</Link>
               </div>
        </div>
    )
}

export default Error404;