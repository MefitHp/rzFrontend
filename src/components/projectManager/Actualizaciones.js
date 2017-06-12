import React, {Component} from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Paper, Toolbar, ToolbarTitle} from 'material-ui';
import {cyan500} from 'material-ui/styles/colors';


class Actualizaciones extends Component{
    render(){
        return(
            <div>
                <Toolbar
                    style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Actualizaciones de estado" />
                </Toolbar>

                <div style={{marginBottom:100}} />

                <Paper className="la-card">
                    <h3>Perro</h3>
                </Paper>






                <FloatingActionButton
                    style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

const style = {
    position:'fixed',
    bottom:40,
    right:30,
    zIndex:999
};

export default Actualizaciones;

