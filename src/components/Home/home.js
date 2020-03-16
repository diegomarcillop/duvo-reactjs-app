import React, { Component } from "react";
import Searcher from "../Seacher/searcher";
import CourseStudent from "../CourseStudent/courseStudent";
function Home(props) {
  console.log(props);
  return (
    <div>
      {({ user }) => (
        <div>
          <p>{user.name}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
