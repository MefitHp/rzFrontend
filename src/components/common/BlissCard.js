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
            open: false,
            summary:'',
            maxText:140
        }

    }

    handleToggle = () => {
        this.setState({editing:!this.state.editing});
    };

    onSave = (e) => {
        this.setState({editing:true});
        this.props.onSave(e);
    };

    handleSave = () => {
        // toastr.success('Cambios aplicados');
        this.setState({
            open: true,
        });
    };


    render(){
        const { editing } = this.state;
        const { project, onChange } = this.props;
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
                                name="name"
                                style={{
                                    borderColor:'red'
                                }}
                                floatingLabelText="Nombre de tu proyecto"
                                disabled={editing}
                                value={project.name}
                                onChange={onChange}
                            />
                           <br/>
                           <TextField
                               name="goal"
                               style={{
                                   borderColor:'red'
                               }}
                               floatingLabelText="Cantidad de tu proyecto"
                               disabled={editing}
                               value={project.goal}
                               onChange={onChange}
                           />
                           
                           <TextField
                               name="summary"
                               style={{
                                   borderColor:'red'
                               }}
                               floatingLabelText="Describe tu proyecto en 140 caracteres"
                               disabled={editing}
                               value={project.summary}
                               onChange={onChange}
                               multiLine={true}
                               onInput={(e)=>{
                                   
                                   if(e.target.value.length < 141){
                                        this.setState({
                                            summary:e.target.value
                                        });
                                   }else{
                                       e.target.value = this.state.summary
                                   }
                                   this.setState({maxText:140 - e.target.value.length});
                               }}
                           />
                           <span>{this.state.maxText}</span>
                           <br/>
                           <RaisedButton
                               backgroundColor="#a4c639"
                               buttonStyle={{color:'white'}}
                               disabled={editing}
                               onTouchTap={this.onSave}
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