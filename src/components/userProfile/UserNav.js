import React, {Component} from 'react';

import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Hardware from 'material-ui/svg-icons/hardware/videogame-asset';
import Wall from 'material-ui/svg-icons/maps/layers';

import {Tabs, Tab} from 'material-ui/Tabs';
import UserSections from './UserSections';
// From https://github.com/oliviertassinari/react-swipeable-views



const proyect = <Proyect/>;
const apport = <Hand />;
const hardware = <Hardware/>;
const wall = <Wall/>




const style = {
  paddingLeft:'30%',
}



class UserNav extends Component{

  constructor(){
    super();
    this.state={
      selectedIndex: 0,
    }
  }
  select = (index) => this.setState({selectedIndex: index});


  render(){
    return(
      <div>
                 <Paper zDepth={1} style={style}>
                 <BottomNavigation selectedIndex={this.state.selectedIndex}>

                   <Link to={`/userprofile/wall`}>
                     <BottomNavigationItem
                       label="Muro"
                       icon={wall}
                       onTouchTap={() => this.select(0)}
                     />
                   </Link>
                   <Link to={`/userprofile/projects`}>
                     <BottomNavigationItem
                       label="Proyectos"
                       icon={proyect}
                       onTouchTap={() => this.select(0)}
                     />
                   </Link>
                   <Link to={`/userprofile/inputs`}>
                     <BottomNavigationItem
                       label="Aportes"
                       icon={apport}
                       onTouchTap={() => this.select(2)}
                     />
                   </Link>



                 </BottomNavigation>
                 </Paper>


      </div>
    );
  }
}



export default UserNav;
