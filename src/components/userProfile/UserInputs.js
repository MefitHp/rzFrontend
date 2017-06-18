import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './ProjectCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position:'relative'

  },
  gridList: {
    width: '100%',
    overflowY: 'auto',
    margin: '.5% auto',
  },
  item:{
    paddingLeft:'2%',
  }
};

class UserInputs extends Component{
  render(){
    return(
      <div style={styles.root}>
        <Link to="/new">
          <FloatingActionButton style={{position:'fixed', right:30, top:550, zIndex:100}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <GridList
          cols={document.documentElement.clientWidth > 600 ? 3 : 1}
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

export default UserInputs;
