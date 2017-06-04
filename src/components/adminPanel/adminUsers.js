import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';

import Avatar from 'material-ui/Avatar';
import logo from '../../assets/logo_reto.png';
import { NavLink} from 'react-router-dom';




class AdminUsers extends Component{
  constructor(props) {
      super(props);
      this.state = {
          value: 'Emprendedor',
          ancho: document.documentElement.clientWidth < 600
      };
  }
  componentWillMount(){

  }

  handleChange = (event, index, value) => this.setState({value});
  render(){
    return(
      <div>
        <div style={{paddingTop:'8%'}}>
          <Paper zDepth={1} style={{
            width:'100%',
            height:'10vh',
            margin: '1% auto',

          }}>
              <GridList cols={10}
                cellHeight={'auto'}
                 style={{width:'100%'}}>

                <GridTile cols={1} style={{paddingTop:'5%'}}>
                    <NavLink to="#" style={{textDecoration:'none' , display:'flex', justifyContent:'center'}}>
                      <Avatar src={logo} style={{width:"60%", height:'8vh'}}/>
                    </NavLink>

                </GridTile>
                <GridTile cols={4} style={{paddingTop:'2%'}}>
                    <NavLink to="#" style={{textDecoration:'none'}}>
                      <MenuItem style={{textAlign:'center'}}>Bliss</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Chelas Para todos</MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2}>
                  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value='Emprendedor' primaryText="Emprendedor" />
                        <MenuItem value='Aportador' primaryText="Aportador" />
                  </DropDownMenu>
                </GridTile>
              </GridList>
          </Paper><Paper zDepth={1} style={{
            width:'100%',
            height:'10vh',
            margin: '1% auto',

          }}>
              <GridList cols={10}
                cellHeight={'auto'}
                 style={{width:'100%'}}>

                <GridTile cols={1} style={{paddingTop:'5%'}}>
                    <NavLink to="#" style={{textDecoration:'none' , display:'flex', justifyContent:'center'}}>
                      <Avatar src={logo} style={{width:"60%", height:'8vh'}}/>
                    </NavLink>

                </GridTile>
                <GridTile cols={4} style={{paddingTop:'2%'}}>
                    <NavLink to="#" style={{textDecoration:'none'}}>
                      <MenuItem style={{textAlign:'center'}}>Oswaldo</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Gym Gratuito </MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2}>
                  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value='Emprendedor' primaryText="Emprendedor" />
                        <MenuItem value='Aportador' primaryText="Aportador" />
                  </DropDownMenu>
                </GridTile>
              </GridList>
          </Paper><Paper zDepth={1} style={{
            width:'100%',
            height:'10vh',
            margin: '1% auto',

          }}>
              <GridList cols={10}
                cellHeight={'auto'}
                 style={{width:'100%'}}>

                <GridTile cols={1} style={{paddingTop:'5%'}}>
                    <NavLink to="#" style={{textDecoration:'none' , display:'flex', justifyContent:'center'}}>
                      <Avatar src={logo} style={{width:"60%", height:'8vh'}}/>
                    </NavLink>

                </GridTile>
                <GridTile cols={4} style={{paddingTop:'2%'}}>
                    <NavLink to="#" style={{textDecoration:'none'}}>
                      <MenuItem style={{textAlign:'center'}}>Brenda</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Ropa Gratis</MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2}>
                  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value='Emprendedor' primaryText="Emprendedor" />
                        <MenuItem value='Aportador' primaryText="Aportador" />
                  </DropDownMenu>
                </GridTile>
              </GridList>
          </Paper>

        </div>
      </div>
    );
  }
}

export default AdminUsers;
