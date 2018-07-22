import React, { Component } from 'react';
import { MenuItem, Drawer } from 'material-ui';
import {  NavLink } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionOfflinepin from 'material-ui/svg-icons/action/offline-pin';
import ActionStars from 'material-ui/svg-icons/action/stars';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import ActionInput from 'material-ui/svg-icons/action/input';
import FindInPage from 'material-ui/svg-icons/action/find-in-page';




class ControlBar extends Component {
    render(){
        const { elMatch, project, open, ancho } = this.props;
        return(

                    <Drawer
                        width={200}
                        open={open}
                        containerStyle={{marginTop:56}}
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
                        {/* <NavLink
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/actualizaciones`}>
                            <MenuItem leftIcon={<ActionUpdate />}>
                                Actualizaciones
                            </MenuItem>
                        </NavLink> */}
                        <NavLink
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/aportaciones`}>
                            <MenuItem leftIcon={<ActionInput />}>
                                Aportaciones
                            </MenuItem>
                        </NavLink>
                        <NavLink
                            onTouchTap={this.props.handleToggle}
                            activeClassName="active"
                            style={{textDecoration:'none'}} to={`${elMatch.url}/preview`}>
                            <MenuItem leftIcon={<FindInPage />}>
                                Vista Previa
                            </MenuItem>
                        </NavLink>
                    </Drawer>

        );
    }
}

export default ControlBar;