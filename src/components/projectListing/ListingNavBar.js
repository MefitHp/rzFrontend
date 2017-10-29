import React, { Component } from 'react';
//import api from '../../Api/Django';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import {FlatButton, TextField} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './Listing.css';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import firebase from '../../Api/firebase';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import {withRouter} from 'react-router-dom';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import DropDownMenu from 'material-ui/DropDownMenu';


//redux
import {setFilter, search} from "../../redux/actions/filterActions";

import './bar.css';




class ListingNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user:null,
            isStaff:false,
            photoURL:false,
            value: "todos",
            //category:"todos"
          //  ancho: document.documentElement.clientWidth < 600
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
        //this.props.changeCategory(value);
        //this.props.setFilter(value)
        this.props.history.push("/explorar/"+value);
    };

    handleSearch = (e) => {
        //console.log(e.target.value);
        const {value} = e.target;
        this.props.search(value);
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
        //api.getDonaciones()
          //  .then(r=>{
                //console.log(r)
            //});
    }

    componentWillReceiveProps(p){
        this.setState({
            user:p.user,
            isStaff:p.isStaff,
            navBarName:p.navBarName,
            setFilter:p.setFilter,
            value:p.category
        });
    }

    componentDidMount(){
        this.setState({
            user:this.props.user,
            isStaff:this.props.isStaff,
            navBarName:this.props.navBarName,
            setFilter:this.props.setFilter,
            value:this.props.category
        });

        //checamos la ruta:
        //console.log("match: ",this.props.match);
        //this.setState({url:this.props.url});

    }


    render(){
        const imgBck = require('../../assets/space.jpg');
        const {photoURL, isStaff, value, navBarName} = this.state;
        const {history} = this.props;


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
                            alt="logo"
                            style={styles.logo} src={logo}
                        />
                    </Link>


                    {navBarName !== "explorar" && <div
                        onTouchTap={()=>this.props.history.push("/explorar")}
                        className="explorar-button noSmall">
                        Explorar
                    </div>}

                    {navBarName === "explorar" && <DropDownMenu
                        className="noSmall"
                        labelStyle={{color:"white"}}
                        value={value}
                        onChange={this.handleChange}>
                        <MenuItem disabled primaryText="Categorías" />
                        <MenuItem value="todos" primaryText="Todos" />
                        <MenuItem value="energia" primaryText="Energía" />
                        <MenuItem value={2} primaryText="Industrias Verdes" />
                        <MenuItem value={3} primaryText="Industrias Creativas" />
                        <MenuItem value="educacion" primaryText="Educación" />
                        <MenuItem value={5} primaryText="Agroindustria" />
                        <MenuItem value={6} primaryText="Construcción" />
                        <MenuItem value={7} primaryText="Movilidad" />
                        <MenuItem value={8} primaryText="Deporte" />
                        <MenuItem value={9} primaryText="Alimentos" />
                    </DropDownMenu>}


                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>


                    {navBarName === "explorar" && <TextField
                        onChange={this.handleSearch}
                        className="noSmall"
                        hintStyle={{color:"lightgrey"}}
                        inputStyle={{color:"white"}}
                        underlineStyle={{borderColor:"purple"}}
                        underlineFocusStyle={{borderColor:"white"}}
                        hintText="Buscar..."
                    />}


                    {photoURL && <CommunicationChatBubble
                        color="white"
                        style={styles.icon}
                        onTouchTap={()=>history.push('/chat')}
                    />}

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


                                {isStaff && <MenuItem
                                    onTouchTap={()=>this.props.history.push("/admin")}
                                    primaryText="Administración"
                                />}
                                    <MenuItem
                                        onTouchTap={()=>this.props.history.push("/explorar")}
                                        primaryText="Explorar"
                                    />


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



const styles = {
     logo:{
         width: 110,
         cursor:'pointer',
         marginLeft:'24px',
         height: 50
    },
    icon:{
        cursor:'pointer',
        color:'white',
        marginRight:10,
        marginLeft:10
    }
};

function mapStateToProps(state, ownProps) {
    //console.log(state.user);
    let isStaff = null;
    if(Object.keys(state.user).length > 0) isStaff = state.user.profile.is_staff
    return {
        user: state.user,
        isStaff,
        navBarName:state.navBarName,
        category:state.filter.category
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions,dispatch),
        setFilter: bindActionCreators(setFilter, dispatch),
        search:bindActionCreators(search, dispatch)
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