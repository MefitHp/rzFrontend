import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginForm extends Component{
  render(){
    return(
      <div>
        <RaisedButton label="Facebook" primary={true} />
        <RaisedButton label="Google" secondary={true} />
          <br />
          <TextField
          hintText="Correo"
          floatingLabelText="Correo"
          type="text"
        /><br />
          <TextField
          hintText="Contraseña"
          floatingLabelText="Contraseña"
          type="password"
        /><br />
      </div>
    );
  }
}

export default LoginForm;
