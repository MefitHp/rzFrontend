import React, {Component} from 'react';
import {Paper, Toolbar, ToolbarTitle} from 'material-ui';
import {cyan500} from 'material-ui/styles/colors';


class Aportaciones extends Component{
    render(){
        return(
            <div>
                <Toolbar
                    style={{backgroundColor:cyan500}}>
                    <ToolbarTitle
                        style={{color:'white'}}
                        text="Aportaciones de usuarios" />
                </Toolbar>

                <div style={{marginBottom:100}} />

                <Paper className="la-card">
                    <h3>Money</h3>
                </Paper>


            </div>
        );
    }
}



export default Aportaciones;

