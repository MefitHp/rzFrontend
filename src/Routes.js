import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import CreateProject from './components/createProject/CreateProject';

const Routes = () => (
  <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/new" component={CreateProject} />
  </Switch>
);

export default Routes;
