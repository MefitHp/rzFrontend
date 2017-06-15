import React, {Component} from 'react';

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './UserProfilePage.css';
import LinearProgress from 'material-ui/LinearProgress';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Loc from 'material-ui/svg-icons/communication/location-on';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {GridList, GridTile} from 'material-ui/GridList';

class OneCard extends Component{
  render(){
    return(
      <div>

      <Card style={{padding:'1%'}}>

      <GridList cols={6} cellHeight={'auto'}>
        <GridTile cols={4}>
          <CardMedia>
            <img src="https://i.ytimg.com/vi/uejsWreDgto/maxresdefault.jpg" alt="" />
          </CardMedia>
        </GridTile>
        <GridTile cols={2}>
          <div className="datosproject">
          <CardTitle title={this.props.name} style={{padding:0}}/>
          <CardText style={{padding:0, paddingTop:'1%'}}>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>


              <LinearProgress mode="determinate" value={80} />

                <BottomNavigation style={{width:"100%"}}>
                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label="Ubicación"
                      icon={<Loc/>}
                      disabled={true}
                    />

                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label="Meta"
                      icon={<Proyect/>}
                      disabled={true}
                    />

                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label="Aportes"
                      icon={<Hand/>}
                      disabled={true}
                    />

              </BottomNavigation>


          </CardText>
          </div>
        </GridTile>
      </GridList>
     </Card>
     </div>
    );
  }
}

export default OneCard;
