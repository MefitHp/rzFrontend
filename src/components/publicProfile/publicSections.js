import React, {Component} from 'react';
import { Route } from 'react-router-dom';



class PublicProjects extends Component{
  render(){
    return(
      <div>Projetcs</div>
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
