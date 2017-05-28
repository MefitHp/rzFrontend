import React, { Component } from 'react';
import ControlBar from './ControlBar';
import { Route } from 'react-router-dom';
import Basicos from './Basicos';
import api from '../../Api/Django';

class ProjectManagerContainer extends Component {

    constructor(){
        super();

        this.state = {
            project: {}
        }

    }

    componentDidMount(){
        api.getProject(this.props.match.params.projectId)
            .then(project=>{
                if(project.detail === "No encontrado."){
                    this.props.history.push('/');
                }
                this.setState({project});
                // console.log('dentro', project);
                console.log('state: ',this.state.project)
            })
            .catch(e=>{
                alert('no se pudo',e);
                this.props.history.push('/');
            });
    }

    MyProjectPage = () => {
    return (
        <Basicos
            project={this.state.project}
        />
    );
}


    render(){

        return(
            <div>
                <ControlBar project={this.state.project} elMatch={this.props.match} />
                <div style={{marginLeft:200}}>
                    {/*<h4>{this.props.match.params.projectId}</h4>*/}

                    {/*<Route path={`${this.props.match.url}/:topicId`} component={Seccion}/>*/}
                    <Route path={`${this.props.match.url}/basicos`} render={this.MyProjectPage} />
                    <Route exact path={this.props.match.url} render={() => (
                        <h1>Please select a topic.</h1>
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