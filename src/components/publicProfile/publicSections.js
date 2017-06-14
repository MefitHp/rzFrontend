import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import MyProjectCard from './myProjectCard';



class PublicProjects extends Component{
  render(){
    return(
      <div>
        <GridList cols={4} cellHeight={'auto'}>
          <GridTile cols={3}>
            <MyProjectCard/>
          </GridTile>
          <GridTile cols={1}>
            <MyProjectCard/>
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
           <Route path={`/users/usuario/projects`} component={PublicProjects}/>
           <Route path={`/users/usuario/inputs`} component={PublicInputs}/>
        </div>
    );
  }
}

export default PublicSections;
