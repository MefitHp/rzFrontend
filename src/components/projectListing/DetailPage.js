import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import { Paper, RaisedButton } from 'material-ui';
import './DetailPage.css';
import i from '../../assets/image7.webp';



class DetailPage extends Component{
    render(){
        return(
            <div>
                <NavBar history={this.props.history} />
                <div className="detail-container" >
                    <Paper
                        style={{backgroundColor:'#2196F3'}}
                        className="detail-drawer">
                        <img src={i} alt="comida"/>
                        <article>
                            <h2>Cocina al Natural, Recetas Saladas</h2>
                            <p>850 seguidores</p>
                            <RaisedButton
                                buttonStyle={{color:'#2196F3'}}
                                label="Seguir"/>
                        </article>
                    </Paper>
                    <Paper className="detail-description">
                        <span>pollo2</span>
                    </Paper>




                </div>
            </div>
        );
    }
}

export default DetailPage;