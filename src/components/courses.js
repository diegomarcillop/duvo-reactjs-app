import React, {Component } from 'react';
import Course from './course';
class Courses extends Component{
    render(){
        return(
            <div className="m-2 central-content">
            <form>
              <h5 className="p-2 text-center fuente-releway">Todos los cursos de <strong>UVO</strong></h5>
              <div class="container p-1">
              <div className="row">
              <Course/>
              </div>
              </div>
            </form>
          </div>
        )
    }
}

export default Courses;