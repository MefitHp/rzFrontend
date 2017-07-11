import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import { NavLink} from 'react-router-dom';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import api from '../../Api/Django';
import toastr from 'toastr';
import MainLoader from '../../components/common/MainLoader';



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
          loading:true
      };
  }

  componentWillMount(){
      api.getAllUsers()
          .then(r=>{
              this.setState({users:r, loading:false});

          })
          .catch(e=>toastr.error('no se puedieron cargar los usuarios', e));
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
    return(
      <div>
        {this.state.loading && <MainLoader/>}
        <Dialog
          title="¿Seguro?"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Estás a punto de cambiar el status de este usuario
        </Dialog>
        <div className={this.props.open ? 'adminUsersNavOpened' : 'adminUsersNavClosed'}
           style={{position:'fixed', zIndex:3, boxShadow:'0 1px rgba(0,0,0,.16)'}}>
          <Toolbar
              style={{
                  backgroundColor:'white',
                  overflow:'hidden',
                  cursor:'pointer',

                  width:'100%'
              }}          >
              <ToolbarGroup style={{width:'50%'}}>
                <ActionSearch />
                <TextField

                hintText="Buscar"
                fullWidth={true}
                onChange={this.onChangeSearch}
                />

            </ToolbarGroup>
                <ToolbarGroup >
                  <SelectField
                    hintText="Order by:"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={1} primaryText="Emprendedor" />
                    <MenuItem value={2} primaryText="Todos" />
                    <MenuItem value={3} primaryText="No Emprendedor" />

                  </SelectField>

              </ToolbarGroup>
          </Toolbar>
        </div>
        <div style={ document.documentElement.clientWidth > 600 ? {paddingTop:'12%'}:{display: 'flex',
    flexWrap: 'wrap',paddingTop:'36%',
    justifyContent: 'space-around',}}>
          {users.map(i=>{
            return(
                <Paper key={i.id} zDepth={1} style={{
                  width:'100%',
                  height:'auto',
                  margin: '1% auto',

                }}>
                    <GridList cols={document.documentElement.clientWidth > 600?10:0}

                      cellHeight={'auto'}
                       style={document.documentElement.clientWidth > 600?{}:{
                         display: 'flex',
                          flexWrap: 'nowrap',
                          overflowX: 'auto'}}>
                          <GridTile cols={2}>
                            <Toggle
                              id={i.id}
                              style={{margin:'10% 5%'}}
                                toggled={i.profile.canPublish}
                                onToggle={()=>{
                                  this.onToggle(i);
                                }
                              }
                                labelPosition="right"
                                label={document.documentElement.clientWidth > 600?"Emprendedor":" "}
                            />


                          </GridTile>

                      <GridTile cols={1} style={{paddingTop:'5%'}}>
                          <NavLink to={'/users/'+i.profile.id} style={{textDecoration:'none' , display:'flex', justifyContent:'center'}}>
                            <Avatar src={i.profile.photoURL} size={50}/>
                          </NavLink>

                      </GridTile>
                      <GridTile cols={4} style={{paddingTop:'2%'}}>
                          <NavLink to={'/users/'+i.profile.id} style={{textDecoration:'none'}}>
                            <MenuItem style={{textAlign:'center'}}>{i.username}</MenuItem>
                          </NavLink>

                      </GridTile>



                      <GridTile cols={3} style={{paddingTop:'2%'}}>
                        <NavLink to="#" style={{textDecoration:'none'}}>
                          <MenuItem style={{textAlign:'center'}}>
                            {i.email}
                          </MenuItem>
                        </NavLink>
                      </GridTile>



                    </GridList>
                </Paper>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AdminUsers;
