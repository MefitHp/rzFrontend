import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './UserProfilePage.css';
import api from '../../Api/Django';

const stylePaper = {
  width: '99%',
  marginLeft:'.5%',
  padding:'2%',
  marginTop: '1%',
  textAlign: 'left',
  display: 'inline-block',
  position:'relative'
};

class Post extends Component{



  render(){
    return(
      <Paper zDepth={2} style={stylePaper}>
        <div className="userp posts">
          <Avatar  src={this.props.projectimage} />
          <div className="userp itemp">
            <h5>actualización de
              <Link to={'/detail/'+this.props.idproject}>
                {this.props.project}
              </Link>
            </h5>

          </div>
        </div>
        <div>
          {this.props.texto}
          <img
            style={{width:'100%'}}
            src={this.props.image}/>
        </div>
      </Paper>
    );
  }
}

class UserWall extends Component{

  constructor(){
    super()
    this.state={
      updates:[]
    }
  }
  componentWillMount(){
    api.getUserUpdates().then(r=>{
      this.setState({updates:r.data})
      console.log(this.state.updates)
    }).catch(e=>{
      console.log(e)
    })
  }

  render(){
    return(
      <div>
        {this.state.updates.map(up=>{
          return(
            <div>
              <Post
                texto={up.update}
                image={up.image}
                idproject={up.project.id}
                project={up.project.name}
                projectimage={up.project.photoURL}/>
            </div>
          );
        })}
      </div>

    );
  }
}

export default UserWall;
