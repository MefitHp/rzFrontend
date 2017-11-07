import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import {Paper} from 'material-ui';
import ProjectCard from '../userProfile/oneProjectCard';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Detail from 'material-ui/svg-icons/action/info';
import SadIcon from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import {grey600} from 'material-ui/styles/colors';


import Compartir from './share';
import Card from "../card/Card";


const PublicProjects = ({projects}) => {
    console.log('Proyectos de nosequien', projects);
    let proyectosAutorizados =  (
        <GridTile key={1} cols={2} style={{position: 'relative'}}>
            <Paper zDepth={3} className="no-projects">
                <div className="card-no-projects">
                    <p>Este usuario no tiene proyectos</p>
                    <SadIcon color={grey600} style={largeIcon}/>
                </div>
            </Paper>
        </GridTile>
    );
    if (projects !== undefined) {
        if( projects.length > 0) {
            proyectosAutorizados = projects.map(p => {
                if (p.validated) {
                    return (
                        <GridTile key={p.id} cols={1} style={{position: 'relative'}}>
                            <Link to={'/detail/' + p.id}>
                                <IconButton
                                    tooltip="Detalle"
                                    tooltipPosition="bottom-right"
                                    iconStyle={{width: 20, height: 20,}}
                                    style={{
                                        position: 'absolute', top: 10, left: 10, width: 20,
                                        height: 20,
                                    }}>
                                    <Detail/>
                                </IconButton>
                            </Link>
                            <Compartir
                                pid={p.id}
                                pname={p.name}/>
                            <Card style={{margin:'auto'}} project={p}/>
                        </GridTile>
                    );
                }
            });
        }
    }
    let cols = 1;
    const mq = window.matchMedia( "(min-width: 500px)" );
    if (mq.matches) {
        cols = 2;
    }
    return (
        <div>
            <GridList cols={cols} cellHeight={'auto'}>
                {proyectosAutorizados}
            </GridList>
        </div>
    );
};

const largeIcon= {
    width: 80,
    height: 80,
};

// class PublicInputs extends Component{
//     render(){
//         return(
//             <div>Inputs</div>
//         );
//     }
// }

class PublicSections extends Component {
    publicProjects = () => {
        return(
            <PublicProjects
                projects={this.props.projects}
                match={this.props.match}
            />
        );
    };
    render() {
        return(
            <div>
                <Route path={`/users/:userId/projects`} render={this.publicProjects}/>
                {/*<Route path={`/users/:userId/inputs`} component={PublicInputs}/>*/}
                <Route exact path="/users/:userId" render={this.publicProjects}/>
            </div>
        );
    }
}

export default PublicSections;
