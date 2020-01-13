import React, { Component } from 'react';
import Course from './course';
import axios from 'axios';

class Courses extends Component {

  constructor(props){
    super(props);
    this.state = {course:[]};
  }

  async componentDidMount() {
    await axios.get('http://localhost:4000/course')
      .then(res => {
        const courses = res.data;
      
        this.setState({ course: courses});
      })
  }

  render() {
    return (
      <div className="m-2 central-content">
        <form>
           <h5 className="p-2 text-center font-releway">Todos los cursos de <strong>DUVO</strong></h5>
          <div className="container p-1">
            <div className="row">
              <Course />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Courses;