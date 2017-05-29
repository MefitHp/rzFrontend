import React, {Component} from 'react';
import UserWall from './UserWall';
import UserProjects from './UserProjects';
import UserInputs from './UserInputs';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom'

class UserSections extends Component{
  render(){
    return(
      <div>
         <Route path={`/userprofile/wall`} component={UserWall}/>
         <Route path={`/userprofile/projects`} component={UserProjects}/>
         <Route path={`/userprofile/inputs`} component={UserInputs}/>
      </div>
    );
  }
}

export default UserSections;
