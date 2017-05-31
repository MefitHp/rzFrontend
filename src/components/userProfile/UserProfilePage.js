import React, {Component} from 'react';
import './UserProfilePage.css';
import Paper from 'material-ui/Paper';
import UserNav from './UserNav';
import BasicInfo from './BasicInfo';
import UserSections from './UserSections';
import {GridList, GridTile} from 'material-ui/GridList';
import firebase from '../../Api/firebase';


const stylePaper = {

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
  item:{
    paddingLeft:10,
  }
};

class UserProfile extends Component{

  constructor(){
    super();
    this.state={
      usuario:'',


    }
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          const { history } = this.props;
          history.push('/');
        }else{
          this.setState({usuario:user})
          console.log(user)
        }
    });
  }
  render(){
    return(
        <div className="userPage">

          <section className="userp backimage">


            <div className="userp marcimage">
              <Paper zDepth={2} style={stylePaper} rounded={true}>
                <img alt="ImageProfile" className="userp imagep" src={this.state.usuario.photoURL}/>
              </Paper>
            </div>
            <div className="userp uname">
              <h2>{this.state.usuario.displayName}</h2>
            </div>
          </section>
          <UserNav/>
          <div className="userp content"
            >
            <GridList
              cols={3}
               cellHeight={'auto'}
               style={stylesGrid.gridList}

             >

              <GridTile
                cols={document.documentElement.clientWidth > 600 ? 1 : 0}
                style={document.documentElement.clientWidth > 600 ? {display:'block'} : {display:'none'}}
                >
                  <BasicInfo/>
              </GridTile>


              <GridTile
                cols={document.documentElement.clientWidth > 600 ? 2 : 3}
                style={stylesGrid.item}>
                <UserSections/>
                </GridTile>

              </GridList>
          </div>
        </div>
    );
  }
}

export default UserProfile;
