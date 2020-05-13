import React from "react";
import { useRouteMatch } from "react-router-dom";
import Exercises from "../components/Exercises/Exercises";
import Navegation from "../containers/Navegation";

export default function Evaluation() {
  const { url } = useRouteMatch();

  const options = () => {
    switch (url) {
      case "/exercises":
        return <Exercises />;
      case "/excercises/add":
        return <></>;
      default:
      //
    }
  };

  return (
    <>
      <Navegation />
      {options()}
    </>
  );
}
