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
            />
        </List>
        );
    }
}

export default UserList;
