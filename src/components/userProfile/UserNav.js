import React, {Component} from 'react';


import { Link} from 'react-router-dom'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Wall from 'material-ui/svg-icons/maps/layers';

// From https://github.com/oliviertassinari/react-swipeable-views



const proyect = <Proyect/>;
const apport = <Hand />;
const wall = <Wall/>








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
      <div >
                 <Paper zDepth={1} className="userNav">
                 <BottomNavigation selectedIndex={this.state.selectedIndex}>

                   <Link to={'/userprofile/' + this.props.match.params.profileId + '/wall'}>
                     <BottomNavigationItem
                       label="Muro"
                       icon={wall}
                       onTouchTap={() => this.select(0)}
                     />
                   </Link>
                   <Link to={'/userprofile/' + this.props.match.params.profileId + '/projects'}>
                     <BottomNavigationItem
                       label="Proyectos"
                       icon={proyect}
                       onTouchTap={() => this.select(1)}
                     />
                   </Link>
                   <Link to={'/userprofile/' + this.props.match.params.profileId + '/inputs'}>
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
