import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './UserProfilePage.css';
import api from '../../Api/Django';
import 'moment/locale/es';
import moment from 'moment';

const stylePaper = {
  width: '50%',
  marginLeft:'25%',
  padding:'2%',
  marginTop: '1%',
  textAlign: 'left',
  display: 'inline-block',
  position:'relative',

};

class Post extends Component{



  render(){
    return(
      <Paper zDepth={2} style={stylePaper}>
        <div className="userp posts">
          <Avatar  src={this.props.projectimage} />
          <div className="userp itemp">
            <h5 style={{color:'#bcbcbc'}}>actualización de{' '}
              <Link
                style={{textDecoration:'none', color:'#000'}}
                to={'/detail/'+this.props.idproject}>
                 {this.props.project}
              </Link>
            {' '+this.props.date}
            </h5>
            <span></span>

          </div>
        </div>
        <div>
          {this.props.texto}
          {this.props.image?
            <img
              style={{width:'100%'}}
              src={this.props.image}/>:''
          }
        </div>
      </Paper>
    );
  }
}

class UserWall extends Component{

  constructor(props){
    super(props);
    this.state = {
      updates:[]
    }
  }




  render(){
    return(
      <div>
        {this.props.updates.map(up=>{
          return(
            <div>
              <Post
                texto={up.update}
                image={up.image}
                idproject={up.project.id}
                project={up.project.name}
                projectimage={up.project.photoURL}
                date={moment(up.date).format('LLL')}/>
            </div>
          );
        }).reverse()}
      </div>

    );
  }
}

export default UserWall;
