import React from 'react';
import { createStore } from 'redux';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navegation from './components/Navegation/navegation'
import Courses from './components/courses';
import { Provider } from 'react-redux';
 import Carousel from './components/carousel';
import Searcher from './components/Seacher/searcher';
import Footer from './components/Footer/footer';
import rootReducer from './reducers'


const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}> 
      <Router>
        
        <Navegation />
        
        <Route path="/" exact> 
          <Carousel />
          <Searcher />
          <Courses />
          <Footer />
        </Route>

        

      </Router>  
    </Provider>
  );
}

export default App;
