import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import './publicProfile.css';
import Paper from 'material-ui/Paper';
import PublicSections from './publicSections';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Proyect from 'material-ui/svg-icons/action/extension';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import api from '../../Api/Django';



class PublicProfile extends Component{
  constructor(){
    super()
    this.state={
      selectedIndex:0,
      profile:{
        photoURL:'',
        user:{
          id:'',
          username:'',

        }
      }
    }
  }

  componentWillMount(){

    api.getProfile(this.props.match.params.userId).then(r=>{
      this.setState({profile:r})
      console.log(this.state.profile.user.id)
      this.loadProjects()
    }).catch(e=>{
      console.log(e)
    })
  }


  loadProjects = () => {
    api.getUserProjects(this.state.profile.user.id)
    .then(r=>{
      console.log(r.data)
    }).catch(e=>{
      console.log(e)
    })
  }

   select = (index) => this.setState({selectedIndex: index});
  render(){
    return(
      <div className="publicprofile">
        <Paper style={{width:'100%', height:'30vh', marginTop:64}} zDepth={1}>
          <div className="basicInfo">
            <Avatar
              size={150}
              src={this.state.profile.photoURL}/>
            <div className="textInfo">
              <h1>{this.state.profile.user.username}</h1>
              <p>{this.state.profile.user.email}</p>
            </div>

          </div>
        </Paper>

        <Paper zDepth={1}>
       <BottomNavigation selectedIndex={this.state.selectedIndex}>


         <BottomNavigationItem
             label="Protectos"
             icon={<Proyect />}
             onTouchTap={() => this.select(0)}
             onClick={() => this.props.history.push('/users/usuario/projects')}>

          </BottomNavigationItem>


          <BottomNavigationItem
              label="Aportes"
              icon={<Hand />}
              onTouchTap={() => this.select(1)}
              onClick={() => this.props.history.push('/users/usuario/inputs')}>
          </BottomNavigationItem>
        </BottomNavigation>
     </Paper>

        <Paper style={{width:'100%', height:'auto', marginTop:'1%', padding:'1%'}} zDepth={1}>
          <PublicSections/>
        </Paper>
      </div>
    );
  }
}

export default PublicProfile;
