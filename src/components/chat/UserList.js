import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import face from '../../assets/bliss.jpg';
import {NavLink} from 'react-router-dom';
import firebase from '../../Api/firebase';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';






class UserList extends Component{
    state = {
      users:[]
    };

    componentWillMount(){
      this.getUsersList();
    }

    getUsersList = () => {
        

      firebase.auth().onAuthStateChanged((user)=>{

        const misChat = firebase.database().ref('misChat/' + user.uid);
          
//        misChat
//        .once('value')
//        .then(snap=>{
//          const o = snap.val();
//          // console.log('encontre:', snap.val());
//          for(let key in o){
//            this.state.users.push(o[key])
//          }
//          this.setState({users:this.state.users});
//        });
          
        misChat.on('child_added', (snap)=>{
            const o = snap.val();
            o.uid = snap.key;
            this.state.users.push(o)
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
                    let html = (
                     <ListItem
                   key={u.uid}
                    containerElement={<NavLink to={`${elMatch}/${u.uid}`} activeClassName="active" />}
                    primaryText={u.displayName}
                    leftAvatar={<Avatar src={u.photoURL}/>}
                    rightIcon={<CommunicationChatBubble />}
                    onTouchTap={()=>{
                          this.props.onChoice(u.displayName)
                      }}
                />);
                    if(u.new){
                        console.log(u.new);
                        html = (
                        <ListItem
                   key={u.uid}
                    containerElement={<NavLink to={`${elMatch}/${u.uid}`} activeClassName="active" />}
                    primaryText={u.displayName}
                    leftAvatar={<Avatar src={u.photoURL}/>}
                    rightIcon={<NotificationsIcon color="#C50090" />}
                    onTouchTap={()=>{
                          this.props.onChoice(u.displayName)
                      }}
                />);
                   
                     }
              return(html);
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
