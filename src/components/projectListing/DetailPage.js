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
        cUser:'',
        project: {
            author:{
              profile:{
                id:''
              }
            },
            name:'',
            description:'',
            rewards:[]
        },
        username:'',
        fixed:false,
        loading:true,
        date:''
    };

    componentWillMount(){
        // api.getProject(this.props.match.params.projectId)
        api.getSelfProfile().then(r=>{

          this.setState({cUser:r.id})
          api.getProject(this.props.match.params.projectId)
              .then(
                  p=>{
                      console.log(p);
                      console.log(moment(p.finish).endOf('day').fromNow());
                      this.setState({
                          project:p,
                          username:p.author.profile.user.username,
                          loading:false,
                          date: moment(p.finish).endOf('day').fromNow()
                      });
                      this.checkFollow()
                  }
              )
          .catch(
              e=>{
                  console.log(e);
                  toastr.error('No se encontró el proyecto que buscas')
                  // this.props.history.push('/nomatch');
              }

          );
        })


    }


    componentDidMount(){

        window.addEventListener('scroll', this.handleScroll);


    }
    checkFollow=()=>{
      for(let f in this.state.project.followers){

        if(this.state.cUser==this.state.project.followers[f]){

          this.setState({following:true})
        }
      }
    }
    follow=()=>{
      api.follow(this.state.project.id)
      .then(r=>{
        this.setState({following:!this.state.following})
        console.log('sigues este proyecto',r)
      })
      .catch(e=>{console.log(e)})
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;
        console.log(scrollTop);
        if(scrollTop > 570 && document.documentElement.clientWidth > 600){
            this.setState({fixed:true});
        } else{
            this.setState({fixed:false});

        }
    };



    render(){
        const {id,name, description, photoURL} = this.state.project;
        const {username} = this.state;

        return(
            <div>
                <NavBar
                    history={this.props.history} />

                {this.state.loading && <MainLoader/>}

                <VideoComponent project={this.state.project} />

                <div className="detail-container" >
                    <Paper
                        style={this.state.fixed ? styles.fixed:styles.noFix}
                        className="detail-drawer"
                    >
                        <Link to={'/users/'+this.state.project.author.profile.id}>
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
                            <p>Termina {this.state.date}</p>
                            <br/>
                            <p>850 seguidores</p> - <p>20 aportadores</p>

                            <br/>
                            <RaisedButton
                                buttonStyle={{color:'#2196F3'}}
                                label={this.state.following?'Siguiendo':'Seguir'}
                                onTouchTap={this.follow}/>
                        </article>



                        <div className="reward-list">
                          <RewardList
                              project={this.state.project}
                              open={this.openReward}
                              history={this.props.history}
                          />
                        </div>
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

export default DetailPage;
