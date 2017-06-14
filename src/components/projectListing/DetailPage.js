import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import { Paper, RaisedButton } from 'material-ui';
import './DetailPage.css';
import i from '../../assets/image7.webp';
import api from '../../Api/Django';
import ReactMarkdown from 'react-markdown';



class DetailPage extends Component{

    state = {
        project: {
            name:'',
            description:''
        }
    };

    componentWillMount(){
        // api.getProject(this.props.match.params.projectId)
        api.getProject(this.props.match.params.projectId)
            .then(
                p=>{
                    console.log(p);
                    this.setState({project:p});
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
        const {name, description} = this.state.project;
        return(
            <div>
                <NavBar
                    history={this.props.history} />
                <div className="detail-container" >
                    <Paper
                        style={{backgroundColor:'#2196F3'}}
                        className="detail-drawer">
                        <img src={i} alt="comida"/>
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
                               maxWidth:800,
                               margin:'0 auto'
                           }}
                    >
                        <Paper
                            style={{
                                maxWidth:800,
                                margin:'0 auto',
                                padding:20,
                                marginTop:30,
                                textAlign:'center'
                            }}
                        >
                            <iframe width="500" height="315" src="https://www.youtube.com/embed/IvUU8joBb1Q" frameborder="0" allowfullscreen></iframe>
                        </Paper>

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