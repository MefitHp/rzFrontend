import React, {Component} from 'react';
import {
    Paper,
    CardMedia,
    CardTitle,
    Toggle,
    // TextField,
    RaisedButton
} from 'material-ui';
// import cuete from '../../assets/card_photo.jpg';
import CircularProgress from 'material-ui/CircularProgress';





class PortadaCard extends Component {

    state = {
        title: "Imagen de portada",
        image: this.props.project.photo,
        disabled: true
    };

    componentWillReceiveProps(props){
        // console.log('photo',props.project.photo);
        // console.log('cochi');
        // console.log('tipo',typeof props.project.photo);
        if(typeof props.project.photo !== typeof []){
            this.setState({image:props.project.photo});
        }

    }



    onChange = (e) =>{
        const i = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(i);

        reader.onloadend =  (e) => {
            // console.log(reader.result);
            this.setState({
                image: reader.result
        })

        };


        this.props.onChange(e);
    };

    onSave = () => {
      this.props.onSave();
    };

    onToggle = () => {
      this.setState({disabled:!this.state.disabled});
    };

    render(){
        // const {onSave} = this.props;
        return(

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex">
                    <CardMedia style={{flex:1, maxWidth:300, marginRight:20}} >
                        <img alt="Portada" src={this.state.image} />
                    </CardMedia>
                    <div style={{flex:2}}>
                        <CardTitle title={this.state.title} subtitle={this.state.subtitle} />
                        <Toggle
                            onToggle={this.onToggle}
                            labelPosition="right"
                            label="Habilitar. Puedes editar los datos de tu proyecto mientras no se encuentre publicado"
                        />
                        <div>
                            <input
                                disabled={this.state.disabled}
                                type="file"
                                name="imageFile"
                                style={{
                                    borderColor:'red'
                                }}
                                value=""
                                onChange={this.onChange}
                                floatingLabelText="Selecciona una Imagen de portada"
                            />
                            <br/>
                            <RaisedButton
                                disabled={this.state.disabled}
                                onTouchTap={this.onSave}
                                backgroundColor="#a4c639"
                                buttonStyle={{color:'white'}}
                                icon={this.props.loading && <CircularProgress/>}
                                label={!this.props.loading && "Subir"}
                            >

                            </RaisedButton>
                        </div>
                    </div>

                </div>

            </Paper>

        );
    }
}

export default PortadaCard;