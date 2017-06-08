import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import AdminProjects from './adminProjects';
import AdminUsers from './adminUsers';
import AdminInputs from './adminInputs';


class AdminSections extends Component{
  adminProjects = () => {
    return(
      <AdminProjects open={this.props.open}/>
    );
}
    adminUsers = () => {
      return(
        <AdminUsers open={this.props.open}/>
      );
  }

  render(){


    return(
      <div style={{position:'relative'}}>
         <Route path={`/admin/users`} render={this.adminUsers}/>
         <Route path={`/admin/projects`} render={this.adminProjects}/>
         <Route path={`/admin/inputs`} component={AdminInputs}/>
      </div>
    );
  }
}

export default AdminSections;
