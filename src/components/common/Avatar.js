import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const AvatarExampleSimple = (props) => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar size={props.size} src={props.src}/>
      }
    >
    </ListItem>


  </List>
);

export default AvatarExampleSimple;