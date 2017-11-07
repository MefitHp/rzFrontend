import React, {Component} from 'react';
import { MenuItem, Drawer } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Person from 'material-ui/svg-icons/action/perm-identity';
import ActionStars from 'material-ui/svg-icons/action/stars';
import AdminSections from './adminSections';
//import api from '../../Api/Django';
import toastr from 'toastr';


import './adminPanelPage.css'



import {NavLink } from 'react-router-dom';
import {checkPermission} from '../../redux/actions/userActions';
import {store} from '../../index';
import MainLoader from "../common/MainLoader";



class AdminPanel extends Component{
  constructor(){
      super();
      this.state = {
          open: true,
          permiso:false
      }
  }

  componentWillMount(){
    store.subscribe(this.checkUser);
  }

  checkUser = () => {
      const {user} = store.getState();
      console.log(user);
      if(Object.keys(user).length > 0){
          if (!user.profile.is_staff){
              toastr.warning("Lo siento, no tienes permiso para entrar aquí");
              this.props.history.push("/");
          }else{
              this.setState({permiso:true});
          }
      }

  };


  handleToggle = () => {
      this.setState({
          open: !this.state.open
      });
  };
  render(){
      const {permiso} = this.state;
    return(

        <div>
            {!permiso ? <MainLoader/> :

                <div>

                    <div className={this.state.open ? 'adminSections adminPanelOpen' : 'adminSections adminPanelClose'}>
                        <AdminSections open={this.state.open} />
                    </div>
                    <Drawer
                        width={200}
                        open={this.state.open}
                        containerStyle={{marginTop:'64px'}}
                        onRequestChange={this.props.handleToggle}

                    >
                        <Subheader>Menú</Subheader>
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

            }
        </div>

    );
  }
}

export default AdminPanel;
