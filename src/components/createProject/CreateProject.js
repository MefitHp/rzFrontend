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
import CircularProgress from 'material-ui/CircularProgress';
import toastr from 'toastr';
import LaBarra from '../laBarra/LaBarra';
import MainLoader from '../common/MainLoader';
//redux
//import {store} from '../../index';
import {submitNewProject} from '../../redux/actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';





class CreateProjectContainer extends Component {
    constructor() {
        super();


        const user = JSON.parse(localStorage.getItem('userInfo'));


        this.state = {
            user: {},
            fetched:false,
            finished: false,
            stepIndex: 0,
            project: {
                user: user,
                name: '',
                amount: 0,
                photoURL: null

            },
            completed: 0
        };

        if (user) {
            this.setState({photoURL: user.photoURL});
        }
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('userInfo'));

        if (!user) {
            toastr.warning('Debes loguearte primero');
            this.props.history.push('/login?next=/new');
        }

    }

    componentWillReceiveProps(p){
        this.setState({
            user: p.user,
            fetched:p.fetched
        });
    }

    componentDidMount(){
        this.setState({
            user: this.props.user,
            fetched:this.props.fetched
        });
    }



    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions = (step) => {
        const {stepIndex} = this.state;
        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Terminar' : 'Siguiente'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={stepIndex === 2 ? this.submitProject : this.handleNext}
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
    };

    handleChange = (e) => {
        const field = e.target.name;
        let project = this.state.project;
        project[field] = e.target.value;
        this.setState({project});
    };

    submitProject = () => {
        if (!this.state.user.profile.profile.canPublish) return toastr.error("No tienes permiso para publicar U_U");
        const user = JSON.parse(localStorage.getItem('userInfo'));
        const {project} = this.state;
        if (user) {
            const photoURL = user.photoURL;
            project.photoURL = photoURL;
        }

        this.handleNext();

        this.props.submitNewProject(project)
            .then(r => {
                toastr.success("¡Fabuloso, tu proyecto se ha guardado!");
                setTimeout(()=>{
                    this.props.history.push(`/manage/${r.id}`);
                }, 1000);


            })
            .catch(e => {
                console.log(e);
                toastr.error("No se puede publicar");
            });


    };

    render = () => {
        const {stepIndex, finished, fetched} = this.state;
        return (
            <div>
                <LaBarra history={this.props.history}/>

                {!fetched ? <MainLoader/> :

                    <Paper zDepth={3} className="el-paper">
                        <h1>Consigue fondos para tu Gran proyecto!</h1>
                        <Divider/>


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
                                            value={this.state.project.name}
                                            onChange={this.handleChange}
                                            name="name"
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
                                        value={this.state.project.amount}
                                        onChange={this.handleChange}
                                        name="amount"
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
                                <div>
                                    <p style={{margin: '20px 0', textAlign: 'center'}}>
                                        <a
                                            onClick={(event) => {
                                                event.preventDefault();
                                                this.setState({stepIndex: 0, finished: false});
                                            }}
                                        >
                                            Ahora
                                        </a> te redireccionaremos...

                                    </p>
                                    <CircularProgress/>
                                </div>


                            )}
                        </div>


                    </Paper>
                }

            </div>


        );
    }
}


function mapStateToProps(state){
    //console.log("checa el user: ",state.user);
    //console.log("checa el boolean: ",Object.keys(state.user).length !== 0);
    return {
        user:state.user,
        fetched:Object.keys(state.user).length !== 0
    }
}

function mapDispatchToProps(dispatch){
    return {
        submitNewProject: bindActionCreators(submitNewProject, dispatch)
    }
}

const CreateProject = connect(mapStateToProps, mapDispatchToProps)(CreateProjectContainer);
export default CreateProject;