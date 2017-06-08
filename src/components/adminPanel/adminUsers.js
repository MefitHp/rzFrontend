import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
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


class AdminUsers extends Component{
  constructor(props) {
      super(props);
      this.state = {
          emprendedor:false,
          search:null,
          items: [
                  {
                      id:1,
                      userName:'Oswaldo Martinez',
                      project:'gym gratis'},
                  {
                      id:2,
                      userName:'Hector Bliss',
                      project:'Chef personal'
                  },
                  {
                      id:3,
                      userName:'Brenda Ortega',
                      project:'Berska en cada esquina'
                  },
                  {
                      id:4,
                      userName:'Junior Jr.',
                      project:'Junior'
                  },
                  {
                      id:5,
                      userName:'Chilaquil Chilaquiles',
                      project:'No a la discriminación'
                  },


              ]
      };
  }
  handleToggle = (e) => {
      this.setState({emprendedor:!this.state.emprendedor});
  };

  onChangeSearch = (e) => {
      console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
    console.log(this.state.search);

  };
  componentWillMount(){

  }


  render(){

    const regEx = new RegExp(this.state.search,'g');
    const items = this.state.items.filter(
        item=>{
            if(this.state.search) return regEx.test(item.userName);
            return item;
        }
    );
    return(
      <div>
        <div className={this.props.open ? 'adminUsersNavOpened' : 'adminUsersNavClosed'}
           style={{position:'fixed', zIndex:3, boxShadow:'0 1px rgba(0,0,0,.16)'}}>
          <Toolbar
              style={{
                  backgroundColor:'white',
                  overflow:'hidden',
                  cursor:'pointer',

                  width:'100%'
              }}
              className="oculto"
              >
              <ToolbarGroup
                  firstChild={true}>
                  <ActionHome
                      color="gray"
                      style={{marginLeft:30}}
                      onTouchTap={()=>this.props.history.push('/')}
                  />

                      <ToolbarTitle
                      style={{marginLeft: '30px'}}
                      text="Categorías: "/>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                      <MenuItem value={1} primaryText="Todos" />
                      <MenuItem value={2} primaryText="Tecnología" />

                </DropDownMenu>
              </ToolbarGroup>
                <ToolbarGroup>
                  <ActionSearch />
                  <TextField
                  hintText="Buscar"
                  fullWidth={false}
                  onChange={this.onChangeSearch}
                  />

              </ToolbarGroup>
          </Toolbar>
        </div>
        <div style={{paddingTop:'15%'}}>
          {items.map(i=>{
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
                            <MenuItem style={{textAlign:'center'}}>{i.userName}</MenuItem>
                          </NavLink>

                      </GridTile>
                      <GridTile cols={3} style={{paddingTop:'2%'}}>
                        <NavLink to="#" style={{textDecoration:'none'}}>
                          <MenuItem style={{textAlign:'center'}}>{i.project}</MenuItem>
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
                </Paper>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AdminUsers;
