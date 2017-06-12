import React, { Component } from 'react';
import BlissCard from '../common/BlissCard';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import {cyan500} from 'material-ui/styles/colors';
import PortadaCard from './PortadaCard';
import VideoCard from './VideoCard';


class Basicos extends Component {
    render(){
        const { project, onChange, onSave } = this.props;
        return(
            <div>
                <Toolbar
                style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Datos Básicos" />
                </Toolbar>
                <Tabs>

                    <Tab label="Datos básicos">


                        <div style={{marginBottom:100}} />

                        <PortadaCard
                            onChange={onChange}
                            project={project}
                            onSave={onSave}
                        />

                        <div style={{marginBottom:30}} />

                        <VideoCard/>

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