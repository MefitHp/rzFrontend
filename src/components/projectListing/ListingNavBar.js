import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField, FlatButton} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './Listing.css';
import ActionHome from 'material-ui/svg-icons/action/home';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import firebase from '../../Api/firebase';




class ListingNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photoURL:false,
            value: null,
            ancho: document.documentElement.clientWidth < 600
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.changeCategory(value);
    };

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({photoURL:user.photoURL});
            } else {
                this.setState({photoURL:false});
            }
        });
    }


    render(){
        const {photoURL} = this.state;
        const {history} = this.props;
        return(
            <Toolbar
                style={{
                    backgroundColor:colors.pink,
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

                      
                        <img 
                        onTouchTap={()=>{
                            history.push('/');
                        }}
                        style={styles.logo} src={logo} />
                       
                    < DropDownMenu
                       labelStyle={{color:'white'}}
                       selectedMenuItemStyle={{color:colors.pink}}
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
                        underlineFocusStyle={{borderColor:'white'}}
                        inputStyle={{color:'white'}}
                        hintStyle={{color:'white'}}
                        hintText="Buscar"
                        fullWidth={false}
                        onChange={this.props.onChangeSearch}
                        />

                {photoURL && <Avatar 
                    style={{cursor:'auto'}} 
                    src={photoURL} />}
                            {photoURL && <IconMenu
                        iconButtonElement={
                            <IconButton 
                               iconStyle={{color:'white'}}
                               touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <Link to="/userprofile/wall">
                            <MenuItem primaryText="Tu perfil" />
                        </Link>
                        <MenuItem 
                        primaryText="Cerrar Sesión"
                        onTouchTap={()=>firebase.auth().signOut()}/>
                    </IconMenu>}
                    
                    {!photoURL && <FlatButton 
          label="Entrar"
          labelStyle={{color:'white'}}
          hoverColor={colors.purple}
           onTouchTap={()=>history.push('/login?next=/explorar')}
            />}
                    
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

const iconStyles = {
    marginRight: 16,
    color: 'white'

};

const styles = {
     logo:{
        backgroundColor:'white',
        width:'128px',
        cursor:'pointer',
         marginLeft:'24px'
    }
}

export default ListingNavBar;
