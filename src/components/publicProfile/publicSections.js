import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/oneProjectCard';



class PublicProjects extends Component{

  render(){
    return(
      <div>
        <GridList cols={1} cellHeight={'auto'}>
          {this.props.projects.map(p=>{
            return(
              <GridTile cols={1}>
                <ProjectCard
                  location={'Guadalajara'}
                  goal={p.goal}
                  inputs={'0'}
                  description={p.description}
                  name={p.name}/>
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}
class PublicInputs extends Component{
  render(){
    return(
      <div>Inputs</div>
    );
  }
}

class PublicSections extends Component{

  publicProjects = () => {
    return(
      <PublicProjects projects={this.props.projects}/>
    );
  }

  render(){
    return(
        <div>
           <Route path={`/users/:userId/projects`} render={this.publicProjects}/>
           <Route path={`/users/:userId/inputs`} component={PublicInputs}/>
             <Route exact path="/users/:userId" render={this.publicProjects}/>
        </div>
    );
  }
}

export default PublicSections;
