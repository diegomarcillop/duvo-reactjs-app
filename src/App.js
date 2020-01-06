import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/navegation'
import Carousel from './components/carousel'
import Searcher from './components/searcher'
import Courses from './components/courses';
import Footer from './components/footer';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Navegation />
      <Route path="/" exact component={Carousel} />
      <Route path="/" exact component={Searcher} />
      <Route path="/" exact component={Courses} />
      <Route path="/" exact component={Footer} />
      <Route path="/signin" exact component={Login}/>
    </Router>
  );
}

export default App;
