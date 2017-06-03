import React, { Component } from 'react';
import { MenuItem, Drawer } from 'material-ui';
import {  NavLink } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionOfflinepin from 'material-ui/svg-icons/action/offline-pin';
import ActionStars from 'material-ui/svg-icons/action/stars';




class ControlBar extends Component {
    render(){
        const { elMatch, project, open, ancho } = this.props;
        return(

                    <Drawer
                        width={200}
                        open={open}
                        containerStyle={{marginTop:64}}
                        docked={!ancho}
                        onRequestChange={this.props.handleToggle}

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
                    </Drawer>

        );
    }
}

export default ControlBar;