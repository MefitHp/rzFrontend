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
        username:''
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
                        style={{backgroundColor:'#2196F3'}}
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
                           style={{
                               margin:'0 auto'
                           }}
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

export default DetailPage;