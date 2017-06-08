import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import './UserProfilePage.css';
import LinearProgress from 'material-ui/LinearProgress';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Loc from 'material-ui/svg-icons/communication/location-on';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';


const stylePCard={
  avatar:{
    position:'absolute',
    top:100,
    left:10,
  },
  avatar2:{
    position:'absolute',
    top:40,
    left:10,
  },
  progress:{
    height:10,
  },
  paper:{
    width:'90%',
    height:'auto',
    margin: '10px auto',
    margin:'0 5% 5% 5%',
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
          <Avatar  src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg"
            style={document.documentElement.clientWidth > 600 ? stylePCard.avatar : stylePCard.avatar2}/>
        </div>

        <div className="datosproject">
          <h4>{this.props.name}</h4>
          <LinearProgress mode="determinate" value={80} style={stylePCard.progress}/>

            <BottomNavigation style={{width:"100%"}}>
                <BottomNavigationItem
                  style={{padding:0, margin:0, minWidth:'inherit'}}
                  label="Ubicación"
                  icon={<Loc/>}
                  disabled={true}
                />

                <BottomNavigationItem
                  style={{padding:0, margin:0, minWidth:'inherit'}}
                  label="Meta"
                  icon={<Proyect/>}
                  disabled={true}
                />

                <BottomNavigationItem
                  style={{padding:0, margin:0, minWidth:'inherit'}}
                  label="Aportes"
                  icon={<Hand/>}
                  disabled={true}
                />

          </BottomNavigation>

        </div>

      </Paper>
    );
  }
}
export default Project;
