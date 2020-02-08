import React,{Component} from 'react';
import Axios from 'axios';
import Login from './login';

class LoginCo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:"",
            note:""
        };

        this.OnClick = this.OnClick.bind(this);
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent = async (event) => {
        event.preventDefault();
        await this.setState({
            [event.target.name]: event.target.value
        });
    }

    OnClick = async (event) =>{
        event.preventDefault(); 
       await Axios.post('http://localhost:4000/auth/login',{
               user:{
                userName : this.state.userName,
                password : this.state.password
                
               }
        })
        .then( ({data}) => 
        {  console.log(data);})
        .catch( err => {
            console.log(err);
        }) 
    }
    render(){
        return(
            <div> 
                <Login methodData={this.outputEvent} handleSubmit={this.OnClick}/>
            </div>
        )
    }
}

export default LoginCo;