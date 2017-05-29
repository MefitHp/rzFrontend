import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import './UserProfilePage.css';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
    marginTop:10,
  },
};

const stylePaper = {
  width: '100%',
  height:'100vh',
  padding:'2%',
  textAlign: 'left',
  display: 'inline-block',
  position:'relative'
};
const styleAvatar={
  position:'absolute',
  top:10,
}
class Project extends Component{
  render(){
    return(
      <Paper zDepth={2} style={stylePaper}>
        <div className="projectbg">
          <Avatar  src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg" style={styleAvatar}/>
        </div>

        <div>
          <h2>Proyecto trndamere</h2>
        </div>

      </Paper>
    );
  }
}



class UserProjects extends Component{
  render(){
    return(
      <div style={styles.root}>
        <GridList
          cols={3}
          style={styles.gridList}
        >
            <GridTile>
              <Project/>
            </GridTile>
            <GridTile>
              <Project/>
            </GridTile>
            <GridTile>
              <Project/>
            </GridTile>
            <GridTile>
              <Project/>
            </GridTile>

        </GridList>
      </div>
    );
  }
}

export default UserProjects;
