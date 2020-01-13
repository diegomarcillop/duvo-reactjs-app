import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/navegation'
import Carousel from './components/carousel'
import Searcher from './components/searcher'
import Courses from './components/courses';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import CourseAdd from './components/courseAdd'
import CourseInfo from './components/courseInfo';
import IndexUser from './components/indexUser';
import Chat from './components/chat';
 import Class from './components/class';



function App() {
  return (
    <Router>
      <Navegation />
      <Route path="/" exact component={Carousel} />
      <Route path="/" exact component={Searcher} />
      <Route path="/" exact component={Courses} />
      <Route path="/" exact component={Footer} />
      <Route path="/" exact component={Chat} />
      <Route path="/signin" exact component={Login}/>
      <Route path="/signin" exact component={Chat} />

      <Route path="/class" exact component={Class} />
      <Route path="/class" exact component={Chat} />
      
      

      <Route path="/signup" exact component={Register}/>
      <Route path="/signup" exact component={Chat} />
 
      <Route path="/index" exact component={IndexUser}/>
      <Route path="/index" exact component={Courses}/>
      


      <Route path="/course/add" exact component={CourseAdd}/>
      <Route path="/module" exact component={CourseInfo}/> 
    </Router>
  );
}

export default App;
