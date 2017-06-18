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
import api from '../../Api/Django';
import toastr from 'toastr';


const stylePaper = {
  width:'25vh',
  height:'25vh',
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
    paddingTop:10
  }
};


class UserProfile extends Component{

  constructor(){
    super();
    this.state={
      usuario:'',
      open: false,
      laPortada:'',
      portadas : [{
                    id:1,
                    url:foto1
                  },{
                    id:2,
                    url:foto2
                  },{
                    id:3,
                    url:foto3
                  },{
                    id:4,
                    url:foto4
                  },{
                    id:5,
                    url:foto5
                  },{
                    id:6,
                    url:foto6
                  }],
        token:'',
        projects:[],
        profile:''
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
          this.setState({
              usuario:user,
              token:JSON.parse(localStorage.getItem('userToken'))
          });
          this.getUserProjects(this.state.token, 'facebook');
        }
    });

    api.getSelfProfile()
        .then(profile=>{

            profile = profile.data.profile
            if(profile.user === "No encontrado."){
                this.props.history.push('/');
            }
            this.setState({profile});
            console.log(this.state.profile)
            if(this.state.profile.background){
              for(let i=0;i<this.state.portadas.length;i++){
                console.log(this.state.portadas[i].id)
                if(this.state.profile.background == this.state.portadas[i].id){
                  this.setState({laPortada:this.state.portadas[i].url})
                }
              }

            }else{
              this.setState({laPortada:this.state.portadas[0].url})
            }
        })
        .catch(e=>{
            toastr.error('Comprueba tu conexión')
        });
  }
  handlePortada = (e) => {
    const {profile} = this.state;
    profile.background = e.target.id;


    this.setState({laPortada:e.target.src, profile})
    console.log('newpro',this.state.profile.background)
    api.updateProfile(this.state.profile.id, this.state.profile)
        .then((profile)=>{
            console.log(this.state.profile);
            toastr.success('Tu portada se ha actualizado');
            this.setState({open:false})

        })
        .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de mas tarde '));
    this.handleClose();

  }

    getUserProjects = (token, provider) => {
      api.getUserProjects(token, provider)
          .then(
              response => {
                  console.log(response);
                  const projects = response.data;
                this.setState({projects});
              }
          );
    };

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
                     <div key={portada.id} className="portadaChoice"
                       onTouchTap={this.handlePortada}>
                       <GridTile
                        style={stylesGrid.item}>
                        <img src={portada.url} id={portada.id} className="portadaImage" alt="Portada"/>
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
          <UserNav match={this.props.match} history={this.props.history} can={this.state.profile.canPublish}/>
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
                  projects={this.state.projects}
                  match={this.props.match}/>
                </GridTile>
              </GridList>
          </div>
        </div>
    );
  }
}

export default UserProfile;
