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
          permiso:false,
          user:{}
      }
  }

  componentWillMount(){
    //store.subscribe(this.checkUser);
    this.checkUser()
  }

  checkUser = () => {
      const user = JSON.parse(localStorage.getItem('user'))
    if (!user || user.role !== "ADMIN"){
        toastr.warning("Lo siento, no tienes permiso para entrar aquí");
        this.props.history.push("/");
    }else{
        this.setState({permiso:true, user});
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
                        containerStyle={{marginTop:'55px'}}
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

                    <h2>
                        BlisS
                    </h2>


                </div>

            }
        </div>

    );
  }
}

export default AdminPanel;
