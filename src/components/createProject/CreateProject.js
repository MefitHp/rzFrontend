import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { RaisedButton, TextField, MenuItem, SelectField } from 'material-ui';
import CircularProgress from 'material-ui/CircularProgress';
import {saveProject, getCategories} from '../../Api/nodejs'

import toastr from 'toastr';
import './CreateProject.css';







class CreateProject extends Component {

        state = {
            categories:[],
            loading:false,
            user: {},
            project: {
                title: 'Mi fabuloso proyecto',
                goal: 50000,
                duration:3,
                summary: '',
                category: "Educación"

            },
            errors:{
                category:'Este campo es necesario'
            }
        }
    

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            toastr.warning('Debes loguearte primero');
            return this.props.history.push('/login?next=/new');
        }
        this.setState({user})
        getCategories()
        .then(categories=>{
            this.setState({categories})
        })

    }

    handleChange = (e) => {
        const field = e.target.name
        let {project} = this.state
        project[field] = e.target.value
        this.setState({project});
        this.validateFields()
    };

    selectHandler = (field,value) => {
        const {project} = this.state
        project[field] = value
        this.setState({project})
        this.validateFields()
    }

    validateFields = () => {
        const {project} = this.state;
        let errors = {};
        if(project.goal < 10000 ) {
            errors.goal = "El monto minimo es de 1000";
        }
        if(project.title.length < 8 ) {
            errors.title = "El titulo de tu proyecto es muy corto";
        }
        if(Object.keys(errors).length) {
            this.setState({errors});
        }else{
            this.setState({errors:{}});
        }
    };

    submitProject = () => {
        const {errors, project} = this.state
        if(Object.keys(errors).length) return toastr.error("Corrige los errores");
        if (!this.state.user.canPublish) return toastr.error("No tienes permiso para publicar U_U");
        this.setState({loading:true})
        //const {project} = this.state;
        saveProject(project)
        .then(item=>{
            this.props.history.push(`/manage/${item._id}`)
        })
        .catch(e=>{
            console.log(e)
            toastr.error('No se pudo guardar, intenta más tarde')
        })
    };

    render = () => {
        const {project, errors, loading, categories} = this.state;
        const {goal, title, duration, category} = project
        return (
            <div style={{paddingTop:100}}>
                    <Paper zDepth={3} className="el-paper">
                        <h1>Consigue fondos para tu Gran proyecto!</h1>
                        <Divider/>
                        <TextField 
                        errorText={errors.title}
                        floatingLabelText={"Titulo"} value={title} onChange={this.handleChange} name="title" type="text"  />
                        <br/>  
                        <TextField 
                        errorText={errors.goal}
                        floatingLabelText={"Meta"} value={goal} onChange={this.handleChange} name="goal" type="number"  />
                        <br/> 
                        <SelectField
                            name="category"
                            floatingLabelText={"Categoría"}
                            value={category}
                            onChange={(e,i,v)=>this.selectHandler('category', v)}
                            errorText={errors.category}
                        >
                        {categories.map(c=>{
                            return (
                                <MenuItem key={c._id} value={c.name}>{c.name}</MenuItem>
                            )
                        })}
                          
                           
                        </SelectField>
                        <br/> 
                        <SelectField
                            name="duration"
                            floatingLabelText={"Duración"}
                            onChange={(e,i,v)=>this.selectHandler('duration', v)}
                            values={duration}
                            errorText={errors.duration}
                        >
                            <MenuItem value={2}>2 Meses</MenuItem>
                            <MenuItem value={3}>3 Meses</MenuItem>
                            <MenuItem value={4}>4 Meses</MenuItem>
                    </SelectField>
                        <br/>
                    <RaisedButton 
                        onClick={this.submitProject}
                        disabled={Object.keys(errors).length}
                        primary
                        label={loading ? <CircularProgress/> : "Crear proyecto"}
                    />

                    </Paper>
                

            </div>


        );
    }
}

export default CreateProject;