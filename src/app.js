import React, { Component } from "react";
import Class from "./components/Class/class";
import ClassAdd from "./components/Class/classAdd";
import CourseAdd from "./components/Course/courseAdd";
import RegisterCo from "./components/Register/registerContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navegation from "./containers/NavegationContainer";
import Carousel from "./components/Carousel/Carousel";
import Searcher from "./components/Seacher/searcher";
import Footer from "./components/Footer/footer";
import ShowModule from "./components/showModules";
import Home from "./components/Home/home";
import CourseInfo from "./components/Course/courseInfo";
import CoursesIndex from "./components/Course/coursesIndex";
import ModuleAdd from "./components/Module/moduleAdd";
import CourseStudent from "./components/CourseStudent/courseStudent";
import Questionary from "./components/Questionary/questionary";
import Exercises from "./components/Exercises/exercises";
import { Helmet } from "react-helmet";
import About from "./components/About/about";
import Error404 from "./components/error404";
import LoginContainer from "./containers/LoginContainer";
import Help from "./components/Help/Help";
import { CoursesContainer } from "./containers/CoursesContainer";
import Pack from "./components/Prices/Pack";
import Prices from "./components/Prices/Prices";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Helmet>
        <title>Duvo</title>
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navegation /> 
            <Carousel />
            <Prices/> 
      <Contact/> 
          </Route>

          <Route path="/signup" exact>
            <Navegation />
            <RegisterCo />
            <Help />
          </Route>

          <Route path="/signin" exact>
            <Navegation />
            <LoginContainer />
            <Help />
          </Route>

          <Route path="/courses">
            <Navegation />
            <CoursesContainer />
          </Route>

          <Route path="/about" exact>
            <img src="/img/about2.svg" className="imageLogin" alt="" />
            <Navegation />
            <About />
          </Route>

          <Route path="/index" exact>
            <Navegation />
            <Home />
          </Route>

          <Route path="/course/add" exact>
            <Navegation />
            <CourseAdd />
          </Route>

          <Route path="/course/index" exact>
            <Navegation />
            <CourseInfo size="col-sm-8 central-content p-1" />
          </Route>

          <Route path="/course" exact>
            <Navegation />
            <CoursesIndex />
          </Route>

          <Route path="/class" exact>
            <Navegation />
            <Class />
          </Route>

          <Route path="/class/add" exact>
            <Navegation />

            <ClassAdd />
          </Route>

          <Route path="/student/cursos/" exact>
            <Navegation />
            <CourseStudent />
          </Route>

          <Route path="/module/add" exact>
            <Navegation />
            <ModuleAdd />
          </Route>

          <Route path="/modules" exact>
            <ShowModule />
          </Route>

          <Route path="/questionary" exact>
            <Navegation />
            <Questionary />
          </Route>

          <Route path="/exercises" exact>
            <Navegation />
            <Exercises />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
