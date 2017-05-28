import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';


class ControlBar extends Component {
    render(){
        const { elMatch, project } = this.props;
        return(
            <Drawer
                width={200}
                openSecondary={false}
                open={true}
                containerStyle={{marginTop:64}}
            >
                <Subheader>{project.name}</Subheader>
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