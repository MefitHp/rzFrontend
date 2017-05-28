import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';

import UserProfile from './components/userProfile/UserProfilePage';

import CreateProject from './components/createProject/CreateProject';
import ProjectManagerContainer from './components/projectManager/ProjectManagerContainer';


const Routes = () => (
  <Switch>
      <Route exact path="/" component={HomePage} />


      <Route path="/userprofile" component={UserProfile}/>


      <Route exact path="/new" component={CreateProject} />


      <Route path={`/manage/:projectId`} component={ProjectManagerContainer} />


  </Switch>
);

export default Routes;