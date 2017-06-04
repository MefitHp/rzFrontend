import React, {Component} from 'react';
import { MenuItem, Drawer } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionOfflinepin from 'material-ui/svg-icons/action/offline-pin';
import Person from 'material-ui/svg-icons/action/perm-identity';
import ActionStars from 'material-ui/svg-icons/action/stars';
import AdminSections from './adminSections';
import { NavLink} from 'react-router-dom';
import './adminPanelPage.css'



class AdminPanel extends Component{
  constructor(){
      super();
      this.state = {
          open: true,
      }
  }

  handleToggle = () => {
      this.setState({
          open: !this.state.open
      });
  };
  render(){
    return(
      <div>
        <button
          onClick={this.handleToggle}>Menu</button>
        <div className={this.state.open ? 'adminSections adminPanelOpen' : 'adminSections adminPanelClose'}>
          <AdminSections open={this.state.open}/>
        </div>
        <Drawer
            width={200}
            open={this.state.open}
            containerStyle={{marginTop:20}}

            onRequestChange={this.props.handleToggle}

            >
            <Subheader>Que onda</Subheader>
                <NavLink to="/admin/users" style={{textDecoration:'none'}}>
                  <MenuItem leftIcon={<Person />}>
                      Usuarios
                  </MenuItem>
                </NavLink>

                <NavLink to="/admin/projects" style={{textDecoration:'none'}}>
                  <MenuItem leftIcon={<ActionAssignment />}>
                      Proyectos
                  </MenuItem>
                </NavLink>

                <NavLink to="/admin/inputs" style={{textDecoration:'none'}}>
                  <MenuItem leftIcon={<ActionStars />}>
                      Aportaciones
                  </MenuItem>
                </NavLink>

        </Drawer>
      </div>
    );
  }
}

export default AdminPanel;
