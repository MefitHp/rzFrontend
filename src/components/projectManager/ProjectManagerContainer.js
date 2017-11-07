import React, { Component } from 'react';
import ControlBar from './ControlBar';
import { Route } from 'react-router-dom';
import {Basicos} from './Basicos';
import Rewards from './Rewards';
import api from '../../Api/Django';
import './Manager.css';
import firebase from '../../Api/firebase';
import DescriptionPage from './DescriptionPage';
import toastr from 'toastr';
import Actualizaciones from './Actualizaciones';
import Aportaciones from './Aportaciones';
import PreviewPage from './PreviewPage';
import MainLoader from '../common/MainLoader';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {withRouter} from 'react-router-dom';
import * as navActions from '../../redux/actions/navBarNameActions';
import * as filterActions from '../../redux/actions/filterActions';
import {saveProject} from '../../redux/actions/projectsActions';
import {addReward} from "../../redux/actions/rewardsActions";



class ProjectManagerContainer extends Component {

    constructor(){
        super();

        this.state = {
            project: {},
            open: false,
            ancho: document.documentElement.clientWidth < 600,
            loading: false,
            fetched:false
        }


    }

    onChangeBasicos = (e, index, value=null) => {
        console.log(value);
        let project = this.state.project;
        let field = e.target.name;
        if(value){
            project["category"] =  [value];
        }else{
            project[field] = e.target.value;
        }

        this.setState({project});
    };

    saveImage = (e) => {
        this.setState({loading:true})
        //console.log(e.target.files[0]);
        const file = e.target.files[0];
        console.log(file);
        if (file.size > 2000000 ) return toastr.warning("Tu imagen supera el tamaño máximo");
        let storageRef = firebase.storage().ref(JSON.stringify(this.state.project.id));
        storageRef.put(file)
            .then(s=>{
                console.log(s);
                toastr.success("Tu imagen se subió correctamente");
                const project = this.state.project;
                project.photo = s.downloadURL;
                this.props.saveProject(project);
                this.setState({loading:false})

            })
            .catch(e=>{
                toastr.error("No se pudo subir tu archivo, intenta de nuevo", e)
            });

    };

    saveVideo = (e) => {
      let value = e.target.value;
      let {project} = this.state;
      project["video"] = value;
      //value = value.split("/");
      this.props.saveProject(project)
          .then(r=>{
              toastr.success("Tu video se guardó correctamente");
              this.setState({project});
          })
          .catch(e=>toastr.error("no se pudo guardar tu video"));
    };

    saveBasicos = () => {
        //e.preventDefault();
        let project = this.state.project;
        if(project.name.length < 5) return toastr.error("El nombre de el proyecto es muy corto");
        else if(project.goal < 1000) return toastr.error("El monto minimo es de 1000");
        else if(project.summary === null || project.summary.length < 7) return toastr.error("El resumen de tu proyecto es muy corto");
        else{
            //preparamos la categoría:
            //project.category = [project.category[0].id];
            this.props.saveProject(project)
                .then(()=>toastr.success("Tus cambios se guardaón"))
                .catch(()=>toastr.error("No se pudo guardar"));
        }

        //delete project.photo; // evitar subir link en vez de archivo

     // api.updateProject(this.state.project.id, project)
       //   .then(r=>toastr.success('proyecto guardado'))
         // .catch(e=>toastr.error('problema al guardar ',e));
    };

    updateProject = (input) => {
        this.setState({
            loading:true
        });
        let project = this.state.project;
        project.description = input;
        this.props.saveProject(project)
            .then(project=>{
                toastr.success('Descripción guardada con éxito');
                console.log(project);
                this.setState({loading:false, project})
            })
            .catch(e=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
        //delete project.photo; // evitar subir link en vez de archivo
        // api.updateProject(this.state.project.id, project)
        //     .then((project)=>{
        //         console.log(project);
        //         toastr.success('Descripción guardada con éxito');
        //         this.setState({
        //             loading:false,
        //             project
        //         });
        //     })
        //     .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
    };

    getProjectAgain = () => {
        api.getProject(this.props.match.params.projectId)
            .then(project=>{
                if(project.detail === "No encontrado."){
                    this.props.history.push('/');
                }
                this.setState({project, loading:false});
                // console.log('dentro', project);

                console.log('state: ',this.state.project);
            })
            .catch(e=>{
                alert('no se pudo',e);
                this.props.history.push('/');

            });
    };


    handleToggle = () => {
       // this.setState({
         //   open: !this.state.open
       // });

        this.props.toggleMenu();

    };


    basicsPage = () => {
    return (
        <Basicos
            {...this.state.project}
            onChange={this.onChangeBasicos}
            onSave={this.saveBasicos}
            saveImage={this.saveImage}
            saveVideo={this.saveVideo}
            loading={this.state.loading}
            categories={this.props.categories}
        />
    );
};

    rewardsPage = () => {
        return (
            <Rewards
                project={this.state.project}
                loading={this.state.loading}
                history={this.props.history}
                updateProject={this.getProjectAgain}
                addReward={this.props.addReward}
                rewards={this.props.rewards}

            />
        );
    };

    descPage = () => {
        return(
            <DescriptionPage
                project={this.state.project}
                loading={this.state.loading}
                onSave={this.updateProject}
            />
        );
    };

    updates = () => {
      return(
          <Actualizaciones
              project={this.state.project}
              match={this.props.match} />
      );
    };

    inputs = () => {
      return(
          <Aportaciones
            project={this.state.project}
          />
      );
    };

    preview = () => {
      return (
          <PreviewPage
            project={this.state.project}
          />
      );
    };

    componentDidMount(){

        //redux
        this.setState({
            project:this.props.project,
            fetched:this.props.fetched,
            open:this.props.menu
        });

    }

    componentWillReceiveProps(p){
        //redux
        this.setState({project:p.project, fetched:p.fetched, open:p.menu});
    }

    componentWillUnmount(){
        //redux
        this.setState({
            project:this.props.project,
            fetched:this.props.fetched,
            open:this.props.menu
        });
    }



    render(){
        const {fetched, open, ancho} = this.state;
        if(!fetched) return  <MainLoader/>;
        return(
            <div>
                {/*<ManageNavBar elMatch={this.props.match} handleToggle={this.handleToggle} />*/}

                <div>
                    <ControlBar handleToggle={this.handleToggle} ancho={ancho} open={open} project={this.state.project} elMatch={this.props.match} />
                    <div className={this.state.open ? 'el-ancho':'pura-transition'}>
                        {/*<h4>{this.props.match.params.projectId}</h4>*/}

                        {/*<Route path={`${this.props.match.url}/:topicId`} component={Seccion}/>*/}


                        <Route path={`${this.props.match.url}/basicos`} render={this.basicsPage} />
                        <Route path={`${this.props.match.url}/descripcion`} render={this.descPage} />
                        <Route path={`${this.props.match.url}/recompensas`} render={this.rewardsPage} />
                        <Route path={`${this.props.match.url}/actualizaciones`} render={this.updates} />
                        <Route path={`${this.props.match.url}/aportaciones`} render={this.inputs} />
                        <Route path={`${this.props.match.url}/preview`} render={this.preview}/>

                        <Route exact path={this.props.match.url} render={this.basicsPage}/>



                    </div>
                </div>


            </div>
        );
    }
}

function selectProject(projects, id){
    console.log("llego: ", projects, id);
    if(projects !== undefined) return projects.filter(p=>p.id == id)[0]; //falla con ===
    return {};
}

function mapStateToProps(state, ownProps){
    const projectId = ownProps.match.params.projectId;
    const userProjects = state.user.projects;
    let project = {};
    if(projectId !== undefined && userProjects !== undefined ){
        project = selectProject(userProjects, projectId);
    }
    //console.log(state);
    //console.log(project);
    //console.log(Object.keys(project).length > 0);
    console.log(project.rewards);
    console.log(project);
    return {
        project,
        fetched:Object.keys(project).length > 0,
        menu:state.filter.menu,
        categories:state.category.list,
        rewards:project.rewards
    }
}
function mapDispatchToProps(dispatch){
    dispatch(navActions.changeName("administrar"));
    return {
        changeName: bindActionCreators(navActions.changeName, dispatch),
        toggleMenu: bindActionCreators(filterActions.toggleMenu, dispatch),
        saveProject: bindActionCreators(saveProject, dispatch),
        addReward: bindActionCreators(addReward, dispatch),
    };
}
export const ManagerPage =  connect(mapStateToProps, mapDispatchToProps)(ProjectManagerContainer);
