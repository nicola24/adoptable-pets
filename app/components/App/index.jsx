import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from '../Homepage';
import Dashboard from '../Dashboard';
import NotFoundPage from '../NotFoundPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
