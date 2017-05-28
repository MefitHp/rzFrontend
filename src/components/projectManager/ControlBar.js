import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import { MenuItem } from 'material-ui';
import {  NavLink } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionOfflinepin from 'material-ui/svg-icons/action/offline-pin';
import ActionStars from 'material-ui/svg-icons/action/stars';



class ControlBar extends Component {
    render(){
        const { elMatch, project } = this.props;
        return(

                    <Menu
                        autoWidth={true}
                        open={true}
                    >
                        <Subheader>{project.name}</Subheader>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/basicos`}>
                            <MenuItem leftIcon={<ActionOfflinepin />}>
                                Datos Básicos
                            </MenuItem>
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/descripcion`}>
                            <MenuItem leftIcon={<ActionAssignment />}>
                                Descripción
                            </MenuItem>
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/recompensas`}>
                            <MenuItem leftIcon={<ActionStars />}>
                                Recompensas
                            </MenuItem>
                        </NavLink>
                    </Menu>

        );
    }
}

export default ControlBar;