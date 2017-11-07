import React, {Component} from 'react';
import {connect} from 'react-redux';


//import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';
import toastr from 'toastr';

import {Link} from 'react-router-dom';

import { Toggle, Paper, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem, Dialog, FlatButton} from 'material-ui';

import MainLoader from '../../components/common/MainLoader';
import IconButton from 'material-ui/IconButton';
import DetailIcon from 'material-ui/svg-icons/action/info';
import EditarIcon from 'material-ui/svg-icons/content/create';





class AdminProjects extends Component{



  constructor(props) {
      super(props);
      this.state = {
          value: '',
          open: false,
          open2:false,
          status:'',
          ancho: document.documentElement.clientWidth < 600,
          search:null,
          loading:true,
          items: [],
          item:''

      };


  }
  componentWillMount(){

  }
  componentWillReceiveProps(nP){

  }


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

    //modalConfirmation
    handleOpen = () => {
        this.setState({open: true});
    };
    handleOpen2 = () => {
        this.setState({open2: true});
    };

    handleClose = () => {
        this.setState({open: false, open2:false});
    };


  onChangeSearch = (e) => {
    this.setState({
        search: e.target.value
    });


  };
  destacarProject=()=>{
      const project = this.state.item;
      project.destacado = !project.destacado;
      api.updateProject(project.id, project).then(r=>{
          toastr.success('cambió el status del proyecto')
      })
      this.handleClose()
  };
  validarProject=()=>{
      const project = this.state.item;
      project.validated = !project.validated;
      api.updateProject(project.id, project).then(r=>{
          toastr.success('cambió el status del proyecto')
      })
      this.handleClose()
  };
    onToggle2 = (item) => {

        this.setState({item});
        this.handleOpen2()

    };
    onToggle = (item) => {

        this.setState({item});
        this.handleOpen()

    };

  render(){

    const regEx = new RegExp(this.state.search,'i');
      let items = this.props.projects.slice();
      console.log(items)


      if(this.state.search){
          items = items.filter(item => regEx.test(item.name));
      }

      if(this.state.value) {
          items = items.filter(item => item.category[0].name === this.state.value);
      }
      if(this.state.status) {
          items = items.filter(item => item.status === this.state.status);
      }
//for de dialogs
      const actions = [
          <FlatButton
              label="Cancelar"
              secondary={true}
              onTouchTap={this.handleClose}
          />,
          <FlatButton
              label="Aceptar"
              primary={true}
              onTouchTap={this.destacarProject}
          />,
      ];
      const actions2 = [
          <FlatButton
              label="Cancelar"
              secondary={true}
              onTouchTap={this.handleClose}
          />,
          <FlatButton
              label="Aceptar"
              primary={true}
              onTouchTap={this.validarProject}
          />,
      ];



    return(
      <div>
        {!this.props.fetched ? <MainLoader/>:

        <div className='projectResp'>
            <Paper
                style={{
                    marginBottom:'1%',
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:'1%'}}>
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
                            <TableHeaderColumn>Destacado</TableHeaderColumn>
                            <TableHeaderColumn>Validado</TableHeaderColumn>
                            <TableHeaderColumn>Editar</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {items.map((i, key)=>{
                            return(
                               <TableRow key={key}>
                                    <TableRowColumn>
                                        <Link to={"/detail/"+i.id}>{i.name}</Link>
                                    </TableRowColumn>
                                   <TableRowColumn>{i.category.length>0?i.category[0].name:'None'}</TableRowColumn>
                                   <TableRowColumn>$ {i.goal}</TableRowColumn>
                                   <TableRowColumn>$ {i.reached}</TableRowColumn>
                                   <TableRowColumn>{i.status}</TableRowColumn>
                                   <TableRowColumn>
                                       <Toggle
                                           onToggle={()=>this.onToggle(i)}
                                           toggled={i.destacado}
                                       />

                                   </TableRowColumn>
                                   <TableRowColumn>
                                       <Toggle
                                           onToggle={()=>this.onToggle2(i)}
                                           toggled={i.validated}
                                       />
                                   </TableRowColumn>
                                   <TableRowColumn>
                                       <Link to={"/admin/edit/"+i.id}>
                                           <IconButton>
                                               <EditarIcon />
                                           </IconButton>
                                       </Link>
                                   </TableRowColumn>

                               </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </Paper>

            <Dialog
                title="¿Permitir a este usuario publicar proyectos?"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >

            </Dialog>

            <Dialog
                title="¿Quieres cambiar el status de este usuario?"
                actions={actions2}
                modal={false}
                open={this.state.open2}
                onRequestClose={this.handleClose}
            >

            </Dialog>




        </div>}
      </div>
    );
  }
}

function mapStateToProps(getState){
    return{
        projects:getState.projects,
        fetched:getState.projects!==null && getState.projects!==undefined
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

AdminProjects = connect(mapStateToProps, mapDispatchToProps)(AdminProjects);

export default AdminProjects;