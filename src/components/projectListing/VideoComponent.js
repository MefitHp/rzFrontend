import React, {Component} from 'react';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import imagen from '../../assets/portadas/desk2.jpeg';

class VideoComponent extends Component {

    state = {
        portada:null,
        video: '',
        showVideo:false
    };

    componentWillMount(){
        this.setState({
            video:this.props.project.video,
            portada: this.props.project.photo
        });
        // console.log('k pedo?', this.props.project);
    }

    componentWillReceiveProps(props){
        this.setState({
            video:props.project.video,
            portada: props.project.photo
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
                            transform:'scale(5)',
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
                        <iframe title="bliss" width="100%" height="100%" src="https://www.youtube.com/embed/IvUU8joBb1Q?autoplay=1" frameborder="0" allowfullscreen></iframe>
                    </div>
                }

            </div>
        );
    }
}

export default VideoComponent;