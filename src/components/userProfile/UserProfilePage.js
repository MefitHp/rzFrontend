import React, {Component} from 'react';
import './UserProfilePage.css';
import Paper from 'material-ui/Paper';
import UserNav from './UserNav';
import BasicInfo from './BasicInfo';
import UserSections from './UserSections';
import {GridList, GridTile} from 'material-ui/GridList';
import firebase from '../../Api/firebase';
import FlatButton from 'material-ui/FlatButton';
import Edit from 'material-ui/svg-icons/content/create';
import {fullWhite} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import foto1 from '../../assets/portadas/code.jpeg';
import foto2 from '../../assets/portadas/desk.jpeg';
import foto3 from '../../assets/portadas/desk2.jpeg';
import foto4 from '../../assets/portadas/idea.jpeg';
import foto5 from '../../assets/portadas/love.jpeg';


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
      open: false,
      laPortada:foto1,
      portadas : [foto1,foto2,foto3,foto4,foto5,foto1,foto2]
    }
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          const { history } = this.props;
          history.push('/');
        }else{
          this.setState({usuario:user})
        }
    });
  }
  handlePortada=(p)=> {
    this.setState({
      laPortada:p
    })
  }
  render(){
    return(
        <div className="userPage">

          <section className="userBackimage" ref="portada" style={{backgroundImage:"url("+this.state.laPortada+")"}}>
            <FlatButton
              icon={<Edit color={fullWhite}/>}
              onTouchTap={this.handleOpen}
            />
            <Dialog
              title="Selecciona una de las siguientes imágenes para tu portada"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              <div className="portadasContainer">
                {this.state.portadas.map(portada =>
                  <div className="portadaChoice"
                    onTouchTap={this.handlePortada(portada)}>
                    <img src={portada} className="portadaImage"/>
                  </div>
                 )}
              </div>
            </Dialog>

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
          <div className="userp content">
            <GridList
              cols={3}
               cellHeight={'auto'}
               style={stylesGrid.gridList}>
              <GridTile
                cols={document.documentElement.clientWidth > 600 ? 1 : 0}
                style={document.documentElement.clientWidth > 600 ? {display:'block'} : {display:'none'}}>
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
