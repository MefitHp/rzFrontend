import React, { Component } from 'react';
import {Avatar, Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import api from '../../Api/Django';
import toastr from 'toastr';
import MainLoader from '../../components/common/MainLoader';
//redux
import {connect} from 'react-redux';
import * as adminActions from '../../redux/actions/adminActions';
import {bindActionCreators} from 'redux';


class AdminUsers extends Component{
  constructor(props) {
      super(props);
      this.state = {
          filtro:4,
          open: false,
          open2:false,
          lolo:true,
          search:null,
          value:2,
          users: [],
          item:'',
          fetched:false
      };
  }

  //buscador
  onChangeSearch = (e) => {
      console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
    console.log(this.state.search);
  };
  //categoriesfilter
  handleChange = (event, index, value) => this.setState({filtro:value});

  //modalConfirmation
  handleOpen = () => {
    this.setState({open: true});
  };
    handleOpen2 = () => {
        this.setState({open2: true});
    };

  handleClose = () => {
    this.setState({open: false, open2:false});
  };
  //Change statusUser

  onToggle = (item) => {
    // const noMirror = JSON.stringify(this.state.users);
    // this.setState({resp:noMirror});
    // this.handleOpen()
    // console.log(e.target.id)
    // let key = e.target.id -1;
    // var stateCopy = Object.assign({}, this.state);
    // stateCopy.users[id].profile.canPublish = !stateCopy.users[key].profile.canPublish;
    // this.setState({stateCopy, idUser:e.target.id});
    this.setState({item});
    this.handleOpen()

  };
    onToggle2 = (item) => {

        this.setState({item});
        this.handleOpen2()

    };
  saveStatus = () => {
    console.log('se guardó' + this.state.idUser)
    console.log(this.state.users[this.state.idUser - 1])
    this.setState({open:false})
  };

  updateUser = () => {
      // api.updateProfile(this.state.users[this.state.idUser -1].profile.id, this.state.users[this.state.idUser -1].profile)
      //     .then((profile)=>{
      //         console.log(this.state.profile);
      //         toastr.success('EL status del Usuario se actualizó');
      //         this.setState({open:false})
      //
      //     })
      //     .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
      const {item} = this.state;
      console.log(item.profile);
      item.profile.canPublish = !item.profile.canPublish;
      api.updateProfile(item.profile.id, item.profile)
      .then(
        r=>{
            //toastr.options.closeButton = true;
          //toastr.success('Se cambió el status del Usuario');
            item.profile.canPublish ? toastr.success('Este usuario ya puede publicar'):toastr.warning('Este usuario ya no puede publicar')
          // console.log('then', r);
            this.setState({open:false})
          //api.getAllUsers()
             // .then(r=>{
             //     this.setState({users:r, open:false});
             // })
             // .catch(e=>toastr.error('no se puedieron cargar los usuarios'));
        }
      )
      .catch(
        e=>{
            // console.log('como viene', e)
          toastr.error(e.detail);
          // console.log(e);
        }
      );
  };
    blockUser = () => {
        const {item} = this.state;
        console.log(item);
        item.is_active = !item.is_active;
        api.updateUser(item).then(r=>{
            item.is_active ? toastr.success('Has Desbloqueado al Usuario'):toastr.warning('Has Bloqueado al Usuario')
            this.setState({open2:false})
        }).catch(e=>{
            toastr.error(e.detail);
            this.setState({open2:false})
        })

    };




  componentDidMount(){
      this.setState({
          users:this.props.users,
          fetched:this.props.fetched
      });
  }
  componentWillReceiveProps(p){
      this.setState({
          users:p.users,
          fetched:p.fetched
      });
  }

  render(){

    const actions = [
     <FlatButton
       label="Cancelar"
       secondary={true}
       onTouchTap={this.handleClose}
     />,
     <FlatButton
       label="Aceptar"
       primary={true}
       onTouchTap={this.updateUser}
     />,
   ];
      const actions2 = [
          <FlatButton
              label="Cancelar"
              secondary={true}
              onTouchTap={this.handleClose}
          />,
          <FlatButton
              label="Aceptar"
              primary={true}
              onTouchTap={this.blockUser}
          />,
      ];


    const regEx = new RegExp(this.state.search,'i');


    let users = this.state.users.filter(
        item=>{
            if(this.state.search) return regEx.test(item.username);

            if(this.state.filtro===2) return item.profile.canPublish===true;
            if(this.state.filtro===3) return item.profile.canPublish===false;

            return item;
        }
    );

    const {fetched} = this.state;
    const usua = this.state.users;
    console.log("PERRO", usua);
    return(
        <div style={{paddingTop:100}}>
            {!fetched ? <MainLoader/> :
                <div>
                    <Paper
                        style={{
                                marginBottom:'1%',
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center',
                                padding:'2%'}}>

                        <TextField
                            hintText="Buscador"
                            style={{width:'50%'}}
                            onChange={this.onChangeSearch}
                        />
                        <SelectField
                            floatingLabelText="Filtro"
                            value={this.state.filtro}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={2} primaryText="Emprendedor" />
                            <MenuItem value={3} primaryText="No emprendedor" />
                            <MenuItem value={4} primaryText="Todos" />


                        </SelectField>

                    </Paper>
                    <Paper style={{padding:"20px"}}>

                        <div style={{minWidth:"600px"}}>

                            <Table
                                selectable={true}>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Nombre</TableHeaderColumn>
                                        <TableHeaderColumn>Correo</TableHeaderColumn>
                                        <TableHeaderColumn>Emprendedor</TableHeaderColumn>
                                        <TableHeaderColumn>Bloqueado</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={false}>

                                    {users.map((i, index)=>{
                                        return(
                                            <TableRow key={index}>
                                                <TableRowColumn>{i.username}</TableRowColumn>
                                                <TableRowColumn>{i.email}</TableRowColumn>
                                                <TableRowColumn>
                                                    <Toggle
                                                        thumbSwitchedStyle={{backgroundColor:'#40B263'}}
                                                        trackSwitchedStyle={{backgroundColor:'rgba(64, 178, 99, .6)'}}
                                                        onToggle={()=>this.onToggle(i)}
                                                        toggled={i.profile.canPublish}
                                                    />
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    <Toggle

                                                        thumbSwitchedStyle={{backgroundColor:'#9C231A'}}
                                                        trackSwitchedStyle={{backgroundColor:'rgba(156, 35, 26, .6)'}}
                                                        onToggle={()=>this.onToggle2(i)}
                                                        toggled={!i.is_active}
                                                    />
                                                </TableRowColumn>

                                            </TableRow>

                                        );
                                    })}

                                </TableBody>
                            </Table>
                        </div>

                    </Paper>
                </div>
            }







            <Dialog
                title="¿Permitir a este usuario publicar proyectos?"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >

            </Dialog>

            <Dialog
                title="¿Quieres cambiar el status de este usuario?"
                actions={actions2}
                modal={false}
                open={this.state.open2}
                onRequestClose={this.handleClose}
            >

            </Dialog>
        </div>


    );
  }
}

function mapStateToProps(state){
    console.log("FETCHED", state.admin.users.length > 0);
    return {
        users:state.admin.users,
        fetched: state.admin.users.length > 0
    }
}

function mapDispatchToProps(dispatch){
    dispatch(adminActions.loadAllUsers());

    return {
        adminActions: bindActionCreators(adminActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);
