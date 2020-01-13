import React, { Component } from 'react';
import ModuleAdd from './moduleAdd';
import {  Route } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content ">
                        <div className= "modal-header">
                        <h1  >{this.props.title}</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                         <Route  path="/module" exact component={ModuleAdd}/> 
                        </div>
                         
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;