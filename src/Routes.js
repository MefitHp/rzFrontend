import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import UserProfile from './components/userProfile/UserProfilePage';

const Routes = () => (
  <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/userprofile" component={UserProfile}/>
  </Switch>
);

export default Routes;
