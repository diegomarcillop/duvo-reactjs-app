import React from "react";
import CardCourse from "../components/CardCourse/CardCourse";
import Navegation from "../containers/Navegation";

export default function MyCourses() {
  return (
    <>
      <Navegation />
      <div className="container p-1">
        <div className="row">
          <CardCourse />
        </div>
      </div>
    </>
  );
}
