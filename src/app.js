import React, { Component } from 'react';
 import Chat from './components/chat';
import Class from './components/Class/class';
import ClassAdd from './components/classAdd';
 import CourseAdd from './components/courseAdd';
import ModuleAdd from './components/moduleAdd';
import LoginCo from './components/Login/LoginContainer';
import RegisterCo from './components/Register/registerContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/Navegation/navegation'
import Carousel from './components/carousel';
import Searcher from './components/Seacher/searcher';
import Footer from './components/Footer/footer';
 import ShowModule from './components/showModules';
import Home from './components/Home/home';

class App extends Component {
    render() {
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
                         <Footer />
                    </Route>

                    <Route path="/signup" exact>
                        <img src="/img/portada02.svg" className="imageLogin" alt="" />
                        <Navegation />
                        <RegisterCo />
                        <Chat />
                    </Route>

                    <Route path="/signin" exact>
                        
                        <img src="/img/portada01.svg" className="imageLogin" alt="" />
                        <Navegation />
                        <LoginCo />
                        <Chat />

                    </Route>

                    <Route path="/course/add" exact>
                        <CourseAdd />
                    </Route>


                    <Route path="/class" exact>
                        <Class />
                    </Route>

                    <Route path="/class/add" exact>
                        <ClassAdd />
                    </Route>
 

                    <Route path="/module/add" exact>
                        <ModuleAdd />
                    </Route>

                    <Route path="/modules" exact>
                        <ShowModule />
                    </Route>


                </Router>
            </div>
        )
    }
}

export default App;