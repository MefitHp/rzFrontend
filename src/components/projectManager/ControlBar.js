import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { AppBar, MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';


class ControlBar extends Component {
    render(){
        const { elMatch } = this.props;
        return(
            <Drawer
                width={200}
                openSecondary={true}
                open={true} >
                <AppBar title="AppBar" />
                <Link to={`${elMatch.url}/basicos`}>
                    <MenuItem>
                        Datos Básicos
                    </MenuItem>
                </Link>
                <Link to={`${elMatch.url}/descripcion`}>
                    <MenuItem>
                        Descripción
                    </MenuItem>
                </Link>
            </Drawer>
        );
    }
}

export default ControlBar;