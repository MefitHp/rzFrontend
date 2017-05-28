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
                this.setState({project});
                // console.log('dentro', project);
                console.log('state: ',this.state.project)
            })
            .catch(e=>alert('no se pudo',e));
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
                <ControlBar elMatch={this.props.match} />
                <h4>{this.props.match.params.projectId}</h4>
                <Route path={`${this.props.match.url}/:topicId`} component={Seccion}/>
                <Route path={`${this.props.match.url}/basicos`} render={this.MyProjectPage} />
                <Route exact path={this.props.match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        );
    }
}

const Seccion = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default ProjectManagerContainer;