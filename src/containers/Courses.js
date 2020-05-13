import React from "react";
import CourseP from "../components/Course/CourseP";

export function CoursesContainer() {
  return (
    <>
      <div className="parallax">
        <h1><i class="fab fa-slack-hash"></i> Cursos</h1>
      </div>
      <div
        className="container"
        style={{
          paddingTop: "3vh",
        }}
      >
        <div className="row align-items-start">
          <CourseP />
          <CourseP />
          <CourseP />
          <CourseP />
          <CourseP />
        </div>
      </div>
    </>
  );
}
