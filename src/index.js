import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/Navegation/navegation'
 import Carousel from './components/carousel';
import Searcher from './components/Seacher/searcher';
import Footer from './components/Footer/footer';
import Courses from './containers/courses';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login/login';
import Chat from './components/chat';
import Class from './components/class';
import ClassAdd from './components/classAdd';
import Register from './components/Register/register';
 
const Root = (
    <Provider store={store}>
        <Router>
           
            <Route path="/" exact>
            <Navegation />
                <Carousel />
                <Searcher />
                <Courses />
                <Footer />
            </Route>

            <Route path="/signup" exact>
                
            <img src="/img/portada02.svg"  className="imageLogin" alt=""/>
            
            <Navegation />

                <Register/>
                <Chat/>
            </Route>

            <Route path="/signin" exact>
                <div >
                    
                    <img src="/img/portada01.svg"  className="imageLogin" alt=""/>
                    
                <Login/>
                <Chat/>
                </div> 
            </Route>

            <Route path="/class" exact>
                <ClassAdd/>
               
            </Route>

        </Router>
    </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));

 