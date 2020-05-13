import React from "react";
import LoginContainer from "../containers/Login";
import Help from "../components/Help/Help";
import Navegation from "../containers/Navegation";
import { useRouteMatch } from "react-router-dom";
import Register from "../containers/Register";

export default function Auth() {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <>
      <Navegation />
      {url ==="/signin" ? <LoginContainer /> : <Register />}
      <Help />
    </>
  );
}
