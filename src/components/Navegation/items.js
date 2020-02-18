import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Item extends Component{
    render(){
        return(
            <div>
                <li className="nav-item active" > 
                <Link className="item_ nav-link" to={this.props.url}> 
                <i className={this.props.icon}></i> 
                    {this.props.name} 
                </Link>  
                </li>
            </div>
        )
    }
}

export default Item;