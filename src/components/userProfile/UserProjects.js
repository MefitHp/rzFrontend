import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './ProjectCard';



const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
  },
  item:{
    paddingLeft:'2%',
  }
};





class UserProjects extends Component{
  render(){
    return(
      <div style={styles.root}>
        <GridList
          cols={3}
          style={styles.gridList}
          cellHeight={'auto'}

        >
            <GridTile style={styles.item}>
              <Project/>
            </GridTile>
            <GridTile style={styles.item}>
              <Project/>
            </GridTile>
            <GridTile style={styles.item}>
              <Project/>
            </GridTile>
            <GridTile style={styles.item}>
              <Project/>
            </GridTile>


        </GridList>
      </div>
    );
  }
}

export default UserProjects;
