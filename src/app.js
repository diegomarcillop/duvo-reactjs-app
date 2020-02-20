import React, { Component } from 'react';
 import Chat from './components/chat';
import Class from './components/Class/class';
import ClassAdd from './components/Class/classAdd';
 import CourseAdd from './components/Course/courseAdd';
 import LoginCo from './components/Login/LoginContainer';
import RegisterCo from './components/Register/registerContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/Navegation/navegation'
import Carousel from './components/carousel';
import Searcher from './components/Seacher/searcher';
import Footer from './components/Footer/footer';
 import ShowModule from './components/showModules';
import Home from './components/Home/home';
import Course from './components/CourseStudent/course';
import CourseInfo from './components/Course/courseInfo';
import courses from './components/Course/coursesIndex';
import Courses from './components/Course/coursesIndex';
import CoursesIndex from './components/Course/coursesIndex';
import Modal from './components/Modal/modal';
import ModuleAdd from './components/Module/moduleAdd';
import CourseStudent from './components/CourseStudent/courseStudent';
 
function App() {
    
        return (
            <div>
                <Router>
                    <Route path="/index" exact>
                        <Navegation/>
                        <Home/>
                     </Route>

                    <Route path="/" exact>
                        <Navegation />
                        <Carousel />
                        <Searcher />
                        <CoursesIndex title="Todos los cursos de" titleB="DUVO"/>
                         <Footer />
                    </Route>

                    <Route path="/signup" exact>
                        <img src="/img/portada02.svg" className="imageLogin" alt="" />
                        <Navegation />
                        <RegisterCo />
                        <Chat />
                    </Route>

                    <Route path="/signin" exact>
                        
                        <img src="/img/portada01.svg" className="imageLogin_" alt="" />
                        <Navegation />
                        <LoginCo />
                        <Chat />

                    </Route>

                    <Route path="/course/add" exact>
                        <Navegation/>
                        <CourseAdd />
                    </Route>

                    <Route path="/course/index" exact>
                        <Navegation/>
                       <CourseInfo size="col-sm-8 central-content p-1"/>
                    </Route>

                    <Route path="/course" exact>
                        <Navegation/> 
                        <CoursesIndex/>
                     </Route>

                    <Route path="/class" exact>
                    <Navegation/> 
                        <Class />
                    </Route>

                    <Route path="/class/add" exact>
                    <Navegation/>

                        <ClassAdd />
                    </Route>
 
                    <Route path="/student/cursos/" exact>
                    <Navegation/> 
                        <CourseStudent />
                         
                    </Route> 

                    <Route path="/module/add" exact>
                        <Navegation/>
                        <ModuleAdd/>
                    </Route>

                    <Route path="/modules" exact>
                        
                        <ShowModule/>
                    </Route>

                    <Modal/>
                </Router>
            </div>
        )  
}

export default App;