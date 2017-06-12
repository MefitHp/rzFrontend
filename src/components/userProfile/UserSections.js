import React, {Component} from 'react';
import UserWall from './UserWall';
import UserProjects from './UserProjects';
import UserInputs from './UserInputs';
import { Route } from 'react-router-dom'


class UserSections extends Component{

    userProjects = () => {
    return (
        <UserProjects projects={this.props.projects} />
    );
};

  render(){
    return(
      <div>
         <Route path={`/userprofile/:profileId/wall`} component={UserWall}/>
         <Route path={`/userprofile/:profileId/projects`} render={this.userProjects}/>
         <Route path={`/userprofile/:profileId/inputs`} component={UserInputs}/>
      </div>
    );
  }
}


export default UserSections;
