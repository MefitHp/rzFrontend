import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const AvatarExampleSimple = (props) => (
  <List>
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar size={props.size} left={props.left} src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=4781c9eb8f3bf1e12f1252656f20f729&oe=59B217B1" />
      }
    >
    </ListItem>


  </List>
);

export default AvatarExampleSimple;