import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/bliss.jpg';
import {Link} from 'react-router-dom';
import './Listing.css';
import ActionHome from 'material-ui/svg-icons/action/home';



class ListingNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            ancho: document.documentElement.clientWidth < 600
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.changeCategory(value);
    };


    render(){
        return(
            <Toolbar
                style={{
                    backgroundColor:'white',
                    overflow:'hidden',
                    cursor:'pointer',
                    position:'fixed',
                    zIndex:999,
                    width:'100%'
                }}
                className="oculto"
            >
                <ToolbarGroup
                    firstChild={true}>
                    <ActionHome
                        color="gray"
                        style={{marginLeft:30}}
                        onTouchTap={()=>this.props.history.push('/')}
                    />

                        <ToolbarTitle
                        style={{marginLeft: '30px'}}
                        text="Categorías: "/>
                    < DropDownMenu
                        id="categoria"
                        value={this.state.value}
                        onChange={this.handleChange}>
                        <MenuItem value={null} primaryText="Todos" />
                        <MenuItem value={'tecnologia'} primaryText="Tecnología" />
                        <MenuItem value={3} primaryText="Innovación" />
                        <MenuItem value={4} primaryText="Sociedad" />
                        <MenuItem value='salud' primaryText="Salud" />
                        <MenuItem value={6} primaryText="Vivienda" />
                        <MenuItem value='deporte' primaryText="Deporte" />
                        </DropDownMenu>
                        </ToolbarGroup>
                        <ToolbarGroup>
                        <ActionSearch style={iconStyles}/>
                        <TextField
                        hintText="Buscar"
                        fullWidth={false}
                        onChange={this.props.onChangeSearch}
                        />

                    <Avatar src={logo} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <Link to="/userprofile/wall">
                            <MenuItem primaryText="Tu perfil" />
                        </Link>
                        <MenuItem primaryText="Tus proyectos" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const iconStyles = {
    marginRight: 14,
    color: 'grey'

};

export default ListingNavBar;
