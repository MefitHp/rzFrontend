import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/oneProjectCard';



class PublicProjects extends Component{
  render(){
    return(
      <div>
        <GridList cols={1} cellHeight={'auto'}>
          <GridTile cols={1}>
            <ProjectCard/>
          </GridTile>
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
  render(){
    return(
        <div>
           <Route path={`/users/:userId/projects`} component={PublicProjects}/>
           <Route path={`/users/:userId/inputs`} component={PublicInputs}/>
             <Route exact path="/users/:userId" component={PublicProjects}/>
        </div>
    );
  }
}

export default PublicSections;
