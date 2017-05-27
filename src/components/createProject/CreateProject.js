import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './CreateProject.css';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';



class CreateProject extends Component{
    constructor(){
        super();

        this.state = {
            finished: false,
            stepIndex: 0,
        };
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    }

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    }

    renderStepActions(step) {
        const {stepIndex} = this.state;

        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Terminar' : 'Siguiente'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render(){
        const { stepIndex, finished } = this.state
        return(
        <Paper zDepth={3} className="el-paper" >
            <h1>Consigue fondos para tu Gran proyecto!</h1>
            <Divider />



            <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Nombra tu gran proyecto</StepLabel>
                        <StepContent>
                            <p>
                                Usa un nombre que capture a tu audiencia y
                                que describa muy bien el fin de tu proyecto
                                para que todos puedan reconocerlo fácilmente
                            </p>
                            <TextField
                                hintText="Mi grandioso Proyecto"
                                floatingLabelText="Nombre de tu proyecto"
                            />
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Introduce una cantidad</StepLabel>
                        <StepContent>
                            <p>Coloca la cantidad correcta con la que tu proyecto podrá despegar,
                                 sé realista y usa una meta alcanzable.</p>
                            $ <TextField
                                hintText="50000"
                                floatingLabelText="Cuanto necesitas recaudar"
                            />
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Solo un paso más</StepLabel>
                        <StepContent>
                            <p>
                                Al hacer clic en finalizar estas aceptando las politicas de privacidad,
                                terminos y condiciones, así como las reglas de la comunidad.
                                ¡Mucho éxito, lanza tu proyecto!
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished && (
                    <p style={{margin: '20px 0', textAlign: 'center'}}>
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                this.setState({stepIndex: 0, finished: false});
                            }}
                        >
                            Ahora
                        </a> te redireccionaremos...
                    </p>
                )}
            </div>





        </Paper>


        );
    }
}



export default CreateProject;