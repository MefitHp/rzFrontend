import React, {Component} from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Route } from 'react-router-dom';
import AdminProjects from './adminProjects';
import AdminUsers from './adminUsers';
import AdminInputs from './adminInputs';


class AdminSections extends Component{
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
      <div style={{position:'relative'}}>
        <div className={this.props.open ? 'adminUsersNavOpened' : 'adminUsersNavClosed'} style={{position:'fixed'}}>
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
                  onChange={this.props.onChangeSearch}
                  />

              </ToolbarGroup>
          </Toolbar>
        </div>

         <Route path={`/admin/users`} component={AdminUsers}/>
         <Route path={`/admin/projects`} component={AdminProjects}/>
         <Route path={`/admin/inputs`} component={AdminInputs}/>
      </div>
    );
  }
}

export default AdminSections;
