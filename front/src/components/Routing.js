import React from 'react';
import Landing from './Landing';
import App from './App';
import NotFound from './NotFound';
import { Route, Router } from 'react-router-dom';

const Routing = () => {
  return(
      <Router>
        <Route exact path='/' component={Landing} />
        <Route path='/restaurant/:restaurantId' component={App} />
        <Route component={NotFound} />
      </Router>
  );
};

export default Routing;