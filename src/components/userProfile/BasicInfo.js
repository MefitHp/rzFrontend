import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


const stylePaper = {

  width: '100%',
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class BasicInfo extends Component{
  render(){
    return(

        <Paper style={stylePaper}  zDepth={1}>
          <List>
           <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
           <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
           <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
           <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
           <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
         </List>
        </Paper>


    );
  }
}

export default BasicInfo;
