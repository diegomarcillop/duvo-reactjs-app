import React, { Component } from 'react';
 
class Item extends Component{
    render(){
        return(
            <div>
                <li className="nav-item active" >
                <a className="item_ nav-link  " href={this.props.url}><i class={this.props.icon}></i>{this.props.name}</a>
                </li>
            </div>
        )
    }
}

export default Item;