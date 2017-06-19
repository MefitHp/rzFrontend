/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import { ToolbarGroup } from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/bliss.jpg';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';

import '../common/NavBar.css';





class NavBar extends React.Component {


    render(){
        const {elMatch} = this.props;
        return (
            <div>
                <AppBar
                    style={{position:'fixed'}}
                    title={<Link style={{textDecoration:'none',color:'white'}} to="/">Administración</Link>}
                    onLeftIconButtonTouchTap={this.props.handleToggle}
                    iconElementRight={
                        <ToolbarGroup firstChild={true}>
                            {/*<Link to="/new">*/}
                                {/*<FlatButton style={{color:'white'}} label="Publica tu proyecto" />*/}
                            {/*</Link>*/}
                            {/*<ToolbarSeparator />*/}
                            {/*<FlatButton label="Explorar" />*/}
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
                                <Link
                                    style={{textDecoration:'none'}}
                                    to={`${elMatch.url}/preview`}
                                    >
                                    <MenuItem primaryText="Vista Previa" />
                                </Link>
                            </IconMenu>
                            <Avatar src={logo} />
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