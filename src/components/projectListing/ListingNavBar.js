import React, { Component } from 'react';
import api from '../../Api/Django';
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
//import ActionHome from 'material-ui/svg-icons/action/home';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import firebase from '../../Api/firebase';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import {withRouter} from 'react-router-dom';




class ListingNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            photoURL:false,
            value: null,
            ancho: document.documentElement.clientWidth < 600
        };
    }
    signOut = () => {
        return firebase.auth().signOut()
            .then(()=>{
                localStorage.removeItem('userInfo');
                localStorage.removeItem('userToken');
                this.props.userActions.signOut();
            });
    };
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


        //probando api
        api.getDonaciones()
            .then(r=>{
                console.log(r)
            });
    }


    render(){
        const imgBck = require('../../assets/space.jpg');
        const {photoURL} = this.state;
        const {history, inList=true} = this.props;
        return(
            <Toolbar
                style={{
                    backgroundImage: `url(${imgBck})`,
                    //backgroundColor:colors.pink,
                    backgroundSize: 'cover',
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

                    <Link to={"/"}>
                        <img
                            style={styles.logo} src={logo}
                        />
                    </Link>
                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>



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
                            <MenuItem
                                onTouchTap={()=>this.props.history.push("/userprofile")}
                                primaryText="Tu perfil" />

                        <MenuItem 
                            primaryText="Cerrar Sesión"
                            onTouchTap={this.signOut}/>
                    </IconMenu>}
                    
                    {!photoURL &&
                        <Link to={"/login?next=/explorar"}>
                            <FlatButton
                                label="Entrar"
                                labelStyle={{color:'white'}}
                                hoverColor={colors.purple}
                                //onTouchTap={()=>history.push('/login?next=/explorar')}
                            />
                        </Link>
                    }
                    
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
         width: 110,
         cursor:'pointer',
         marginLeft:'24px',
         height: 50
    }
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions,dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (ListingNavBar));



// {inList &&
// <ToolbarGroup>
//     < DropDownMenu
//         labelStyle={{color:'white'}}
//         selectedMenuItemStyle={{color:colors.pink}}
//         id="categoria"
//         value={this.state.value}
//         onChange={this.handleChange}>
//         <MenuItem value={null} primaryText="Todos" />
//         <MenuItem value={'tecnologia'} primaryText="Tecnología" />
//         <MenuItem value={3} primaryText="Innovación" />
//         <MenuItem value={4} primaryText="Sociedad" />
//         <MenuItem value='salud' primaryText="Salud" />
//         <MenuItem value={6} primaryText="Vivienda" />
//         <MenuItem value='deporte' primaryText="Deporte" />
//     </DropDownMenu>
//
//     <ActionSearch style={iconStyles}/>
//     <TextField
//         underlineFocusStyle={{borderColor:'white'}}
//         inputStyle={{color:'white'}}
//         hintStyle={{color:'white'}}
//         hintText="Buscar"
//         fullWidth={false}
//         onChange={this.props.onChangeSearch}
//         style={{margin: '0px 20px 0px 10px'}}
//     />
// </ToolbarGroup>
// }