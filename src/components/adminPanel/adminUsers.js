import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/logo_reto.png';
import { NavLink} from 'react-router-dom';

import ActionHome from 'material-ui/svg-icons/action/home';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import api from '../../Api/Django';
import toastr from 'toastr';



class AdminUsers extends Component{
  constructor(props) {
      super(props);
      this.state = {
          open: false,
          lolo:true,
          search:null,
          value:2,
          users: [
                  {
                      id:1,
                      userName:'Oswaldo Martinez',
                      project:'gym gratis',
                      emprendedor:true
                    }
                  ,{
                      id:2,
                      userName:'Hector Bliss',
                      project:'Chef personal',
                      emprendedor:false
                  },
                  {
                      id:3,
                      userName:'Brenda Ortega',
                      project:'Berska en cada esquina',
                      emprendedor:false
                  },
                  {
                      id:4,
                      userName:'Junior Jr.',
                      project:'Junior',
                      emprendedor:true
                  },
                  {
                      id:5,
                      userName:'Chilaquil Chilaquiles',
                      project:'No a la discriminación',
                      emprendedor:false
                  }

              ]
      };
  }

  componentWillMount(){
      api.getAllUsers()
          .then(r=>{
              this.setState({users:r.data});
              console.log(r.data);
          })
          .catch(e=>toastr.error('no se puedieron cargar los proyectos'));
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
    this.setState({open: false, users:JSON.parse(this.state.resp)});
  };
  //Change statusUser
  onToggle = (e) => {
    const noMirror = JSON.stringify(this.state.users);
    this.setState({resp:noMirror});

    this.handleOpen()
    let key = e.target.id -1;
    var stateCopy = Object.assign({}, this.state);
    stateCopy.users[key].emprendedor = !stateCopy.users[key].emprendedor;
    this.setState({stateCopy});
  }
  saveStatus = () => {
    console.log('se guardó')
    this.setState({open:false})
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
       onTouchTap={this.saveStatus}
     />,
   ];


    const regEx = new RegExp(this.state.search,'i');


    let users = this.state.users.filter(
        item=>{
            if(this.state.search) return regEx.test(item.userName);
            if(this.state.value==1) return item.emprendedor==true
            if(this.state.value==3) return item.emprendedor==false
            return item;
        }
    );
    return(
      <div>
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
        <div style={{paddingTop:'12%'}}>
          {users.map(i=>{
            return(
                <Paper key={i.id} zDepth={1} style={{
                  width:'100%',
                  height:'10vh',
                  margin: '1% auto',

                }}>
                    <GridList cols={10}
                      cellHeight={'auto'}
                       style={{width:'100%'}}>

                      <GridTile cols={1} style={{paddingTop:'5%'}}>
                          <NavLink to="#" style={{textDecoration:'none' , display:'flex', justifyContent:'center'}}>
                            <Avatar src={logo} size={50}/>
                          </NavLink>

                      </GridTile>
                      <GridTile cols={4} style={{paddingTop:'2%'}}>
                          <NavLink to="#" style={{textDecoration:'none'}}>
                            <MenuItem style={{textAlign:'center'}}>{i.username}</MenuItem>
                          </NavLink>

                      </GridTile>
                      <GridTile cols={3} style={{paddingTop:'2%'}}>
                        <NavLink to="#" style={{textDecoration:'none'}}>
                          <MenuItem style={{textAlign:'center'}}>{i.project}</MenuItem>
                        </NavLink>
                      </GridTile>
                      <GridTile cols={2}>
                        <Toggle
                          id={i.id}
                          style={{margin:'10% 5%'}}
                            toggled={i.emprendedor}
                            onToggle={this.onToggle}
                            labelPosition="right"
                            label="Emprendedor"
                        />


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
