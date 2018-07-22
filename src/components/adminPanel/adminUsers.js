import React, { Component } from 'react';
import { Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import {Avatar} from 'material-ui';
import api from '../../Api/Django';
import toastr from 'toastr';
import MainLoader from '../../components/common/MainLoader';
//redux
// import {connect} from 'react-redux';
// import * as adminActions from '../../redux/actions/adminActions';
// import {bindActionCreators} from 'redux';

//2018
import {getUsersAdmin, updateUserAdmin} from '../../Api/nodejs';

const pic = "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"





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
        //  users: [],
          item:'',
          fetched:false,
          //2018
          users:[],
          user:{}
      };
  }

  //buscador
  onChangeSearch = (e) => {
      //console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
   // console.log(this.state.search);
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

  onToggle = (user) => {
    user.canPublish = !user.canPublish;
    //this.setState({user});
    //this.handleOpen()
    this.updateUser(user)

  };
    onToggle2 = (user) => {
        user.is_active = !user.is_active
        //this.setState({user});
       // this.handleOpen2()
       this.updateUser(user)

    };
  saveStatus = () => {
    console.log('se guardó' + this.state.idUser)
    console.log(this.state.users[this.state.idUser - 1])
    this.setState({open:false})
  };

  updateUser = (user) => {
    updateUserAdmin(user)
    .then(user=>{
        console.log(user)
        const users = this.state.users.map(u=>{
            if(u._id === user._id) return user
            return u
        })
        this.setState({users})
        toastr.info("Actualizado")
    })
      .catch(
        e=>{
          toastr.error(e);
        });
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




//   componentDidMount(){
//       this.setState({
//           users:this.props.users,
//           fetched:this.props.fetched
//       });
//   }
//   componentWillReceiveProps(p){
//       this.setState({
//           users:p.users,
//           fetched:p.fetched
//       });
//   }


componentWillMount(){
    getUsersAdmin()
    .then(users=>{
        console.log(users)
        this.setState({users, fetched:true})
    })
    .catch(e=>toastr.error(e))
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
            if(this.state.search) return regEx.test(item.username)|| regEx.test(item.email);

            if(this.state.filtro===2) return item.profile.canPublish===true;
            if(this.state.filtro===3) return item.profile.canPublish===false;

            return item;
        }
    );

    const {fetched} = this.state;
    //const {users} = this.state;
    return(
        <div style={{paddingTop:'8%'}}>
            {!fetched ? <MainLoader/> :
                <div>
                    <Paper
                        style={{
                                marginBottom:'1%',
                                display:'flex',
                                justifyContent:'space-between',
                                alignItems:'center',
                                padding:'1%'}}>

                        <TextField
                            hintText="Buscador"
                            style={{width:'50%'}}
                            onChange={this.onChangeSearch}
                        />
                        {/* <SelectField
                            floatingLabelText="Filtro"
                            value={this.state.filtro}
                            onChange={this.handleChange}
                        >
                            <MenuItem value={2} primaryText="Emprendedor" />
                            <MenuItem value={3} primaryText="No emprendedor" />
                            <MenuItem value={4} primaryText="Todos" />


                        </SelectField> */}

                    </Paper>
                    <Paper style={{padding:"20px", height:'60vh', overflowY:'scroll'}}>

                        <div style={{minWidth:"600px"}}>

                            <Table
                                selectable={true}>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Foto</TableHeaderColumn>
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
                                                 <TableRowColumn>
                                                    <Avatar 
                                                    src={i.photoURL || pic} />
                                                 </TableRowColumn>
                                                <TableRowColumn>{i.username}</TableRowColumn>
                                                <TableRowColumn>{i.email}</TableRowColumn>
                                                <TableRowColumn>
                                                    <Toggle
                                                        thumbSwitchedStyle={{backgroundColor:'#40B263'}}
                                                        trackSwitchedStyle={{backgroundColor:'rgba(64, 178, 99, .6)'}}
                                                        onToggle={()=>this.onToggle(i)}
                                                        toggled={i.canPublish}
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

export default AdminUsers;
