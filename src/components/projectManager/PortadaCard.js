import React, {Component} from 'react';
import {
    Paper,
    CardMedia,
    CardTitle,
    Toggle,
    TextField,
    RaisedButton
} from 'material-ui';
import cuete from '../../assets/card_photo.webp';




class PortadaCard extends Component {

    state = {
      title: "Imagen de portada",
        image: cuete
    };

    render(){
        return(

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex">
                    <CardMedia style={{flex:1, maxWidth:300, marginRight:20}} >
                        <img alt="FixterGeek" src={this.state.image} />
                    </CardMedia>
                    <div style={{flex:2}}>
                        <CardTitle title={this.state.title} subtitle={this.state.subtitle} />
                        <Toggle
                            labelPosition="right"
                            label="Habilitar. Puedes editar los datos de tu proyecto mientras no se encuentre publicado"
                        />
                        <div>
                            <TextField
                                name="name"
                                style={{
                                    borderColor:'red'
                                }}
                                floatingLabelText="Selecciona una Imagen de portada"
                            />
                            <br/>
                            <RaisedButton
                                backgroundColor="#a4c639"
                                buttonStyle={{color:'white'}}
                            >
                                Subir
                            </RaisedButton>
                        </div>
                    </div>

                </div>

            </Paper>

        );
    }
}

export default PortadaCard;