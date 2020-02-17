import React, { useState, useContext } from 'react';
import Axios from 'axios';
import Login from './login';
import { UsuarioContext } from '../../Context/usuario-context';
import { Redirect } from 'react-router-dom'

const LoginCo = (props) => {
    
    const [user, setUser] = useState({
        userName:"", password:"", auth: false
    });
    const {saveUser}= useContext(UsuarioContext); 

    const outputEvent = async evt => {
        evt.preventDefault();  
        await setUser({
        ... user,
            [evt.target.name]: evt.target.value
        }); 
    }

    const OnClick = async event => {
        event.preventDefault();  
         
        await Axios.post('http://localhost:4000/auth/signin', {
            user: {
                userName: user.userName,
                password: user.password
            }
        })
        .then(({ data }) => {
            console.log(data); 
                if (data.status === 200 && data.auth === true) {

                      setUser({
                        ...user,
                        auth: true
                    }) 
                     saveUser(data.data); 
                 
         return <Redirect push to="/somewhere/else" />
                    }
            })
            .catch(err => {
                console.log(err);
            })
    }

    if(user.auth){
         return <Redirect to="/index" />;
    }
    return (
        <div>
            <Login methodData={outputEvent} handleSubmit={OnClick} />
         
        </div>
    )
} 

export default LoginCo;