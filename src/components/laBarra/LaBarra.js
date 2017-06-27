import React, { Component } from 'react';
import firebase, {signOut} from '../../Api/firebase';
import AppBar from 'material-ui/AppBar';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import { ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {DropDownMenu, MenuItem, FontIcon, RaisedButton, IconMenu, IconButton, FlatButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';






class LaBarra extends Component {

    state = {
        value:3,
        isUser:false,
        user:{}
    };

componentWillMount(){
     firebase.auth().onAuthStateChanged((user)=>{
         if(user){
             this.setState({isUser:true, user});
         }
     });
}
    
  handleChange = (event, index, value) => this.setState({value});

    
  render() {
      const {history} = this.props;
      const {user, isUser} = this.state;
      
      const userInfo = (<ToolbarGroup>
       
         <FlatButton 
          label="Admin Panel"
          labelStyle={styles.buttonText}
          hoverColor={colors.purple}
           onTouchTap={()=>history.push('/admin')}
            />
       
       <CommunicationChatBubble
           color="white"
           style={styles.icon}
           onTouchTap={()=>history.push('/chat')}
         />
    
       <ToolbarSeparator />

       
        <Avatar 
        src={user.photoURL}
          />

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
                      <RaisedButton 
                      label="Explorar"
                      labelStyle={styles.buttonText}
                      backgroundColor={colors.purple}
                       onTouchTap={()=>{history.push('/explorar')}}
                        />
                                                  
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
