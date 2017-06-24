import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import face from '../../assets/bliss.jpg';
import {NavLink} from 'react-router-dom';

class UserList extends Component{
    render(){

        const {elMatch} = this.props;
        return(
        <List>
            <Subheader>Chats recientes</Subheader>
            <ListItem
                containerElement={<NavLink to={`${elMatch}/perro`} activeClassName="active" />}
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src={face}/>}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/gato`} activeClassName="active" />}
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src={face} />}
                rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
                containerElement={<NavLink to={`${elMatch}/perico`} activeClassName="active" />}
                primaryText="Grace Ng"
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
            />
        </List>
        );
    }
}

export default UserList;