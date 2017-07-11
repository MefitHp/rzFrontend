import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
//import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';
import UserList from './UserList';
import { Route } from 'react-router-dom';
import ChatContent from './ChatContent';
import {TextField, Paper} from 'material-ui';
import firebase from '../../Api/firebase';



class ChatPage extends Component{

    state = {
      personName:'Chat',
        open:true
    };

    handleToggle = () => this.setState({open: !this.state.open});

    getChat = () => {
        return (
            <ChatContent
            match={this.props.match}
            />
        );
    };

    changeTitle = (name) => {
        this.setState({personName:name});
    };

    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            console.log(this.props.match.url);
        },false);

        // seteamos el nombre del usuario
        // firebase.database().ref('users/' + this.props.match.params.userId)
        // .once('value')
        // .then(snap=>{
        //   this.setState({personName:snap.val().displayName});
        // });



    }

    componentWillMount(){
          firebase.auth().onAuthStateChanged((user)=>{
              if(!user){
                  this.props.history.push(`/login?next=${this.props.match.url}`);
              }
          });
    }


    render(){
        const {personName} = this.state;
        return(
            <div>
                <Drawer
                    open={this.state.open}
                    docked={document.documentElement.clientWidth > 600}
                    onRequestChange={this.handleToggle}
                >

                    <MenuItem
                       leftIcon={<ActionHome style={styles.icon}/>}
                       primaryText="CrowdPopan"
                       onTouchTap={()=>this.props.history.push('/userprofile')}
                       >
                        
                        {/*<TextField
                            hintText="Buscar"
                            fullWidth={false}
                            onChange={this.props.onChangeSearch}
                            underlineFocusStyle={styles.underline}
                        />*/}

                    </MenuItem>
                    <UserList 
                    elMatch={this.props.match.url}
                    onChoice={this.changeTitle}
                    />
                </Drawer>

                <div  style={this.state.open ? styles.open:styles.closed}>
                    <AppBar
                        title={personName}
                        style={styles.bar}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.handleToggle}
                    />


                    <div>
                        {/* <Route path={`${this.props.match.url}/:userId`} render={this.getChat}/> */}
                        <Route path={`${this.props.match.url}/:userId`} component={ChatContent} />

                        <Route exact path={this.props.match.url} render={()=>{
                            return (
                                <Paper style={{
                                        paddingTop:70, paddingLeft:30,
                                        paddingBottom:30
                                    }}>
                                    <h2>Selecciona un usuario</h2>
                                </Paper>);
                        }}/>
                    </div>

                </div>

            </div>
        );
    }
}

const styles = {

    bar:{
        backgroundColor:'#C50090',
        position:'fixed'
    },
    open:{
        paddingLeft:255,
        transition:'all 1s ease'
    },
    closed:{
        paddingLeft:0,
        transition:'all 1s ease'
    },
    icon:{
        marginRight: 14,
        color: 'grey'
    }
};

export default ChatPage;
