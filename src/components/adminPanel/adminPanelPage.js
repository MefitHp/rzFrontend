import React, {Component} from 'react';
import { MenuItem, Drawer } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import Person from 'material-ui/svg-icons/action/perm-identity';
import ActionStars from 'material-ui/svg-icons/action/stars';
import AdminSections from './adminSections';
import api from '../../Api/Django';
import toastr from 'toastr';

import AppBar from 'material-ui/AppBar';
import './adminPanelPage.css'



import { Link, NavLink } from 'react-router-dom';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';





class AdminPanel extends Component{
  constructor(){
      super();
      this.state = {
          open: true,
      }
  }

  componentWillMount(){
    api.getSelfProfile()
        .then(
            r=>{
                if (!r.data.profile.user.is_staff){
                    console.log(r.data.profile.canPublish);
                    toastr.warning('No eres admin')
                    return this.props.history.push('/');
                }
                return toastr.success('Bienvenido Admin');
            }
        )
        .catch(
            (e) => {
                toastr.error('No pudimos comprobar tus permisos')
                console.log(e);
                // this.props.history.push('/');

            }
        );
  }


  handleToggle = () => {
      this.setState({
          open: !this.state.open
      });
  };
  render(){
    return(
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
            containerStyle={{marginTop:'5.5%'}}

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
    );
  }
}

export default AdminPanel;
