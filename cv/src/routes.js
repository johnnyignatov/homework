// src/routes.js
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App/App';
import Content from './components/Content/Content';


const Routes = (props) => (
  <Router histotu={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/content" component={Content} />
  </Router>
);

export default Routes;
