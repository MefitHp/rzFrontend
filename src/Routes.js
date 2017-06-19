import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import UserProfile from './components/userProfile/UserProfilePage';
import CreateProject from './components/createProject/CreateProject';
import ProjectsPage from './components/projectListing/ProjectsPage';
import ProjectManagerContainer from './components/projectManager/ProjectManagerContainer';
import LoginPage from './components/login/LoginPage';
import DetailPage from './components/projectListing/DetailPage';
import AdminPanel from './components/adminPanel/adminPanelPage';
import PublicProfile from './components/publicProfile/publicProfilePage';




const noMatch = () => (<h1>404 papud!</h1>);

const Routes = () => (
  <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/new" component={CreateProject} />
        <Route path="/explorar" component={ProjectsPage} />
        <Route path="/userprofile" component={UserProfile}/>
        <Route exact path="/new" component={CreateProject} />
        <Route path={`/manage/:projectId`} component={ProjectManagerContainer} />
        <Route path="/detail/:projectId" component={DetailPage} />
        <Route path="/users/usuario" component={PublicProfile} />
        <Route path="/admin" component={AdminPanel} />



          <Route component={noMatch} />


  </Switch>
);

export default Routes;
