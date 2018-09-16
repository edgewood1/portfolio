import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import Info from './components/info';
import Blog from './components/blog';
import PostSet from './components/postSet';
import Post from './components/post';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

// Grabs the Routes
// var routes = require('./config/routes');

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={Info} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/postSet/:id' component={PostSet}  />
            <Route exact path='/post/:id' component={Post}  />
        </div>
    </BrowserRouter>, 
    
    
    document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
