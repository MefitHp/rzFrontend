import React, { Component } from 'react';
import ControlBar from './ControlBar';
import { Route } from 'react-router-dom';
import Basicos from './Basicos';
import Rewards from './Rewards';
import api from '../../Api/Django';
import './Manager.css';
import ManageNavBar from './ManageNavBar';
import DescriptionPage from './DescriptionPage';
import toastr from 'toastr';
import Actualizaciones from './Actualizaciones';
import Aportaciones from './Aportaciones';
import PreviewPage from './PreviewPage';
import MainLoader from '../common/MainLoader';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';




class ProjectManagerContainer extends Component {

    constructor(){
        super();

        this.state = {
            project: {},
            open: true,
            ancho: document.documentElement.clientWidth < 600,
            loading: false
        }


    }

    onChangeBasicos = (e) => {
        let project = this.state.project;
        let field = e.target.name;
        project[field] = e.target.value;
        this.setState({project});
    };

    saveImage = (file) => {
        let project = this.state.project;
        project.photo = file;
        this.setState({project});
    };

    saveBasicos = (e) => {
        let project = this.state.project;
        delete project.photo; // evitar subir link en vez de archivo

      api.updateProject(this.state.project.id, project)
          .then(r=>toastr.success('proyecto guardado'))
          .catch(e=>toastr.error('problema al guardar ',e));
    };

    updateProject = (input) => {
        this.setState({
            loading:true
        });
        let project = this.state.project;
        project.description = input;
        delete project.photo; // evitar subir link en vez de archivo
        api.updateProject(this.state.project.id, project)
            .then((project)=>{
                console.log(project);
                toastr.success('Descripción guardada con éxito');
                this.setState({
                    loading:false,
                    project
                });
            })
            .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
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
        this.setState({
            open: !this.state.open
        });
    };

    componentDidMount(){

        //redux

    }

    basicsPage = () => {
    return (
        <Basicos
            project={this.state.project}
            onChange={this.onChangeBasicos}
            onSave={this.saveBasicos}
            saveImage={this.saveImage}
            loading={this.state.loading}
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

    componentWillReceiveProps(p){
        this.setState({project:p.project, fetched:p.fetched});
    }


    render(){
        const {fetched} = this.state;
        return(
            <div>
                <ManageNavBar elMatch={this.props.match} handleToggle={this.handleToggle} />

                {!fetched ? <MainLoader/> :
                    <div>
                        <ControlBar handleToggle={this.handleToggle} ancho={this.state.ancho} open={this.state.open} project={this.state.project} elMatch={this.props.match} />
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
                }



            </div>
        );
    }
}

function selectProject(projects, id){
     return projects.filter(p=>p.id == id)[0]; //== porque no es un entero y con 3 falla
}

function mapStateToProps(state, ownProps){
    let project = null;
    if(state.user.projects !== undefined) {
        project = selectProject(state.user.projects, ownProps.match.params.projectId);
        if(project === undefined) {
            toastr.error("Este proyecto no es parte de tus proyectos");
            ownProps.history.push("/login");
        }
    }
    console.log("A ver si ya?, ", project);
    console.log(state.user);
    return {
        project,
        fetched:project !== null && project !== undefined
    };
}
function mapDispatchToProps(dispatch){
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagerContainer);
