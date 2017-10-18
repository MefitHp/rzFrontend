import React, {Component} from 'react';
import { Route} from 'react-router-dom';

import AdminProjects from './adminProjects';
import AdminUsers from './adminUsers';
import AdminInputs from './adminInputs';
import ValidateProject from './validateProject';


class AdminSections extends Component{
  adminProjects = () => {
    return(
      <AdminProjects open={this.props.open} match={this.props.match}/>
    );
}
    adminUsers = () => {
      return(
        <AdminUsers open={this.props.open}/>
      );
  }
//   editProject = () => {
//     return(
//       <ValidateProject
//         open={this.props.open}
//         />
//     );
// }

  render(){


    return(
      <div>
           <Route path={`/admin/users`} render={this.adminUsers}/>
           <Route path={`/admin/projects`} render={this.adminProjects}/>
           <Route path={`/admin/inputs`} component={AdminInputs}/>
           <Route path="/admin/edit/:id" component={ValidateProject} />
           <Route exact path="/admin" render={this.adminUsers}/>

      </div>
    );
  }
}

export default AdminSections;
