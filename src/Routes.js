import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import CreateProject from './components/createProject/CreateProject';
import ProjectsPage from './components/projectListing/ProjectsPage';

const Routes = () => (
  <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/new" component={CreateProject} />
      <Route path="/explorar" component={ProjectsPage} />

  </Switch>
);

export default Routes;


