import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import './publicProfile.css';
import Paper from 'material-ui/Paper';
import PublicSections from './publicSections';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Proyect from 'material-ui/svg-icons/action/extension';
//import Hand from 'material-ui/svg-icons/action/pan-tool';
import Chat from 'material-ui/svg-icons/action/question-answer';
import api from '../../Api/Django';
import toastr from "toastr";
import MainLoader from "../common/MainLoader";


const facePic = "https://graph.facebook.com/";
const facePicHd = "/picture?height=500";

function getHDPicture(provider_uid) {
    return facePic + provider_uid + facePicHd;
}

class PublicProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex:0,
            projects:[],
            profile:{
                photoURL:'',
                user:{
                    id:'',
                    username:'',
                }
            },
            loading: true
        }
    }

    componentWillMount() {
        api.getProfile(this.props.match.params.userId)
        .then( r => {
            this.setState({profile:r});
            this.loadProjects()
        }).catch ( e => {
            toastr.error('Este usuario no existe');
            this.props.history.push('/userNotfound' + '/' + e);
        });
    }


    loadProjects = () => {
        api.getUserProjects(this.state.profile.user.id)
        .then( r => {
            this.setState({projects:r, loading:false});
            console.log(this.state.projects)
        }).catch( e => {
            console.log(e)
        });
    };

    select = (index) => this.setState({selectedIndex: index});
    render(){
        const  {profile} = this.state;
        let srcPic = "";
        if( profile !== undefined ){
            if( profile.provider_uid !== undefined && profile.provider_uid !== null ){
                srcPic = getHDPicture(profile.provider_uid);
            }else if ( profile.photoURL ){
                srcPic = profile.photoURL;
            }else {
                srcPic = 'https://maxcdn.icons8.com/Share/icon/Users//circled_user_male1600.png'
            }
        }
        return (
            <div>
                {this.state.loading ? <MainLoader/> :
                    <div className="publicprofile">
                        <Paper style={{width: '100%', height: '30vh'}} zDepth={1}>
                            <div className="basicInfo">
                                <Avatar
                                    size={document.documentElement.clientWidth > 600 ? 150 : 60}
                                    src={srcPic}
                                />
                                <div className="textInfo">
                                    <h1>{this.state.profile.user.username}</h1>
                                    <p>{this.state.profile.user.email}</p>
                                </div>
                            </div>
                        </Paper>
                        <Paper zDepth={1}>
                            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                                <BottomNavigationItem
                                    label="Proyectos"
                                    icon={<Proyect/>}
                                    onTouchTap={() => this.select(0)}
                                    onClick={() => this.props.history.push('/users/' + this.state.profile.id + '/projects')}>
                                </BottomNavigationItem>

                                <BottomNavigationItem
                                    label="Chatme"
                                    icon={< Chat/>}
                                    onTouchTap={() => this.select(1)}
                                    onClick={() => this.props.history.push('/chat/' + this.state.profile.uid)}>
                                </BottomNavigationItem>
                            </BottomNavigation>
                        </Paper>

                        <Paper style={{width: '100%', height: 'auto', marginTop: '1%', padding: '1%'}} zDepth={1}>
                            <PublicSections
                                projects={this.state.projects}
                                match={this.props.match}
                            />
                        </Paper>
                    </div>
                }
            </div>
        );
    }
}

export default PublicProfile;
