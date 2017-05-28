import React, { Component } from 'react';


class Basicos extends Component {
    render(){
        const { project } = this.props;
        return(
            <h1>Basicos de {project.name} </h1>
        );
    }
}

export default Basicos;