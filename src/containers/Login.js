import React, { useState } from "react";
import Axios from "axios";
import AuthElements from "../components/AuthElements/authElement";
import { Redirect, redirect,  RedirectWithStatus } from "react-router-dom";
import { connect  } from 'react-redux';
import { saveToken, setUser } from '../redux/actions';

function Login(props) {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    auth: false
  });

  const outputEvent = async evt => {
    evt.preventDefault();
    await setUser({
      ...user,
      [evt.target.name]: evt.target.value
    });
  };

  const apiData = async () => {
    await Axios.post("http://localhost:4000/auth/signin", {
      user: {
        userName: user.userName,
        password: user.password
      }
    })
      .then(({ data }) => {
        if (data.status === 200) {
          let { token, user } = data.data;
          props.saveToken(token);
          props.setUser(user);   
        } 
      })
      .catch(err => {
        console.log(err);
      });
  };

  const OnClick = event => {
    event.preventDefault();
    apiData();
  };

  if (user.auth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      {props.token}
      <AuthElements methodData={outputEvent} handleSubmit={OnClick} />
    </div>
  );
}

const  mapStateToProps = (state) => {
  return{
    token: state.token,
    user: state.user,
  }
}

const mapDispatchToProps = {
  saveToken, 
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
