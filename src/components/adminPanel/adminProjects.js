import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';
import toastr from 'toastr';
import Badge from 'material-ui/Badge';
import {Link} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Check from 'material-ui/svg-icons/action/done';
import MainLoader from '../../components/common/MainLoader';
import IconButton from 'material-ui/IconButton';
import Detail from 'material-ui/svg-icons/content/add-box';
import Edit from 'material-ui/svg-icons/content/create';
import Review from 'material-ui/svg-icons/action/info';
import Tache from 'material-ui/svg-icons/action/highlight-off';


class AdminProjects extends Component{


  constructor(props) {
      super(props);
      this.state = {
          value: 'Emprendedor',
          ancho: document.documentElement.clientWidth < 600,
          search:null,
          loading:true,
          items: []

      };


  }
  componentWillMount(){
    api.getAxiosAllProjects()
        .then(r=>{
            // console.log(r.data);
            this.setState({items:r, loading:false});
            console.log(r)
            console.log(this.state)
        })
        .catch(e=>{
          toastr.error('no se puedieron cargar los proyectos, revisa tu conexción a internet')
          console.log(e);
        });
    }


  handleChange = (event, index, value) => {
    this.setState({value});
    this.changeCategory(value);
  }

  changeCategory = (value) => {
      this.getAll()
          .then(
              ()=>{

                  if(value){
                      const {items} = this.state;
                      // console.log('change', items);
                      const cat = value;
                      // const newArray = _.sortBy(items, 'category', function(i){
                      const newArray = items.filter(function(i){
                          return i.category[0].slug === cat
                      });
                      this.setState({items:newArray});



                  }
              }
          );
  };

  getAll = () =>{

  };
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
        {this.state.loading && <MainLoader/>}
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
                  < DropDownMenu value={this.state.value} onChange={this.handleChange}>
                      <MenuItem value={null} primaryText="Todos" />
                      <MenuItem value={'tecnologia'} primaryText="Tecnología" />
                      <MenuItem value={3} primaryText="Innovación" />
                      <MenuItem value={4} primaryText="Sociedad" />
                      <MenuItem value='salud' primaryText="Salud" />
                      <MenuItem value={6} primaryText="Vivienda" />
                      <MenuItem value='deporte' primaryText="Deporte" />


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



        <div style={this.props.open ?{paddingTop:'13%'} : { paddingTop:'12%' }}>
          <GridList
            cols={this.props.open ? 4 : 5}
              cellHeight={'auto'}
               style={{width:'100%'}}>

            {items.map(i=>{
              return(
                <GridTile cols={1} key={i.id} style={{position:'relative'}}>
                    <Link to={'/admin/edit/' + i.id}>
                      <IconButton tooltip="Modificar"
                        style={{position:'absolute', top:0, left:0}}>
                        <Edit/>
                      </IconButton>
                    </Link>
                    <Link to={'/detail/' + i.id}>
                      <IconButton tooltip="Detalle"
                        style={{position:'absolute', top:0, left:30}}>
                        <Detail />
                      </IconButton>
                    </Link>
                    <Badge
                      style={{position:'absolute', right:0, top:0, zIndex:1,}}
                      badgeStyle={
                        i.status === 'editing' ? {background:'blue'} :
                        i.status === 'review' ? {background:'yellow'} :
                        i.status === 'rejected' ? {background:'red'} :
                        i.status === 'approved' ? {background:'green'}: ''
                      }
                      badgeContent={
                        i.status === 'editing' ? <Edit/>:
                        i.status === 'review' ? <Review/>:
                        i.status === 'rejected' ? <Tache/>:
                        i.status === 'approved' ? <Check/>: ''
                      }/>
                  <ProjectCard name={i.name} goal={i.goal}/>
                </GridTile>
              );
            })}
          </GridList>

        </div>
      </div>
    );
  }
}

export default AdminProjects;
