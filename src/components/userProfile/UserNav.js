import React, {Component} from 'react';



import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Wall from 'material-ui/svg-icons/maps/layers';

import Wall from 'material-ui/svg-icons/maps/layers';


const proyect = <Proyect/>;
const apport = <Hand />;
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
                       onTouchTap={() => this.select(1)}
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
