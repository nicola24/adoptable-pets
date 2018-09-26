import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Dashboard from '../Dashboard';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
