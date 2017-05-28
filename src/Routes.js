import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';

import UserProfile from './components/userProfile/UserProfilePage';
import UserWall from './components/userProfile/UserWall';
import UserProjects from './components/userProfile/UserProjects';

import CreateProject from './components/createProject/CreateProject';


const Routes = () => (
  <Switch>
      <Route exact path="/" component={HomePage} />

      <Route path="/userprofile" component={UserProfile}>
        <Route path="/muro" component={UserWall}/>
        <Route path="/proyectos" component={UserProjects}/>
      </Route>

      <Route exact path="/new" component={CreateProject} />


  </Switch>
);

export default Routes;
