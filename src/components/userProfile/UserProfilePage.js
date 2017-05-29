import React, {Component} from 'react';
import './UserProfilePage.css';
import Paper from 'material-ui/Paper';
import UserNav from './UserNav';
import BasicInfo from './BasicInfo';
import UserSections from './UserSections';
import {GridList, GridTile} from 'material-ui/GridList';


const stylePaper = {
  height: 200,
  width: 200,
  padding: 1,
  textAlign: 'center',
  display: 'inline-block',
};

const stylesGrid = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',

    overflowY: 'auto',
  },
};

class UserProfile extends Component{
  render(){
    return(
        <div>
          <section className="userp backimage">
            <div className="userp marcimage">
              <Paper zDepth={2} style={stylePaper} rounded={true} >
                <img className="userp imagep" src="http://artoflegends.com/jp/wp-content/uploads/svu/champion/square/23_Web_0.jpg"/>
              </Paper>

            </div>
          </section>
          <UserNav/>
          <GridList
             cellHeight={500}
             rows={1}
             cols={3}
             style={stylesGrid.gridList}
           >
            <GridTile
              cols={1}>

                <BasicInfo/>

            </GridTile>

            <GridTile
              cols={2}>
              <UserSections/>
              </GridTile>
            </GridList>
        </div>
    );
  }
}

export default UserProfile;
