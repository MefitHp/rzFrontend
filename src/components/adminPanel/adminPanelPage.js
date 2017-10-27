import React, {Component} from 'react';
import { MenuItem, Drawer } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Person from 'material-ui/svg-icons/action/perm-identity';
import ActionStars from 'material-ui/svg-icons/action/stars';
import AdminSections from './adminSections';
//import api from '../../Api/Django';
import toastr from 'toastr';

import AppBar from 'material-ui/AppBar';
import './adminPanelPage.css'



import { Link, NavLink } from 'react-router-dom';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
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
                    <AppBar
                        style={{position:'fixed'}}
                        title={<Link style={{textDecoration:'none',color:'white'}} to="/">Administración</Link>}
                        onLeftIconButtonTouchTap={this.handleToggle}
                        iconElementRight={
                            <ToolbarGroup firstChild={true}>
                                <IconMenu
                                    iconButtonElement={
                                        <IconButton touch={true}>
                                            <NavigationMoreVert color="white" />
                                        </IconButton>
                                    }
                                >
                                    <Link
                                        style={{textDecoration:'none'}}
                                        to="/userprofile/wall">
                                        <MenuItem primaryText="Tu perfil" />
                                    </Link>
                                    <MenuItem primaryText="Tus proyectos" />
                                </IconMenu>

                            </ToolbarGroup>

                        }
                    />
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
