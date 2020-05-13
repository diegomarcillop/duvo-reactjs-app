import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: "",
      surNames: "",
      email: "",
      birthDate: "",
      state: "Activo",
      userName: "",
      password: "",
      cpassword: "",
    };
    this.OnClick = this.OnClick.bind(this);
    this.outputEvent = this.outputEvent.bind(this);
  }
  outputEvent = async (evt) => {
    evt.preventDefault();
    await this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  OnClick = async (evt) => {
    evt.preventDefault();
    document.getElementsByName("userName")[0].classList.remove("is-invalid");
    const elemento = document.getElementsByName("cpassword");

    if (this.state.password === this.state.cpassword) {
      // if the password is correct a class is removed "is-invalid"
      elemento[0].classList.remove("is-invalid");

      await Axios.post("http://localhost:4000/api/signup", {
        names: this.state.names,
        surNames: this.state.surNames,
        email: this.state.email,
        birthDate: this.state.birthDate,
        state: this.state.state,
        userName: this.state.userName,
        password: this.state.password,
        idRole: 1,
      })
        .then(({ data }) => {
          console.log(data.status);

          switch (data.status) {
            case 201:
              window.location = "/signin";
              break;
            case "DuplicateUser":
              console.log("DUPLICATE");
              document
                .getElementsByName("userName")[0]
                .classList.add("is-invalid");
              break;
            default:
              break;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // if the password is incorrect a class is added "is-invalid"
      elemento[0].classList.add("is-invalid");
    }
    return <Redirect to="/signin" />;
  };

  render() {
    return (
      <div>
        <RegisterForm
          methodData={this.outputEvent}
          handleSubmit={this.OnClick}
        />
      </div>
    );
  }
}
