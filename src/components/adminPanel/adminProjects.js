import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';

import ActionHome from 'material-ui/svg-icons/action/home';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';



class AdminProjects extends Component{

  constructor(props) {
      super(props);
      this.state = {
          value: 'Emprendedor',
          ancho: document.documentElement.clientWidth < 600,
          search:null,
          items: [
                  {
                      id:1,
                      name:'perro'
                  },
                  {
                      id:2,
                      name:'gato'
                  },
                  {
                      id:3,
                      name:'perico'
                  },
                  {
                      id:4,
                      name:'salchicha'
                  },
                  {
                      id:5,
                      name:'nel'
                  },


              ]
      };
  }

  handleChange = (event, index, value) => this.setState({value});

  onChangeSearch = (e) => {
      console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
    console.log(this.state.search);

  };

  render(){

    const regEx = new RegExp(this.state.search,'i');
    const items = this.state.items.filter(
        item=>{
            if(this.state.search) return regEx.test(item.name);
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
          <GridList
            cols={this.props.open ? 4 : 5}
              cellHeight={'auto'}
               style={{width:'100%'}}>

            {items.map(i=>{
              return(
                <GridTile cols={1} key={i.id}><ProjectCard name={i.name}/></GridTile>
              );
            })}


          </GridList>
        </div>
      </div>
    );
  }
}

export default AdminProjects;
