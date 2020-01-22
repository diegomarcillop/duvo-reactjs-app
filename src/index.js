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

const Root = (
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
)


ReactDOM.render(Root, document.getElementById('root'));

 