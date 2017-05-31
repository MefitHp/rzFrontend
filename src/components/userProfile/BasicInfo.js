import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import Edit from 'material-ui/svg-icons/content/create';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


const style = {
  paper: {
    width:'100%',
    display: 'flex',
    justifyContent:'flex-start',
    margin: '4% auto',


  },
  menu:{
    width:'100%'
  },
  rightIcon: {

    textAlign: 'center',
    lineHeight: '24px',
  },
  item:{
    color:'#000',
    maxWidth:'100%'

  }
};




class BasicInfo extends Component{

  constructor(){
    super();
    this.state={
      open: false,
      genero: 'Hombre',
      ocup:'Fitness',
      edad:'',
      domicilio:'',
      correo:'',
      telefono:''
    }
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };
 handleText = (event) => {
   //event.preventDefault();
   this.setState({edad:event.target.value});

 }
 handleGender = (event, index, genero) => this.setState({genero});
 handleOcup = (event, index, ocup) => this.setState({ocup});
  render(){
    return(

        <Paper style={style.paper}  zDepth={1}>
          <Menu style={style.menu}>
            <MenuItem primaryText={this.state.genero} leftIcon={<RemoveRedEye />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.edad} leftIcon={<PersonAdd />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.ocup} leftIcon={<ContentLink />}disabled={true} style={style.item} />
            <MenuItem primaryText={this.state.correo} leftIcon={<PersonAdd />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.telefono} leftIcon={<ContentLink />}disabled={true} style={style.item} />
            <MenuItem primaryText={this.state.domicilio} leftIcon={<PersonAdd />} disabled={true} style={style.item}/>
            <Divider />
            <MenuItem primaryText="Edit" leftIcon={<Edit />}  style={style.item} onTouchTap={this.handleOpen}/>
            <Dialog
              title="Modifica tu Perfil"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              <SelectField
                floatingLabelText="Género"
                value={this.state.genero}
                onChange={this.handleGender}
                fullWidth={true}
              >
                <MenuItem value='Hombre' primaryText="Hombre" />
                <MenuItem value='Mujer' primaryText="Mujer" />

              </SelectField>
              <br />
              <TextField
                key={1}
                defaultValue={this.state.edad}
                floatingLabelText="Edad"
                fullWidth={true}
                onChange={this.handleText}
              /><br />

              <TextField
              floatingLabelText="Correo Electrónico"
              fullWidth={true}
              defaultValue={this.state.correo}

              /><br />
              <SelectField
                floatingLabelText="Género"
                value={this.state.ocup}
                onChange={this.handleOcup}
                fullWidth={true}
              >
                <MenuItem value='Profesionista' primaryText="Profesionista" />
                <MenuItem value='Estudiante' primaryText="Estudiante" />
                <MenuItem value='Fitness' primaryText="Fitness" />
                <MenuItem value='Artista' primaryText="Artista" />
              </SelectField>
              <br />
              <TextField
              defaultValue={this.state.telefono}
              floatingLabelText="Teléfono"
              fullWidth={true}
              /><br />
              <TextField
                floatingLabelText="Domicilio"
                defaultValue={this.state.domicilio}
                hintText="Domicilio"
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
              /><br />
           </Dialog>
          </Menu>
        </Paper>


    );
  }
}

export default BasicInfo;
