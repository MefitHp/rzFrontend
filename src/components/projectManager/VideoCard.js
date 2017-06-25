import React, {Component} from 'react';
import {
    Paper,
    CardMedia,
    CardTitle,
    Toggle,
    TextField,
    RaisedButton
} from 'material-ui';
// import cuete from '../../assets/icon.svg';




class VideoCard extends Component {

    state = {
        title: "Video del proyecto",
        video: this.props.project.video,
        boton: "Guardar",
        disabled: true,
        id:'FAcaAeIwl1Q'
    };

    onToggle = () => {
        this.setState({disabled:!this.state.disabled});
    };

    // componentWillReceiveProps(props){
    //     const id = props.project.video.split('/').slice(-1)[0];
    //     console.log(id);
    //     this.setState({id});
    // }

    componentWillMount() {
        if (this.props.project.video !== undefined) {
            this.setState({id: this.state.video.split('/').slice(-1)[0]});
        }
    }

    render(){
        return(

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex">
                    <CardMedia style={{flex:1, maxWidth:300, marginRight:20}} >
                        <iframe title="video_principal" width="560" height="315" src={"https://www.youtube.com/embed/" + this.state.id} frameborder="0" allowfullscreen></iframe>
                    </CardMedia>
                    <div style={{flex:2}}>
                        <CardTitle title={this.state.title} subtitle={this.state.subtitle} />
                        <Toggle
                            onToggle={this.onToggle}
                            labelPosition="right"
                            label="Habilitar. Puedes editar los datos de tu proyecto mientras no se encuentre publicado"
                        />
                        <div>
                            <TextField
                                disabled={this.state.disabled}
                                name="video"
                                style={{
                                    borderColor:'red'
                                }}
                                onChange={this.props.onChange}
                                floatingLabelText="Ingresa el link de tu video"
                                value={this.props.project.video}
                            />
                            <br/>
                            <RaisedButton
                                disabled={this.state.disabled}
                                backgroundColor="#a4c639"
                                buttonStyle={{color:'white'}}
                                onTouchTap={this.props.onSave}
                            >
                                {this.state.boton}
                            </RaisedButton>
                        </div>
                    </div>

                </div>

            </Paper>

        );
    }
}

export default VideoCard;
