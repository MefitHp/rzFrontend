import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import './publicProfile.css';
import Paper from 'material-ui/Paper';
import PublicSections from './publicSections';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Proyect from 'material-ui/svg-icons/action/extension';
import Hand from 'material-ui/svg-icons/action/pan-tool';




class PublicProfile extends Component{
  constructor(){
    super()
    this.state={
      selectedIndex:0
    }
  }

   select = (index) => this.setState({selectedIndex: index});
  render(){
    return(
      <div className="publicprofile">
        <Paper style={{width:'100%', height:'40vh', marginTop:64}} zDepth={1}>
          <div className="basicInfo">
            <Avatar
              size={200}
              src="https://instagram.fgdl4-1.fna.fbcdn.net/t51.2885-15/e35/18812936_1896526593923167_678473054581424128_n.jpg" />
            <div className="textInfo">
              <h1>Oswaldinho</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
