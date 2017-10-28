import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import {UserProfilePage} from './components/userProfile/UserProfilePage';
import CreateProject from './components/createProject/CreateProject';
import ProjectsPage from './components/projectListing/ProjectsPage';
//import ProjectManagerContainer from './components/projectManager/ProjectManagerContainer';
import {ManagerPage} from './components/projectManager/ProjectManagerContainer';
import LoginPage from './components/login/LoginPage';
import DetailPage from './components/projectListing/DetailPage';
import AdminPanel from './components/adminPanel/adminPanelPage';
import PublicProfile from './components/publicProfile/publicProfilePage';
import Cart from './components/payments/Cart';
import ChatPage from './components/chat/ChatPage';
import imgerror from './assets/404.png';

const noMatch = () => (
  <div style={{
      backgroundImage: 'url('+imgerror+')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh'}}>
  </div>);
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/login" component={LoginPage}/>
    <Route path="/new" component={CreateProject}/>
    <Route path="/explorar" component={ProjectsPage}/>
    <Route path="/userprofile" component={UserProfilePage}/>
    <Route exact path="/new" component={CreateProject}/>
    <Route path={`/manage/:projectId`} component={ManagerPage}/>
    <Route path="/detail/:projectId" component={DetailPage}/>
    <Route path="/users/:userId" component={PublicProfile}/>
    <Route path="/admin" component={AdminPanel}/>
    <Route path="/cart/:rewardId" component={Cart}/>
    <Route path="/chat" component={ChatPage}/>

    <Route component={noMatch}/>
  </Switch>
);

export default Routes;
