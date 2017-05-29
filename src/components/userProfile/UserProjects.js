import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
const stylePaper = {

  width: '100%',
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};


class UserProjects extends Component{
  render(){
    return(
      <Paper style={stylePaper}>
        <h1>Projects</h1>
      </Paper>
    );
  }
}

export default UserProjects;
