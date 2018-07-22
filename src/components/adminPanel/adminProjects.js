import React, {Component} from 'react';
import {connect} from 'react-redux';


//import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';
import toastr from 'toastr';

import {Link} from 'react-router-dom';

import { Toggle, Paper, Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn, TextField, SelectField, MenuItem, Dialog, FlatButton} from 'material-ui';

import MainLoader from '../../components/common/MainLoader';
import IconButton from 'material-ui/IconButton';
import EditarIcon from 'material-ui/svg-icons/content/create';

//2018
import {getProjectsAdmin, updateProjectAdmin, getCategories} from '../../Api/nodejs';





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
          item:'',
          //2018
          projects:[],
          project:{},
          toggled:false,
          categories:[]

      };


  }
  componentWillMount(){

    getProjectsAdmin()
    .then(projects=>{
        console.log(projects)
        this.setState({projects, loading:false, items:projects})
    })
    .catch(e=>toastr.error(e))
    getCategories()
    .then(categories=>{
        this.setState({categories})
    })
  }

  updateProject = () => {
    updateProjectAdmin(this.state.project)
    .then(project=>{
        const projects = this.state.projects.map(p=>{
            if(p._id === project._id) return project
            return p
        })

        this.setState({projects})
        toastr.info('Se ha actualizado')

    })
    .catch(e=>toastr.error(e))
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
    handleOpen = (item) => {
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
    const {project, toggled} = this.state;
    project.promoted = toggled;
    this.updateProject()
    this.handleClose()
  };
  validarProject=()=>{
      const {project, toggled} = this.state;
      project.status = toggled ? "PUBLISHED" : "VALIDATING";
      this.updateProject()
      this.handleClose()
  };
    onToggle2 = (project, e, toggled) => {
        this.setState({open2: true, toggled, project});
        //this.setState({item});
        //this.handleOpen2()

    };
    onToggle = (project, e, toggled) => {

        this.setState({open: true, toggled, project});
        //this.handleOpen()

    };

  render(){
    const {categories} = this.state;
    const regEx = new RegExp(this.state.search,'i');
      let items = this.state.projects;
      //console.log(items)


      if(this.state.search){
          items = items.filter(item => regEx.test(item.title) || regEx.test(item.body) || regEx.test(item.summary) );
      }

      if(this.state.value) {
          items = items.filter(item => item.category === this.state.value);
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
                    
                    {categories.map(c=>{
                        return (
                            <MenuItem value={c.name} primaryText={c.name} />
                        )
                    })}

                    {/* <MenuItem value={'Tecnología'} primaryText="Tecnología" />
                    <MenuItem value={'Innovación'} primaryText="Innovación" />
                    <MenuItem value={'Sociedad'} primaryText="Sociedad" />
                    <MenuItem value={'Salud'} primaryText="Salud" />
                    <MenuItem value={'Vivienda'} primaryText="Vivienda" />
                    <MenuItem value={'Deporte'} primaryText="Deporte" /> */}


                </SelectField>
                < SelectField value={this.state.status} onChange={this.handleStatus} floatingLabelText="Status" floatingLabelFixed={true}>
                    <MenuItem value={''} primaryText="Todos" />
                    <MenuItem value={'PUBLISHED'} primaryText="Publicado" />
                    <MenuItem value={'DRAFT'} primaryText="Borrador" />
                    <MenuItem value={'VALIDATING'} primaryText="En Validación" />
                    <MenuItem value={'ARCHIVED'} primaryText="Eliminado" />



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
                                        <Link to={"/detail/"+i._id}>{i.title}</Link>
                                    </TableRowColumn>
                                   <TableRowColumn>{i.category}</TableRowColumn>
                                   <TableRowColumn>$ {i.goal}</TableRowColumn>
                                   <TableRowColumn>$ {i.collected}</TableRowColumn>
                                   <TableRowColumn>{i.status}</TableRowColumn>
                                   <TableRowColumn>
                                       <Toggle
                                           onToggle={(e, value)=>this.onToggle(i, e, value)}
                                           toggled={i.promoted}
                                       />

                                   </TableRowColumn>
                                   <TableRowColumn>
                                       <Toggle
                                           onToggle={(e, value)=>this.onToggle2(i, e, value)}
                                           toggled={i.status === "PUBLISHED"}
                                       />
                                   </TableRowColumn>
                                   <TableRowColumn>
                                       <Link to={"/admin/edit/"+i._id}>
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
                title="¿Cambiarás el status del proyecto?"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >

            </Dialog>

            <Dialog
                title="¿Quieres cambiar el status de este proyecto?"
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