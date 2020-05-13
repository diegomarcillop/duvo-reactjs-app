import React from "react";
import Navegation from "../containers/Navegation";
import { useRouteMatch } from "react-router-dom";
import { CoursesContainer } from "../containers/Courses";
import CourseForm from "../components/Course/Create/CourseForm";
import CourseInfo from "../components/Course/courseInfo";

export default function Courses() {
  const { url } = useRouteMatch();
  
  const options = () => {
    switch (url) {
      case "/courses":
        return <CoursesContainer />;
      case "/course/add":
        return <CourseForm />;
      case "/course/index":
        return  <CourseInfo size="col-sm-8 central-content p-1" />
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
