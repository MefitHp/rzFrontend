import React, { Component } from 'react';
import firebase, {signOut} from '../../Api/firebase';
import AppBar from 'material-ui/AppBar';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import { ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {DropDownMenu, MenuItem, FontIcon, RaisedButton, IconMenu, IconButton, FlatButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import api from '../../Api/Django';





class LaBarra extends Component {

    state = {
        value:3,
        isUser:false,
        user:{},
        ancho:document.documentElement.clientWidth < 600,
        isStaff:false
    };

componentWillMount(){
     firebase.auth().onAuthStateChanged((user)=>{
         if(user){
             this.setState({isUser:true, user});
             this.checkStaff();
         }
     });
}

checkStaff = () => {
    api.getSelfProfile()
    .then(r=>{
        console.log('profile ',r.is_staff);
        if(r.is_staff){
            this.setState({isStaff:true});
        }
    })
    .catch(e=>console.log(e));
}
    
  handleChange = (event, index, value) => this.setState({value});

    
  render() {
      const {history} = this.props;
      const {user, isUser, ancho, isStaff} = this.state;
      
      const userInfo = (
          <ToolbarGroup>
       
        {!ancho && isStaff && <FlatButton 
          label="Admin Panel"
          labelStyle={styles.buttonText}
          hoverColor={colors.purple}
           onTouchTap={()=>history.push('/admin')}
            />}
       
       <CommunicationChatBubble
           color="white"
           style={styles.icon}
           onTouchTap={()=>history.push('/chat')}
         />
    
     {!ancho && <ToolbarSeparator />}

       
{!ancho && <Avatar 
        src={user.photoURL}
          /> }

        <IconMenu
        iconButtonElement={
        <IconButton 
            touch={true}
            iconStyle={styles.icon}
            >
        <NavigationExpandMoreIcon />
        </IconButton>
        }
        >
        <MenuItem
            onTouchTap={()=>history.push('/userprofile')}
            primaryText="Tu Perfil" />
        <MenuItem
            onTouchTap={signOut}
            primaryText="Cerrar Sesión" />
        </IconMenu>
        </ToolbarGroup> );
      
    return (
        <div>
               <AppBar
                   title={<img style={styles.logo} src={logo} />}
                   style={styles.bar}
                   showMenuIconButton={false}
                   onTitleTouchTap={()=>history.push('/')}
               >
              
                   <ToolbarGroup>
                    
                      <ToolbarSeparator />
                     {!ancho && <RaisedButton 
                      label="Explorar"
                      labelStyle={styles.buttonText}
                      backgroundColor={colors.purple}
                       onTouchTap={()=>{history.push('/explorar')}}
                        /> }                      
                     {!isUser && <FlatButton 
          label="Entrar"
          labelStyle={styles.buttonText}
          hoverColor={colors.purple}
           onTouchTap={()=>history.push('/login')}
            />}
                                                  
                    {isUser && userInfo}
                        
                    </ToolbarGroup>
              
            </AppBar>       
        </div>
    );
  }
}

const styles = {
  bar:{
      backgroundColor:colors.pink,
  },
    logo:{
        backgroundColor:'white',
        height:'100%',
        cursor:'pointer'
    },
    buttonText:{
        color:'white'
    },
    icon:{
        cursor:'pointer',
        color:'white'
    }
};

export default LaBarra;
