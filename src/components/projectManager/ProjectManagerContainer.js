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




class ProjectManagerContainer extends Component {

    constructor(){
        super();

        this.state = {
            project: {},
            open: true,
            ancho: document.documentElement.clientWidth < 600,
            loading: true
        }


    }

    updateProject = (input) => {
        this.setState({
            loading:true
        });
        let project = this.state.project;
        project.description = input;
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


    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    componentDidMount(){
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


    }

    basicsPage = () => {
    return (
        <Basicos
            project={this.state.project}
        />
    );
};

    rewardsPage = () => {
        return (
            <Rewards
                project={this.state.project}
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


    render(){

        return(
            <div>
                <ManageNavBar handleToggle={this.handleToggle} />
                <ControlBar handleToggle={this.handleToggle} ancho={this.state.ancho} open={this.state.open} project={this.state.project} elMatch={this.props.match} />
                <div className={this.state.open ? 'el-ancho':'pura-transition'}>
                    {/*<h4>{this.props.match.params.projectId}</h4>*/}

                    {/*<Route path={`${this.props.match.url}/:topicId`} component={Seccion}/>*/}
                    <Route path={`${this.props.match.url}/basicos`} render={this.basicsPage} />
                    <Route path={`${this.props.match.url}/descripcion`} render={this.descPage} />
                    <Route path={`${this.props.match.url}/recompensas`} render={this.rewardsPage} />
                    <Route exact path={this.props.match.url} render={() => (
                        <span
                            style={{paddingTop:100}}
                        >Please select a topic.</span>
                    )}/>
                </div>

            </div>
        );
    }
}

// const Seccion = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );

export default ProjectManagerContainer;