import React, {Component} from 'react';
import UserWall from './UserWall';
import UserProjects from './UserProjects';

class UserSections extends Component{
  render(){
    return(
      <div>
         {this.props.children}
      </div>
    );
  }
}

export default UserSections;
