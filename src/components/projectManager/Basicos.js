import React, { Component } from 'react';
import BlissCard from '../common/BlissCard';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import PortadaCard from './PortadaCard';
import VideoCard from './VideoCard';
import api from '../../Api/Django';
import toastr from 'toastr';
import MainLoader from '../common/MainLoader';
import firebase from '../../Api/firebase';


class Basicos extends Component {

    state = {
        files: {
          imageFile:[],
          videoFile:[]
        },
        loading:false
    };

    onChange = (e) => {
        const field = e.target.name;
        const file = e.target.files[0];
        let files = this.state.files;
        files[field] = file;
        this.setState({
            files
        });
        console.log(files);
        this.props.saveImage(file);

    };

    onSave = () => {
        toastr.warning("Esto podría tardar un poco, ten pasciencia");
        this.setState({loading:true});
//        api.patchImageProject(this.props.project.id, this.state.files.imageFile)
        firebase.storage().ref('portada'+ this.props.project.id).put(this.state.files.imageFile)
            .then(r=>{
                console.log(r.downloadURL);
            
                api.patchImageProject(this.props.project.id, r.downloadURL)
                 
                toastr.success('Tu imagen se ha guardado');
                this.setState({loading:false});
            })
            .catch(e=> {
                toastr.error('Tu imagen no se puedo guardar');
                this.setState({loading:false});
            });
    };



    render(){
        const { project, onSave, onChange } = this.props;
        return(
            <div>

                {this.props.loading && <MainLoader/>}

                <Toolbar
                style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Datos Básicos" />
                </Toolbar>
                <Tabs>

                    <Tab label="Datos básicos">


                        <div style={{marginBottom:100, }} />

                        <PortadaCard
                            style={{marginLeft:50}}
                            onChange={this.onChange}
                            project={project}
                            onSave={this.onSave}
                            loading={this.state.loading}
                        />

                        <div style={{marginBottom:30}} />

                        <VideoCard
                            project={project}
                            onSave={onSave}
                            onChange={this.props.onChange}
                        />

                        <div style={{marginBottom:30}} />


                        <BlissCard
                            onChange={onChange}
                            project={project}
                            onSave={onSave}
                        />





                        <div style={{marginBottom:100}} />


                    </Tab>

                    <Tab label="Publicar" >
                        <div>
                            <h2 style={styles.headline}>Sección de validación</h2>
                            <p>
                                Para publicar el proyecto
                            </p>
                        </div>
                    </Tab>

                </Tabs>
            </div>

        );
    }
}

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default Basicos;