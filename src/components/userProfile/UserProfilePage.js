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
import foto6 from '../../assets/portadas/otra.jpeg';


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

    overflowX: 'auto',
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
      portadas : [foto1,foto2,foto3,foto4,foto5,foto6]
    }
  }

  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };
 handlePortada = (e) => {
   this.setState({laPortada:e.target.src})
   this.handleClose();
 }

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

  render(){
    return(
        <div className="userPage">

          <section className="userBackimage" ref="portada" style={{backgroundImage:"url("+this.state.laPortada+")"}}>
            <FlatButton
              icon={<Edit color={fullWhite}/>}
              onTouchTap={this.handleOpen}
            />
            <Dialog
              title={document.documentElement.clientWidth > 600 ? "Elige una imágen para tu portada" : "Imagen de Portada"}
              style={{overflow:'scroll'}}
              modal={false}
              open={this.state.open}
              autoScrollBodyContent={true}
              onRequestClose={this.handleClose}>
              <div className="portadasContainer">

                <GridList
                   cellHeight={'auto'}
                   style={stylesGrid.gridList}
                   cols={document.documentElement.clientWidth > 600 ? 3 : 1}>
                   {this.state.portadas.map(portada =>
                     <div key={portada} className="portadaChoice"
                       onTouchTap={this.handlePortada}>
                       <GridTile
                        style={stylesGrid.item}>
                        <img src={portada} className="portadaImage"/>
                      </GridTile>
                  </div>
                    )}
                  </GridList>


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
          <UserNav match={this.props.match}/>
          <div className="">
            <GridList
              cols={3}
               cellHeight={'auto'}
               style={stylesGrid.gridList}>
              <GridTile
                cols={document.documentElement.clientWidth > 600 ? 1 : 0}
                style={document.documentElement.clientWidth > 600 ? {display:'block'} : {display:'none'}}>
                  <BasicInfo match={this.props.match} history={this.props.history}/>
              </GridTile>
              <GridTile
                cols={document.documentElement.clientWidth > 600 ? 2 : 3}
                style={stylesGrid.item}>
                <UserSections
                  match={this.props.match}/>
                </GridTile>
              </GridList>
          </div>
        </div>
    );
  }
}

export default UserProfile;
