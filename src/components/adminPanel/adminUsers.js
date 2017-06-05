import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import logo from '../../assets/logo_reto.png';
import { NavLink} from 'react-router-dom';




class AdminUsers extends Component{
  constructor(props) {
      super(props);
      this.state = {
          emprendedor:false
      };
  }
  handleToggle = () => {
      this.setState({emprendedor:!this.state.emprendedor});
  };
  componentWillMount(){

  }


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
                      <MenuItem style={{textAlign:'center'}}>Hector Bliss</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Chelas Para todos</MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2}>
                  <Toggle
                    style={{margin:'10% 5%'}}
                      toggled={this.state.emprendedor}
                      onToggle={this.handleToggle}
                      labelPosition="right"
                      label="Emprendedor"
                  />
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
                      <MenuItem style={{textAlign:'center'}}>Oswaldo Martínez</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Gym Gratuito </MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2}>
                  <Toggle
                    style={{margin:'10% 5%'}}
                      toggled={this.state.emprendedor}
                      onToggle={this.handleToggle}
                      labelPosition="right"
                      label="Emprendedor"
                  />
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
                      <MenuItem style={{textAlign:'center'}}>Brenda Ortega</MenuItem>
                    </NavLink>

                </GridTile>
                <GridTile cols={3} style={{paddingTop:'2%'}}>
                  <NavLink to="#" style={{textDecoration:'none'}}>
                    <MenuItem style={{textAlign:'center'}}>Ropa Gratis</MenuItem>
                  </NavLink>
                </GridTile>
                <GridTile cols={2} >
                  <Toggle
                      style={{margin:'10% 5%'}}
                      toggled={this.state.emprendedor}
                      onToggle={this.handleToggle}
                      labelPosition="right"
                      label="Emprendedor"
                  />
                </GridTile>
              </GridList>
          </Paper>

        </div>
      </div>
    );
  }
}

export default AdminUsers;
