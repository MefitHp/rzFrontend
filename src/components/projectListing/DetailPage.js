import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import { Paper, RaisedButton } from 'material-ui';
import './DetailPage.css';
import api from '../../Api/Django';
import ReactMarkdown from 'react-markdown';
import VideoComponent from './VideoComponent';
import toastr from 'toastr';
import RewardList from './RewardList';
import MainLoader from '../common/MainLoader';
import moment from 'moment';
import 'moment/locale/es';
import Compartir from '../publicProfile/share';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const colors = {
  orange:'#EC8112',
  green:'#89BE53',
  purple:'#991FA6',
  greeblue:'#4DB1EA',
  blue:'#76CECB',
  pink:'#C50090'

};



class DetailPage extends Component{

    state = {
        following:false,
        fixed:false
    };

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillReceiveProps( nP ){
        if( nP.fetched ){
            let following = false;
            try {
                following = nP.project.followers.indexOf(nP.user.profile.profile.id) !== -1;
                console.log(following);
                this.setState({following});
            } catch (e) {
                console.log('Damn !! something wrong ' + e );
            }
        }
    }

    follow = () => {
        api.follow(this.props.project.id)
        .then( r => {
            this.setState({following:!this.state.following});
            console.log('sigues este proyecto',r);
        })
        .catch(e=>{
            console.log(e)
        });
    };

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;
        //console.log(scrollTop);
        if(scrollTop > 570 && document.documentElement.clientWidth > 600){
            this.setState({fixed:true});
        } else{
            this.setState({fixed:false});

        }
    };

    render(){
        let {id,name, description, photoURL} = {};
        let {username} = {};
        let isThereRewards = false;
        let following = this.state.following;
        let showButton = false;
        let date = null;
        if (this.props.fetched ){
            ({id,name, description, photoURL} = this.props.project);
            ({username} = this.props.project.author.profile.user.username);
            showButton = this.props.userFetched && Object.keys(this.props.user).length > 0;
            isThereRewards = this.props.project.rewards.length > 0;
            let finishDate = this.props.project.finish;
            date = finishDate === null ? 'Indeterminado' : moment(this.props.project.finish).endOf('day').fromNow();
        }
        return(
            <div>
                { !this.props.fetched ? <MainLoader/> :
                    <div>
                        <VideoComponent project={this.props.project} />
                        <div className="detail-container" >
                            <Paper
                                style={this.state.fixed ? styles.fixed:styles.noFix}
                                className="detail-drawer">
                                <Link to={'/users/'+this.props.project.author.profile.id}>
                                    <img src={photoURL} alt="comida"/>
                                </Link>
                                <span className="mspan">{username}</span>
                                <div style={{position:'relative'}}>
                                    <div style={{position:'absolute',left:200, top:-150}}>
                                        <Compartir
                                            pname={name}
                                            pid={id}/>
                                    </div>
                                </div>
                                <article>
                                    <h2 style={{margin:'0 auto'}}>{name}</h2>
                                    <p>Termina:  {date}</p>
                                    <br/>
                                    <p>850 seguidores</p> - <p>20 aportadores</p>
                                    <br/>
                                    {
                                        showButton &&
                                        <RaisedButton
                                            buttonStyle={{color:'#2196F3'}}
                                            label={following ? 'Siguiendo':'Seguir'}
                                            onClick={this.follow}/>
                                    }

                                </article>
                                <div style={{height:300, overflow:'scroll'}}>
                                    {   isThereRewards &&
                                        <RewardList
                                            project={this.props.project}
                                            open={this.openReward}
                                            history={this.props.history}
                                        />
                                    }
                                </div>
                            </Paper>
                            <br/>
                            {
                                showButton &&
                                <RaisedButton
                                    buttonStyle={{color:'#2196F3'}}
                                    label={following ? 'Siguiendo':'Seguir'}
                                    onClick={this.follow}/>
                            }
                            <div className="reward-list">
                                <RewardList
                                project={this.props.project}
                                open={this.openReward}
                                history={this.props.history}
                                 />
                                <div className="detail-description"
                                     style={this.state.fixed ? styles.pushed:styles.noPush}>
                                    <Paper
                                        style={{padding:30, marginTop:20}}
                                        className="mark">
                                        <ReactMarkdown source={description} />
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const styles = {
  noFix:{

    backgroundColor:colors.greeblue,
      width:355,
  },
    fixed: {

        backgroundColor:colors.greeblue,
        position:'fixed',
        top:64,
        width:355,
        zIndex:999,
        height:'100vh'
    },
    pushed:{
        margin: '0 auto',
        marginLeft:360
    },
    noPush:{
      margin: '0 auto'
    }
};

function getProject(id, projects) {
    let myproject = projects.filter( project => {
        return project.id === id
    });
    return myproject[0];
}


function mapStateToProps(state, ownProps) {
    const id = parseInt(ownProps.match.params.projectId,10);
    let project = getProject(id, state.projects);

    return {
        user: state.user,
        project: project,
        fetched: project !== undefined,
        userFetched: state.user !== undefined && state.user !== null
    }
}

function mapDispatchToProps() {
    return {

    }
}

DetailPage = connect(mapStateToProps,mapDispatchToProps) (DetailPage);
export default  DetailPage;
