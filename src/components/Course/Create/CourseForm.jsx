import React, { Component } from "react";
import axios from "axios";

class CourseAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCourse: "",
      description: "",
      stateCourse: "",
      dateStart: null,
      style: "primary",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("http://localhost:4000/course", {
      nameCourse: this.state.nameCourse,
      description: this.state.description,
      stateCourse: this.state.stateCourse,
      dateStart: this.state.dateStart,
      style: this.state.style,
    });

    return result;
  };
  render() {
    return (
      <div className="col-sm-8 central-content p-3 card-add shadow">
        <h1 className="text-center">Crear un nuevo curso</h1>
        <div className="card-body m-2">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="form-row">
              <div className="form-group col-md-9 ">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  onChange={this.handleChange}
                  name="nameCourse"
                  autoFocus
                  required
                  autoComplete="off"
                />
              </div>

              <div className="form-group col-md-3 ">
                <label>Fecha Inicio</label>
                <input
                  className="form-control shadow-sm"
                  aria-label="Sizing example input"
                  type="date"
                  name="dateStart"
                  required
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group col-sm-12">
                <label>Descripción</label>
                <textarea
                  rows="5"
                  cols="5"
                  className="form-control  shadow-sm"
                  name="description"
                  required
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div className="form-group col-md-6  ">
                <label>Portada [PNG, jpg, SVG] </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  name="photo"
                  required
                />
              </div>

              <div className="form-group col-md-3">
                <label>Estado</label>
                <select
                  id="input1"
                  className="form-control shadow-sm"
                  name="stateCourse"
                  required
                  onChange={this.handleChange}
                >
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>

              <div className="form-group col-md-3">
                <label>Tipo de estilo</label>
                <select
                  id="input2"
                  className="form-control shadow-sm"
                  name="style"
                  required
                  onChange={this.handleChange}
                >
                  <option>primary</option>
                  <option>secondary </option>
                  <option>success</option>
                  <option>danger</option>
                  <option>warning</option>
                  <option>info </option>
                  <option>light</option>
                  <option>dark </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Etiquetas</label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="inputAddress2"
                placeholder="ej: programacion, logica "
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="btn-add btn button-success-duvo col-sm-3 btn-block ml-auto btn-sm "
            >
              Crear Curso
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CourseAdd;

//-----------------------------------------

class Title extends Component {
  render() {
    return (
      <div className="text-center p-2  ">
        <h1>{this.props.name}</h1>
        <hr />
      </div>
    );
  }
}
