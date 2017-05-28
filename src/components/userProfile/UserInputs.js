import React, {Component} from 'react';
import Paper from 'material-ui/Paper';


const stylePaper = {

  width: '100%',
  margin: 10,
  
  textAlign: 'center',
  display: 'inline-block',
};

class UserInputs extends Component{
  render(){
    return(
      <Paper style={stylePaper}>
        <h1>Inputs</h1>
      </Paper>
    );
  }
}

export default UserInputs;
