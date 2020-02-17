import React, {Component } from 'react';
import Searcher from '../Seacher/searcher';
import CourseStudent from '../CourseStudent/courseStudent';
 import { UsuarioContext }from '../../Context/usuario-context';
function Home(props){

    console.log(props);
    return( 
         <UsuarioContext.Consumer>
             {
                ({user}) => (
                     <div>
                         <p>{user.name}</p>
                      </div>
                 )
             }
         </UsuarioContext.Consumer>
    )
}

export default Home;