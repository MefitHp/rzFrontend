import React, { Component } from 'react';
import {Avatar, Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui';
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
          open: false,
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
  handleChange = (event, index, value) => this.setState({value});

  //modalConfirmation
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
          toastr.success('Se cambió el status del Usuario')
          // console.log('then', r);
          api.getAllUsers()
              .then(r=>{
                  this.setState({users:r, open:false});
                  // console.log(r.data);
              })
              .catch(e=>toastr.error('no se puedieron cargar los usuarios'));

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


    const regEx = new RegExp(this.state.search,'i');


    let users = this.state.users.filter(
        item=>{
            if(this.state.search) return regEx.test(item.username);
            if(this.state.value===1) return item.profile.canPublish===true
            if(this.state.value===3) return item.profile.canPublish===false
            return item;
        }
    );

    const {fetched} = this.state;
    const usua = this.state.users;
    console.log("PERRO", usua);
    return(
        <div style={{paddingTop:100}}>
            {!fetched ? <MainLoader/> :
                <Paper style={{padding:"20px", overflow:"scroll"}}>

                    <div style={{minWidth:"600px"}}>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Nombre</TableHeaderColumn>
                                <TableHeaderColumn>Correo</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {users.map((i, index)=>{
                                return(
                                    <TableRow key={index}>
                                        <TableRowColumn>{i.username}</TableRowColumn>
                                        <TableRowColumn>{i.email}</TableRowColumn>
                                        <TableRowColumn>
                                            <Toggle
                                                onToggle={()=>this.onToggle(i)}
                                                toggled={i.profile.canPublish}
                                            />
                                        </TableRowColumn>
                                    </TableRow>

                                );
                            })}

                        </TableBody>
                    </Table>
                    </div>

                </Paper>
            }







            <Dialog
                title="¿Permitir a este usuario publicar proyectos?"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                The actions in this window were passed in as an array of React objects.
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
