import React, { Component, createContext, useState } from 'react';
import { Redirect } from 'react-router-dom'

export const UsuarioContext = createContext();

const UsuarioContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    
    const saveUser = data => {
 
         setUser({   
                idUser: data.user.idUser,
                userName: data.user.userName,
                idRol: data.user.idRole.idRol 
         }); 

    }
    
    return (
        <UsuarioContext.Provider
            value={{
                 user,
                saveUser, 
            }}>

            {children}
        </UsuarioContext.Provider>
    )

}

 

export default UsuarioContextProvider;