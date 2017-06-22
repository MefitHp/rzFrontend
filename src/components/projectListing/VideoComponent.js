import React, {Component} from 'react';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import imagen from '../../assets/portadas/desk2.jpeg';

class VideoComponent extends Component {

    state = {
        portada:null,
        video: '',
        showVideo:false,
        id:''
    };

    componentWillMount(){
        // const id = this.props.project.video.split('/').slice(-1)[0];
        this.setState({
            video:this.props.project.video,
            portada: this.props.project.photo,
            // id:id
        });
        // console.log('k pedo?', this.props.project);
    }

    componentWillReceiveProps(props){
        if(props.project.video !== undefined && props.project.video ) {
            const id = props.project.video.split('/').slice(-1)[0];

            this.setState({id});
        }
        this.setState({
            video:props.project.video,
            portada: props.project.photo,
        });
        // console.log('recivio?', props.project);

    }

    showVideo = () =>{
        this.setState({
            showVideo:!this.state.showVideo
        });
    };



    render(){
        let {portada, showVideo} = this.state;
        if (!portada) portada = imagen;

        return(
            <div>
                {!showVideo &&  <div
                    className="video-component"
                    style={{
                        height:'568px',
                        width:'100%',
                        backgroundImage:`url(${portada})`,
                        paddingTop:'64px',
                        textAlign:'center',

                    }}>
                    <PlayArrow
                        style={{
                            position:'absolute',
                            top:'50%',
                            transform:'scale(3)',
                            border:'solid 1px white',
                            padding:'5px',
                            borderRadius:'50%',
                            cursor:'pointer'
                        }}
                        color="white"
                        onTouchTap={this.showVideo}
                    />
                </div>}

                {showVideo &&
                    <div
                        style={{
                            height:'568px',
                            width:'100%',
                            paddingTop:'64px',
                            textAlign:'center',

                        }}
                    >
                        <iframe title="bliss" width="100%" height="100%" src={"https://www.youtube.com/embed/" + this.state.id + "?autoplay=1"} frameborder="0" allowfullscreen></iframe>
                    </div>
                }

            </div>
        );
    }
}

export default VideoComponent;