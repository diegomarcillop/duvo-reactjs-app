import React, {Component} from 'react';
import Register from './register';
import Axios from 'axios';

class RegisterCo extends Component{
    constructor(props){
        super(props);
        this.state = {
            names:"",
            surNames:"",
            email:"",
            birthDate:"",
            state:"Activo",
            userName:"",
            password:"",
            cpassword:""
        }
        this.OnClick = this.OnClick.bind(this);
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent  = async (evt) =>{
        evt.preventDefault();
        
         await this.setState({
            [evt.target.name]: evt.target.value    

         
        })
    }

    OnClick = async (evt) => {
        evt.preventDefault();
        var elemento = document.getElementsByName("cpassword");       
        if(this.state.password === this.state.cpassword){
              // if the password is correct a class is removed "is-invalid"
            elemento[0].classList.remove("is-invalid");
            await Axios.post('http://localhost:4000/person/',{ 
                names:this.state.names,
                surNames:this.state.surNames,
                email:this.state.email,
                birthDate:this.state.birthDate,
                state:this.state.state,
                userName:this.state.userName,
                password:this.state.password,
                idRole:1
               }
              )
         .then( ({data}) => 
         {  
              switch(data.code){
                case "Successful":
                    break;
                case "DuplicateUser":
                    document.getElementsByName("userName")[0].classList.add("is-invalid");
                    break;
             } 
        })
         .catch( err => {
             console.log(err);
         }) 

        }else{
            // if the password is incorrect a class is added "is-invalid"
            elemento[0].classList.add("is-invalid");
        }

    }

    render(){
        return(
            <div>
                <Register methodData={this.outputEvent} handleSubmit={this.OnClick}/>
            </div>
        )
    }
}

export default RegisterCo;