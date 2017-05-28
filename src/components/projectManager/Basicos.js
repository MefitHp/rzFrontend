import React, { Component } from 'react';
import BlissCard from '../common/BlissCard';
import {Tabs, Tab} from 'material-ui/Tabs';



class Basicos extends Component {
    render(){
        const { project } = this.props;
        return(
        <Tabs>

            <Tab label="Editar datos básicos">
                <div style={{marginBottom:100}} />
                <BlissCard project={project} />
            </Tab>

            <Tab label="Publicar Proyecto" >
                <div>
                    <h2 style={styles.headline}>Sección de validación</h2>
                    <p>
                        Para publicar el proyecto
                    </p>
                </div>
            </Tab>

        </Tabs>
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