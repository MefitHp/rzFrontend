/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/bliss.jpg';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';






class NavBar extends React.Component {
    constructor(){
        super();

        this.state = {
            open: false,

        }
    }
    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    goBack = () => {
      this.props.history.push('/explorar')
    };


    render(){
        return (
            <div>
                <AppBar
                    title={<Link style={{textDecoration:'none'}} to="/">CrowdFounding Reto Zapopan</Link>}
                    style={{backgroundColor:'white', color:'black'}}
                    iconElementLeft={
                        <IconButton>
                            <HardwareKeyboardArrowLeft
                                color="grey"
                            />
                        </IconButton>
                    }
                    onLeftIconButtonTouchTap={this.goBack}
                    iconElementRight={
                        <ToolbarGroup firstChild={true}>
                            {/*<Link to="/new">*/}
                                {/*<FlatButton style={{color:'white'}} label="Publica tu proyecto" />*/}
                            {/*</Link>*/}
                            <ToolbarSeparator />
                            {/*<FlatButton label="Explorar" />*/}

                          <Avatar src={logo} />
                            <IconMenu
                                iconButtonElement={
                                    <IconButton touch={true}>
                                        <NavigationExpandMoreIcon />
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
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Toolbar style={{backgroundColor:'red'}}>
                        <ToolbarTitle text="Menú" />
                    </Toolbar>
                    <Link to="/">
                        <MenuItem onTouchTap={this.handleClose}>Inicio</MenuItem>
                    </Link>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }

}


NavBar.propTypes = {};

export default NavBar;
