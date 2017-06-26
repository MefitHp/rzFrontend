import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import face from '../../assets/bliss.jpg';
import {NavLink} from 'react-router-dom';
import firebase from '../../Api/firebase';





class UserList extends Component{
    state = {
      users:[]
    };

    componentWillMount(){
      this.getUsersList();
    }

    getUsersList = () => {


      firebase.auth().onAuthStateChanged((user)=>{

        firebase.database().ref('misChat/' + user.uid)
        .once('value')
        .then(snap=>{
          const o = snap.val();
          // console.log('encontre:', snap.val());
          for(let key in o){
            this.state.users.push(o[key])
          }
          this.setState({users:this.state.users});
        });


      });



    };


    render(){

        const {elMatch} = this.props;
        return(
        <List>
            <Subheader>Chats recientes</Subheader>

            {this.state.users.map(u=>{
              return(
                <ListItem
                    containerElement={<NavLink to={`${elMatch}/${u.uid}`} activeClassName="active" />}
                    primaryText={u.displayName}
                    leftAvatar={<Avatar src={u.photoURL}/>}
                    rightIcon={<CommunicationChatBubble />}
                />
              );
            })}


            {/*
            <ListItem
                containerElement={<NavLink to={`${elMatch}/pMdlMcWGHsVWEqUFEockePuMw1x1`} activeClassName="active" />}
                primaryText="Héctor BlisS"
                leftAvatar={<Avatar src={face}/>}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/X8yc32qBj8absuLVZpfMJosipY92`} activeClassName="active" />}
                primaryText="Doctore"
                leftAvatar={<Avatar src={face} />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/r9I67M2f8daNw7WTwC6iTKod4193`} activeClassName="active" />}
                primaryText="Brendita"
                leftAvatar={<Avatar src={face} />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/rata`} activeClassName="active" />}
                primaryText="Kerem Suer"
                leftAvatar={<Avatar src={face} />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/tortugo`} activeClassName="active" />}
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar src={face} />}
                rightIcon={<CommunicationChatBubble />}
            /> */}
        </List>
        );
    }
}

export default UserList;
