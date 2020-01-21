import React, { Component } from 'react';
import axios from 'axios';

class CourseAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameCourse: "",
            description: "",
            stateCourse: "",
            dateStart: null,
            style: "primary"
        };
    }
    handleChange = (event) => {
         this.setState({
            [event.target.name]: event.target.value
        })

    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const result = await axios.post('http://localhost:4000/course', {
            nameCourse: this.state.nameCourse,
            description: this.state.description,
            stateCourse: this.state.stateCourse,
            dateStart: this.state.dateStart,
            style: this.state.style
        });

        return result;
    }
    render() {
        return (
            <div className="col-sm-8 central-content p-3">
                <div className="container shadow-sm white-background create shadow">
                    <Title name="Creación de un nuevo curso" />
                    <div className="card-body m-2">

                        <form onSubmit={this.handleSubmit} method="POST">
                            <div className="form-row">
                                <div className="form-group col-md-9 ">
                                    <h6>Nombre</h6>
                                    <input type="text" className="form-control form-control-sm fuente-releway " onChange={this.handleChange}
                                        name="nameCourse" autoFocus required />
                                </div>

                                <div className="form-group col-md-3 ">
                                    <h6>Fecha Inicio</h6>
                                    <input className="form-control form-control-sm clr" aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" type="date" name="dateStart" required onChange={this.handleChange} />
                                </div>

                                <div className="form-group col-sm-12">
                                    <h6>Descripcion</h6>
                                    <textarea rows="5" cols="5" className="form-control form-control-sm fuente-releway " name="description"
                                        required onChange={this.handleChange}></textarea>
                                </div>

                                <div className="form-group col-md-6  ">
                                    <h6>Portada [PNG, jpg, SVG] </h6>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1"
                                        name="photo" required />
                                </div>

                                <div className="form-group col-md-3">
                                    <h6>Estado</h6>
                                    <select id="input1" className="form-control form-control-sm"
                                        name="stateCourse" required onChange={this.handleChange}>
                                        <option>Activo</option>
                                        <option>Inactivo</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-3">
                                    <h6>Tipo de estilo</h6>
                                    <select id="input2" className="form-control form-control-sm " name="style"
                                        required onChange={this.handleChange}>
                                        <option >primary</option>
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
                                <h6>Etiquetas</h6>
                                <input type="text" className="form-control" id="inputAddress2"
                                    placeholder="#programacion, #logica, #aprendizaje" />
                            </div>
                            <button type="submit" className="btn btn-info col-sm-2 btn-block ml-auto btn-sm ">Siguiente</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default CourseAdd

//-----------------------------------------

class Title extends Component {
    render() {
        return (
            <div className="text-center p-2  ">
                <h1>{this.props.name}</h1>
                <hr />
            </div>
        )
    }
}