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

//api
import {updateUser} from '../../Api/nodejs';


const style = {
  paper: {
    width:'100%',
    display: 'flex',
    justifyContent:'flex-start',
    margin: '4% auto',


  },
  menu:{
    width:'50%'
  },
  rightIcon: {

    textAlign: 'center',
    lineHeight: '24px',
  },
  item:{
    color:'#757575',
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
      genero:'',
      user:{},
      modifiedUser:{}
    }
  }
  componentWillMount(){

    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({user});

    // api.getSelfProfile()
    //     .then(r=>{

    //         let profile = r.profile
    //         console.log(profile);
    //         if(profile.user === "No encontrado."){
    //             this.props.history.push('/login');
    //         }
    //         this.setState({profile});

    //     })
    //     .catch(e=>{
    //       console.log(e);
    //       toastr.error('Comprueba tu conexión')

    //     });
  }


  handleOpen = () => {
    const noMirror = JSON.stringify(this.state.profile);
    this.setState({open: true, resp:noMirror});
 };

 handleClose = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  this.setState({user, open:false});
   //console.log(this.state.resp)
   //this.setState({open: false, profile:JSON.parse(this.state.resp)});
 };

 handleText = (event, index) => {
   const field = event.target.name;
   const {user} = this.state;
   user[field] = event.target.value;
   this.setState({user});
 }

 handleChange = (event, index, value) => {
   let {user} = this.state;
   user.genre = value;
   this.setState({user});
 }
 handleOcup = (event, index, value) => {
   let {user} = this.state;
   user.occupation = value;
   this.setState({user});
 }



 updateProfile = () => {
     //api.updateProfile(this.state.profile.id, this.state.profile)
     updateUser(this.state.user)   
     .then((user)=>{
             toastr.success('Tu perfil se ha actualizado');
             this.setState({open:false, user})

      })
      .catch((e)=>toastr.error('No se pudieron guardar tus cambios '));
 };

  render(){
    const {user} = this.state;
    const {username, donations=[], email, followingProjects=[], contacts, role, canPublish, projects, genre, cover, photoURL, age, tel, address, occupation, email2} = user;
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
            <MenuItem primaryText={age ? age + ' años' : 'Edad'} leftIcon={<Person />} disabled={true} style={style.item}/>
            <MenuItem primaryText={occupation || 'Ocupación'} leftIcon={<Star />}disabled={true} style={style.item} />
            <MenuItem primaryText={email2 || 'Correo alterno'} leftIcon={<Mail />} disabled={true} style={style.item}/>

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
                    value={genre}
                    onChange={this.handleChange}

                  >
                    <MenuItem value='Hombre' primaryText="Hombre" />
                    <MenuItem value='Mujer' primaryText="Mujer" />

                  </SelectField>
                  <br />
                  <TextField
                    name="age"
                    defaultValue={age}
                    floatingLabelText="Edad"
                    onBlur={this.handleText}
                  /><br />

                  <TextField
                  floatingLabelText="Correo Alternativo"
                  name="email2"
                  defaultValue={email2}
                  onBlur={this.handleText}

                  /><br />
                  <SelectField
                    floatingLabelText="Ocupación"
                    value={occupation}
                    onChange={this.handleOcup}
                    >
                    <MenuItem value='Profesionista' primaryText="Profesionista" />
                    <MenuItem value='Estudiante' primaryText="Estudiante" />
                    <MenuItem value='Fitness' primaryText="Fitness" />
                    <MenuItem value='Artista' primaryText="Artista" />
                  </SelectField>
                  <br />
                  <TextField
                    name="tel"
                    defaultValue={tel}
                    floatingLabelText="Teléfono"
                    onBlur={this.handleText}
                  /> <br />

                </GridTile>
                <GridTile>
                  <TextField
                    defaultValue={address}
                    floatingLabelText="Dirección"
                    onBlur={this.handleText}
                    name="address"
                  /><br />

                  {/* <TextField
                  floatingLabelText="Número"
                  defaultValue={this.state.profile.numero}
                  onBlur={this.handleText}
                  name="numero"

                  /><br /> */}
                  {/* <TextField
                  value={this.state.profile.colonia}
                  floatingLabelText="Colonia"
                  onBlur={this.handleText}
                  name="colonia"
                  /> <br /> */}
                  {/* <TextField
                    floatingLabelText="Código Postal"
                    defaultValue={this.state.profile.cp}
                    name="cp"
                    onBlur={this.handleText}
                  /><br /> */}
                  {/* <TextField
                    floatingLabelText="Ciudad"
                    defaultValue={this.state.profile.ciudad}
                    onBlur={this.handleText}
                    name="ciudad"
                  /><br /> */}
                  {/* <TextField
                    floatingLabelText="Estado"
                    defaultValue={this.state.profile.estado}
                    name="estado"
                    onBlur={this.handleText}
                  /><br /> */}
                </GridTile>
              </GridList>

           </Dialog>
          </Menu>
            <Menu style={style.menu} desktop={true}>
                <MenuItem primaryText={tel || 'Teléfono'} leftIcon={<Phone />}disabled={true} style={style.item} />

                <MenuItem
                    primaryText={address || 'Tu Domicilio'}  leftIcon={<Home />} disabled={true} style={style.item}/>

                <Divider />

            </Menu>
        </Paper>


    );
  }

}

export default BasicInfo;
