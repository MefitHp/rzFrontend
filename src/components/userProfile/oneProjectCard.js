import React, {Component} from 'react';

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './UserProfilePage.css';
import LinearProgress from 'material-ui/LinearProgress';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import Loc from 'material-ui/svg-icons/communication/location-on';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {GridList, GridTile} from 'material-ui/GridList';
import ReactMarkdown from 'react-markdown';

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
          <CardText style={{padding:0, paddingTop:'1%'}} >
            <div className="prodetails">
            <div style={{ width:'100%', height:'38vh',overflow:'scroll'}}>
                <ReactMarkdown source={this.props.description}/>
            </div>


              <LinearProgress mode="determinate" value={80} style={{marginTop:5}}/>

                <BottomNavigation style={{width:"100%"}}>
                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label={this.props.location}
                      icon={<Loc/>}
                      disabled={true}
                    />

                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label={this.props.goal}
                      icon={<Proyect/>}
                      disabled={true}
                    />

                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label={this.props.inputs}
                      icon={<Hand/>}
                      disabled={true}
                    />

              </BottomNavigation>

              </div>
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
