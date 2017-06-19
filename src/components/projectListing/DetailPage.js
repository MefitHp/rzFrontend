import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import { Paper, RaisedButton } from 'material-ui';
import './DetailPage.css';
import api from '../../Api/Django';
import ReactMarkdown from 'react-markdown';
import VideoComponent from './VideoComponent';



class DetailPage extends Component{

    state = {
        project: {
            name:'',
            description:''
        },
        username:'',
        fixed:false
    };

    componentWillMount(){
        // api.getProject(this.props.match.params.projectId)
        api.getProject(this.props.match.params.projectId)
            .then(
                p=>{
                    console.log(p);
                    this.setState({project:p, username:p.author.profile.user.username});

                }
            )
        .catch(
            e=>{
                console.log(e);
                // this.props.history.push('/nomatch');
            }

        );
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop
        console.log(scrollTop);
        if(scrollTop > 570 && document.documentElement.clientWidth > 600){
            this.setState({fixed:true});
        } else{
            this.setState({fixed:false});

        }
    };

    render(){
        const {name, description, photoURL} = this.state.project;
        const {username} = this.state;
        return(
            <div>
                <NavBar
                    history={this.props.history} />

                <VideoComponent project={this.state.project} />

                <div className="detail-container" >
                    <Paper
                        style={this.state.fixed ? styles.fixed:styles.noFix}
                        className="detail-drawer"
                    >
                        <img src={photoURL} alt="comida"/>
                        <span>{username}</span>
                        <article>
                            <h2>{name}</h2>
                            <p>850 seguidores</p>
                            <RaisedButton
                                buttonStyle={{color:'#2196F3'}}
                                label="Seguir"/>
                        </article>
                    </Paper>


                    <br/>

                    <div className="detail-description"
                           style={this.state.fixed ? styles.pushed:styles.noPush}
                    >


                        <Paper
                            style={{padding:30, marginTop:20}}
                            className="mark"
                              >
                            <ReactMarkdown source={description} />
                        </Paper>
                    </div>




                </div>
            </div>
        );
    }
}

const styles = {
  noFix:{
    backgroundColor:'#2196F3'
  },
    fixed: {
        backgroundColor:'#2196F3',
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

export default DetailPage;