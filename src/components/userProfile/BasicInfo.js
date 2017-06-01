import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
//Icons
import Person from 'material-ui/svg-icons/action/perm-identity';
import Gender from 'material-ui/svg-icons/action/fingerprint';
import Divider from 'material-ui/Divider';
import Edit from 'material-ui/svg-icons/content/create';
import Home from 'material-ui/svg-icons/action/home';
import Star from 'material-ui/svg-icons/maps/local-activity';
import Mail from 'material-ui/svg-icons/communication/email';
import Phone from 'material-ui/svg-icons/communication/call';
import Loc from 'material-ui/svg-icons/communication/location-on';


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
      edad:20,
      calle:'Palisandro',
      casaNumero:101,
      colonia:'Paseo de los Solares',
      ciudad:'Pachuca',
      estado:'Hidalgo',
      cp:42160,
      correo:'oswalfut_96@hotmail.com',
      telefono:7711732959
    }
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };
 handleText = (event) => {
   this.setState({[event.target.name]:event.target.value});
 }
 handleGender = (event, index, genero) => this.setState({genero});
 handleOcup = (event, index, ocup) => this.setState({ocup});

  render(){
    return(

        <Paper style={style.paper}  zDepth={1}>
          <Menu style={style.menu} desktop={true}>
            <MenuItem primaryText={this.state.genero} leftIcon={<Gender />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.edad + ' años'} leftIcon={<Person />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.ocup} leftIcon={<Star />}disabled={true} style={style.item} />
            <MenuItem primaryText={this.state.correo} leftIcon={<Mail />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.telefono} leftIcon={<Phone />}disabled={true} style={style.item} />

              <MenuItem primaryText={this.state.calle + ' ' + this.state.casaNumero + ' ' + this.state.colonia }  leftIcon={<Home />} disabled={true} style={style.item}/>

              <MenuItem primaryText={' CP: ' + this.state.cp + ' ' +this.state.ciudad + ' ' + this.state.estado} leftIcon={<Loc />} disabled={true} style={style.item}/>

            <Divider />
            <MenuItem primaryText="Edit" leftIcon={<Edit />}  style={style.item} onTouchTap={this.handleOpen}/>
            <Dialog
              title="Modifica tu Perfil, Sólo escribe y se guardará"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}>
              <GridList
                cellHeight={'auto'}>
                <GridTile>
                  <SelectField
                    floatingLabelText="Género"
                    value={this.state.genero}
                    onChange={this.handleGender}

                  >
                    <MenuItem value='Hombre' primaryText="Hombre" />
                    <MenuItem value='Mujer' primaryText="Mujer" />

                  </SelectField>
                  <br />
                  <TextField
                    name="edad"
                    defaultValue={this.state.edad}
                    floatingLabelText="Edad"
                    onBlur={this.handleText}
                  /><br />

                  <TextField
                  floatingLabelText="Correo Electrónico"
                  name="correo"
                  defaultValue={this.state.correo}
                  onBlur={this.handleText}

                  /><br />
                  <SelectField
                    floatingLabelText="Ocupación"
                    value={this.state.ocup}
                    onChange={this.handleOcup}>
                    <MenuItem value='Profesionista' primaryText="Profesionista" />
                    <MenuItem value='Estudiante' primaryText="Estudiante" />
                    <MenuItem value='Fitness' primaryText="Fitness" />
                    <MenuItem value='Artista' primaryText="Artista" />
                  </SelectField>
                  <br />
                  <TextField
                    name="telefono"
                    defaultValue={this.state.telefono}
                    floatingLabelText="Teléfono"
                    onBlur={this.handleText}
                  /> <br />
                </GridTile>
                <GridTile>
                  <TextField
                    defaultValue={this.state.calle}
                    floatingLabelText="Calle"
                    onBlur={this.handleText}
                    name="calle"
                  /><br />

                  <TextField
                  floatingLabelText="Número"
                  defaultValue={this.state.casaNumero}
                  onBlur={this.handleText}
                  name="casaNumero"

                  /><br />
                  <TextField
                  defaultValue={this.state.colonia}
                  floatingLabelText="Colonia"
                  name="colonia"
                  onBlur={this.handleText}
                  /> <br />
                  <TextField
                    floatingLabelText="Código Postal"
                    defaultValue={this.state.cp}
                    name="cp"
                    onBlur={this.handleText}
                  /><br />
                  <TextField
                    floatingLabelText="Ciudad"
                    defaultValue={this.state.ciudad}
                    onBlur={this.handleText}
                  /><br />
                  <TextField
                    floatingLabelText="Estado"
                    defaultValue={this.state.estado}
                    name="estado"
                    onBlur={this.handleText}
                  /><br />
                </GridTile>
              </GridList>
           </Dialog>
          </Menu>
        </Paper>


    );
  }

}

export default BasicInfo;
