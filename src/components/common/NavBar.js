/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import { ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/bliss.jpg';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';

import './NavBar.css';





class NavBar extends React.Component {


    render(){
        return (
            <div>
                <AppBar
                    title={<Link style={{textDecoration:'none',color:'white'}} to="/">CrowdFounding Reto Zapopan</Link>}
                    onLeftIconButtonTouchTap={this.props.handleToggle}
                    iconElementRight={
                        <ToolbarGroup firstChild={true}>
                            <Link to="/new">
                                <FlatButton style={{color:'white'}} label="Publica tu proyecto" />
                            </Link>
                            <ToolbarSeparator />
                            <FlatButton label="Explorar" />
                            <Avatar src={logo} />
                            <IconMenu
                                iconButtonElement={
                                    <IconButton touch={true}>
                                        <NavigationExpandMoreIcon />
                                    </IconButton>
                                }
                            >
                                <MenuItem primaryText="Tu perfil" />
                                <MenuItem primaryText="Tus proyectos" />
                            </IconMenu>
                        </ToolbarGroup>

                    }
                />
                <Drawer
                    width={200}
                    open={this.props.open}
                    docked={false}
                    containerStyle={{marginTop:64}}
                    onRequestChange={this.props.handleToggle}

                >

                    <NavLink
                        activeClassName='active'
                        style={{textDecoration:'none'}}
                        to="/">
                        <MenuItem
                            onTouchTap={this.props.handleToggle}
                            leftIcon={<ActionHome/>}
                        >
                            Inicio
                        </MenuItem>
                    </NavLink>
                    <NavLink
                        activeClassName='active'
                        style={{textDecoration:'none'}}
                        to="/explorar">
                        <MenuItem
                            onTouchTap={this.props.handleToggle}
                            leftIcon={<ActionViewModule/>}
                        >
                            Explorar
                        </MenuItem>
                    </NavLink>
                </Drawer>
            </div>
        );
    }

}

NavBar.propTypes = {};

export default NavBar;