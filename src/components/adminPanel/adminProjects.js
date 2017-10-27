import React, {Component} from 'react';

import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';
import toastr from 'toastr';
import Badge from 'material-ui/Badge';
import {Link} from 'react-router-dom';

import {Avatar, Paper, Toggle, Dialog, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Check from 'material-ui/svg-icons/action/check-circle';
import MainLoader from '../../components/common/MainLoader';
import IconButton from 'material-ui/IconButton';
import DetailIcon from 'material-ui/svg-icons/action/info';
import EditarIcon from 'material-ui/svg-icons/content/create';
import Editor from 'material-ui/svg-icons/action/swap-vertical-circle';
import Review from 'material-ui/svg-icons/alert/error';
import Tache from 'material-ui/svg-icons/navigation/cancel';



  const colors = {
    orange:'#EC8112',
    green:'#89BE53',
    purple:'#991FA6',
    greeblue:'#4DB1EA',
    blue:'#76CECB'

  };
class AdminProjects extends Component{



  constructor(props) {
      super(props);
      this.state = {
          value: '',
          status:'',
          ancho: document.documentElement.clientWidth < 600,
          search:null,
          loading:true,
          items: []

      };


  }
  componentWillMount(){
    this.getAll()
  }

  getAll = () =>{
    return api.getAxiosAllProjects()
        .then(r=>{
            this.setState({items:r, loading:false});
        })
        .catch(e=>{
          toastr.error('no se puedieron cargar los proyectos, revisa tu conexción a internet')
        });

  };

  handleChange = (event, index, value) => {
        this.setState({value});
        //this.changeCategory(value);
    }
    handleStatus = (event, index, value) => {
        this.setState({status:value});
        //this.changeCategory(value);
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


  onChangeSearch = (e) => {
      console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
    console.log(this.state.search);

  };

  render(){

    const regEx = new RegExp(this.state.search,'i');
      let items = this.state.items.slice();

      if(this.state.search){
          items = items.filter(item => regEx.test(item.name));
      }

      if(this.state.value) {
          items = items.filter(item => item.category[0].name === this.state.value);
      }
      if(this.state.status) {
          items = items.filter(item => item.status === this.state.status);
      }



    return(
      <div>
        {this.state.loading && <MainLoader/>}

        <div className='projectResp'>
            <Paper
                style={{
                    marginBottom:'1%',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:'2%'}}>
                <TextField

                    style={{width:'30%'}}
                    hintText='Buscador'
                    onChange={this.onChangeSearch}/>
                < SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Categoría" floatingLabelFixed={true}>
                    <MenuItem value={''} primaryText="Todos" />
                    <MenuItem value={'Tecnología'} primaryText="Tecnología" />
                    <MenuItem value={'Innovación'} primaryText="Innovación" />
                    <MenuItem value={'Sociedad'} primaryText="Sociedad" />
                    <MenuItem value={'Salud'} primaryText="Salud" />
                    <MenuItem value={'Vivienda'} primaryText="Vivienda" />
                    <MenuItem value={'Deporte'} primaryText="Deporte" />


                </SelectField>
                < SelectField value={this.state.status} onChange={this.handleStatus} floatingLabelText="Status" floatingLabelFixed={true}>
                    <MenuItem value={''} primaryText="Todos" />
                    <MenuItem value={'review'} primaryText="En Revisión" />
                    <MenuItem value={'approved'} primaryText="Aprobado" />
                    <MenuItem value={'rejected'} primaryText="Rechazado" />
                    <MenuItem value={'editing'} primaryText="Editando" />



                </SelectField>
            </Paper>
            <Paper className="tabla-projects">
                <Table
                selectable={true}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Nombre</TableHeaderColumn>
                            <TableHeaderColumn>Categoría</TableHeaderColumn>
                            <TableHeaderColumn>Meta</TableHeaderColumn>
                            <TableHeaderColumn>Fondeado</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                            <TableHeaderColumn>Editar</TableHeaderColumn>
                            <TableHeaderColumn>Detalle</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {items.map(i=>{
                            return(
                               <TableRow>
                                    <TableRowColumn>{i.name}</TableRowColumn>
                                   <TableRowColumn>{i.category[0].name}</TableRowColumn>
                                   <TableRowColumn>$ {i.goal}</TableRowColumn>
                                   <TableRowColumn>$ {i.reached}</TableRowColumn>
                                   <TableRowColumn>{i.status}</TableRowColumn>
                                   <TableRowColumn>
                                       <Link to={"/admin/edit/"+i.id}>
                                           <IconButton>
                                               <EditarIcon />
                                           </IconButton>
                                       </Link>
                                   </TableRowColumn>
                                   <TableRowColumn>
                                       <Link to={"/detail/"+i.id}>
                                           <IconButton>
                                               <DetailIcon />
                                           </IconButton>
                                       </Link>
                                   </TableRowColumn>
                               </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </Paper>




        </div>
      </div>
    );
  }
}

export default AdminProjects;
