import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {CardMedia, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
// import toastr from 'toastr';
import Snackbar from 'material-ui/Snackbar';

import rocket from '../../assets/rocket-circle.png';



import './BlissCard.css';



class BlissCard extends Component {
    constructor(){
        super();

        this.state = {
            subtitle: "Los datos básicos de tu proyecto son el principio, estos se componen de el nombre de tu proyecto y la cantidad que buscas recaudar.",
            title: "Básicos",
            image: rocket,
            editing: true,
            open: false
        }

    }

    handleToggle = () => {
        this.setState({editing:!this.state.editing});
    };

    handleSave = () => {
        // toastr.success('Cambios aplicados');
        this.setState({
            open: true,
        });
    };


    render(){
        const { editing } = this.state;
        const { project } = this.props;
        return(

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex">
                    <CardMedia style={{flex:1, maxWidth:300, marginRight:20}} >
                        <img alt="FixterGeek" src={this.state.image} />
                    </CardMedia>
                    <div style={{flex:2}}>
                        <CardTitle title={this.state.title} subtitle={this.state.subtitle} />
                        <Toggle
                            toggled={editing}
                            onToggle={this.handleToggle}
                            labelPosition="right"
                            label="Habilitar. Puedes editar los datos de tu proyecto mientras no se encuentre publicado"
                        />
                       <div>
                            <TextField
                                style={{
                                    borderColor:'red'
                                }}
                                floatingLabelText="Nombre de tu proyecto"
                                disabled={editing}
                                value={project.name}
                            />
                           <br/>
                           <TextField
                               style={{
                                   borderColor:'red'
                               }}
                               floatingLabelText="Cantidad de tu proyecto"
                               disabled={editing}
                               value="200"
                           />
                           <RaisedButton
                               backgroundColor="#a4c639"
                               buttonStyle={{color:'white'}}
                               disabled={editing}
                               onTouchTap={this.handleSave}
                           >
                               Guardar
                           </RaisedButton>
                        </div>
                    </div>

                </div>
                <Snackbar
                    open={this.state.open}
                    message="Cambios guardados"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </Paper>

        );
    }
}



BlissCard.propTypes = {
    project: PropTypes.object.isRequired
};

export default BlissCard;