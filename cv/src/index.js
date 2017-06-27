import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App/App';
import About from './components/About/About';
import Content from './components/Content/Content';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('root')
);
