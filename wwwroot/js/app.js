import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/common/Layout';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);