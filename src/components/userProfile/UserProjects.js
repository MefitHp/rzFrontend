import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './oneProjectCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';


import IconButton from 'material-ui/IconButton';
import Detail from 'material-ui/svg-icons/content/add-box';
import Edit from 'material-ui/svg-icons/content/create';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

  },
  gridList: {
    width: '100%',
    overflowY: 'none',
    margin: '.5% auto',
  },
  item:{
    paddingLeft:'2%',
    position:'relative'
  }
};





class UserProjects extends Component{

  render(){
    return(
      <div style={styles.root}>
        <Link to="/new">
          <FloatingActionButton style={{position:'fixed', right:30, top:550, zIndex:100}}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <GridList
          cols={1}
          style={styles.gridList}
          cellHeight={'auto'}>
            {this.props.projects.map(
                (p) => {
                    return(
                      <GridTile key={p.id} style={styles.item}>
                          <Project project={p} name={p.name}/>
                            <Link to={'/manage/' + p.id}>
                              <IconButton tooltip="Edición"
                                style={{position:'absolute', top:0}}>
                                <Edit />
                              </IconButton>
                            </Link>
                            <Link to={'/detail/' + p.id}>
                              <IconButton tooltip="Detalle"
                                style={{position:'absolute', top:0, left:50}}>
                                <Detail />
                              </IconButton>
                            </Link>
                      </GridTile>
                    );
                  }
            )}
        </GridList>
      </div>
    );
  }
}

export default UserProjects;
