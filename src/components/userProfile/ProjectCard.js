import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import './UserProfilePage.css';
import LinearProgress from 'material-ui/LinearProgress';


const stylePCard={
  avatar:{
    position:'absolute',
    top:110,
    left:10,
  },
  progress:{
    height:10,
  },
  paper:{
    width: '85%',
    height:'40vh',
    margin: '10px auto',
    marginBottom:20,
    textAlign: 'left',
    display: 'inline-block',
    position:'relative',

  }
}
class Project extends Component{
  render(){
    return(
      <Paper zDepth={2} style={stylePCard.paper}>
        <div>
          <img src="https://i.ytimg.com/vi/uejsWreDgto/maxresdefault.jpg" alt="project's " className="projectImage"/>

            <Avatar  src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg" style={stylePCard.avatar}/>

        </div>

        <div className="datosproject">
          <h4>Proyecto tryndamere</h4>
          <LinearProgress mode="determinate" value={80} style={stylePCard.progress}/>
          <p>Meta: $100000</p>
          <span>Financiado: $80000</span>
        </div>

      </Paper>
    );
  }
}
export default Project;
