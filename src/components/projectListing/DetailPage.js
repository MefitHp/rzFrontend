import React, { Component } from 'react';
import NavBar from '../common/NavBar';
import { Paper, RaisedButton } from 'material-ui';
import './DetailPage.css';
import i from '../../assets/image7.webp';
import api from '../../Api/Django';
import ReactMarkdown from 'react-markdown';



class DetailPage extends Component{

    state = {
        project: ''
    };

    componentWillMount(){
        // api.getProject(this.props.match.params.projectId)
        api.getAxiosProject(this.props.match.params.projectId)
            .then(
                p=>{
                    console.log(p);
                    this.setState({project:p.data});
                }
            )
        .catch(
            e=>{
                console.log(e);
                this.props.history.push('/nomatch');
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
                    <Paper className="detail-description">
                        <div className="mark">
                            <ReactMarkdown source={description} />
                        </div>
                    </Paper>




                </div>
            </div>
        );
    }
}

export default DetailPage;