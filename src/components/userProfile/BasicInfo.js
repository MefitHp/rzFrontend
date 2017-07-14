import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import api from '../../Api/Django';
import toastr from 'toastr';
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
      profile:{},
      resp:{},
      genero:''
    }
  }
  componentWillMount(){
    api.getSelfProfile()
        .then(profile=>{

            profile = profile.data.profile
            if(profile.user === "No encontrado."){
                this.props.history.push('/');
            }
            this.setState({profile});

        })
        .catch(e=>{
          console.log(e);
          toastr.error('Comprueba tu conexión')

        });
  }


  handleOpen = () => {
    const noMirror = JSON.stringify(this.state.profile);
    this.setState({open: true, resp:noMirror});
 };

 handleClose = () => {
   console.log(this.state.resp)
   this.setState({open: false, profile:JSON.parse(this.state.resp)});
 };

 handleText = (event, index) => {
   const field = event.target.name;
   const profile = this.state.profile;
   profile[field] = event.target.value;
   this.setState({profile});
 }

 handleChange = (event, index, value) => {
   let profile = this.state.profile;
   profile.genero = value;
   this.setState({profile});
 }
 handleOcup = (event, index, value) => {
   let profile = this.state.profile;
   profile.ocupacion = value;
   this.setState({profile});
 }



 updateProfile = () => {
     api.updateProfile(this.state.profile.id, this.state.profile)
         .then((profile)=>{
             console.log(this.state.profile);
             toastr.success('Tu perfil se ha actualizado');
             this.setState({open:false})

         })
         .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
 };

  render(){
    const actions = [
     <RaisedButton
       onTouchTap={this.updateProfile}
       label="Guardar"
       primary={true}

     />,
   <RaisedButton
     style={{marginLeft:'2%'}}
       label="Cancelar"
       primary={false}
       onTouchTap={this.handleClose}
     />,
   ];
    return(

        <Paper style={style.paper}  zDepth={1}>
          <Menu style={style.menu} desktop={true}>
            <MenuItem primaryText={this.state.profile.genero ? this.state.profile.genero :'Tu género'} leftIcon={<Gender />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.profile.edad ?  this.state.profile.edad+ ' años' : 'Tu edad'} leftIcon={<Person />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.profile.ocupacion ? this.state.profile.ocupacion:'tu ocupación'} leftIcon={<Star />}disabled={true} style={style.item} />
            <MenuItem primaryText={this.state.profile.email2 ? this.state.profile.email2: 'Correo alterno'} leftIcon={<Mail />} disabled={true} style={style.item}/>
            <MenuItem primaryText={this.state.profile.telefono ? this.state.profile.telefono:'Tu teléfono'} leftIcon={<Phone />}disabled={true} style={style.item} />

              <MenuItem
                primaryText={this.state.profile.calle ? this.state.profile.calle + ' ' + this.state.profile.numero + ' ' + this.state.profile.colonia : 'Tu Domicilio'}  leftIcon={<Home />} disabled={true} style={style.item}/>

              <MenuItem primaryText={this.state.profile.cp ? ' CP: ' + this.state.profile.cp + ' ' +this.state.profile.ciudad + ' ' + this.state.profile.estado : 'Tu Ciudad'} leftIcon={<Loc />} disabled={true} style={style.item}/>

            <Divider />
            <MenuItem primaryText="Edit" leftIcon={<Edit />}  style={style.item} onTouchTap={this.handleOpen}/>
            <Dialog
              title="Modifica tu Perfil, Sólo escribe y se guardará"
              modal={false}
              actions={actions}
              open={this.state.open}

              autoScrollBodyContent={true}>
              <GridList
                cellHeight={'auto'}>
                <GridTile>
                  <SelectField
                    floatingLabelText="Género"
                    value={this.state.profile.genero}
                    onChange={this.handleChange}

                  >
                    <MenuItem value='Hombre' primaryText="Hombre" />
                    <MenuItem value='Mujer' primaryText="Mujer" />

                  </SelectField>
                  <br />
                  <TextField
                    name="edad"
                    defaultValue={this.state.profile.edad}
                    floatingLabelText="Edad"
                    onBlur={this.handleText}
                  /><br />

                  <TextField
                  floatingLabelText="Correo Alternativo"
                  name="email2"
                  defaultValue={this.state.profile.email2}
                  onBlur={this.handleText}

                  /><br />
                  <SelectField
                    floatingLabelText="Ocupación"
                    value={this.state.profile.ocupacion}
                    onChange={this.handleOcup}
                    >
                    <MenuItem value='Profesionista' primaryText="Profesionista" />
                    <MenuItem value='Estudiante' primaryText="Estudiante" />
                    <MenuItem value='Fitness' primaryText="Fitness" />
                    <MenuItem value='Artista' primaryText="Artista" />
                  </SelectField>
                  <br />
                  <TextField
                    name="telefono"
                    defaultValue={this.state.profile.telefono}
                    floatingLabelText="Teléfono"
                    onBlur={this.handleText}
                  /> <br />

                </GridTile>
                <GridTile>
                  <TextField
                    defaultValue={this.state.profile.calle}
                    floatingLabelText="Calle"
                    onBlur={this.handleText}
                    name="calle"
                  /><br />

                  <TextField
                  floatingLabelText="Número"
                  defaultValue={this.state.profile.numero}
                  onBlur={this.handleText}
                  name="numero"

                  /><br />
                  <TextField
                  defaultValue={this.state.profile.colonia}
                  floatingLabelText="Colonia"
                  onBlur={this.handleText}
                  name="colonia"
                  /> <br />
                  <TextField
                    floatingLabelText="Código Postal"
                    defaultValue={this.state.profile.cp}
                    name="cp"
                    onBlur={this.handleText}
                  /><br />
                  <TextField
                    floatingLabelText="Ciudad"
                    defaultValue={this.state.profile.ciudad}
                    onBlur={this.handleText}
                    name="ciudad"
                  /><br />
                  <TextField
                    floatingLabelText="Estado"
                    defaultValue={this.state.profile.estado}
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
