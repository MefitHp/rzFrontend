import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './oneProjectCard';



const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

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





class UserProjects extends Component{
  render(){
    return(
      <div style={styles.root}>
        <GridList
          cols={1}
          style={styles.gridList}
          cellHeight={'auto'}

        >

            {this.props.projects.map(
                (p) => {
                    return(
            <GridTile key={p.id} style={styles.item}>
                <Project  project={p} name={p.name}/>
                <div id="overlay"></div>
            </GridTile>
                    );
        }
            )}


            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}
            {/*<GridTile style={styles.item}>*/}
              {/*<Project/>*/}
            {/*</GridTile>*/}


        </GridList>
      </div>
    );
  }
}

export default UserProjects;
