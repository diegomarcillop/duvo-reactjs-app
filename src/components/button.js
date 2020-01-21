import React, {Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div>
                { /*buttton con algunas caracteristicas para activar un modal*/ }
           <button className={this.props.style} type="button"  data-toggle={this.props.modal} data-target={this.props.etiquetaModal} ><i class="fas fa-plus-circle"></i> Nuevo modulo</button>
            </div>
        )
    }
}

export default Button;