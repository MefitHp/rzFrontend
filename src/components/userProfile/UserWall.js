import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import './UserProfilePage.css';

const stylePaper = {
  width: '99%',
  marginTop: '2%',
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
          <Avatar  src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg" />
          <div className="userp itemp">
            <h4>Tryndamere pichó la comida</h4>
            <p>Hace 2 horas</p>
          </div>
        </div>
        <div>
          Unas tortas ahogadas
        </div>
      </Paper>
    );
  }
}

class UserWall extends Component{

  render(){
    return(
      <div>

          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>

      </div>

    );
  }
}

export default UserWall;
