import React, {Component} from 'react';

import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './UserProfilePage.css';
import LinearProgress from 'material-ui/LinearProgress';
import Hand from 'material-ui/svg-icons/action/pan-tool';
import Proyect from 'material-ui/svg-icons/action/extension';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {GridList, GridTile} from 'material-ui/GridList';
import ReactMarkdown from 'react-markdown';
import Love from 'material-ui/svg-icons/action/favorite';


class OneCard extends Component{
  render(){
    return(
      <div>

      <Card style={{padding:'1%'}}>

      <GridList cols={6} cellHeight={document.documentElement.clientWidth > 600 ? 350 : 'auto'}>
        <GridTile cols={document.documentElement.clientWidth > 600 ? 4 : 6}>
          <CardMedia>
            <img src={this.props.back!=null?this.props.back:"https://i.ytimg.com/vi/uejsWreDgto/maxresdefault.jpg"}
              alt="Imagen del proyecto" />
          </CardMedia>
        </GridTile>
        <GridTile cols={document.documentElement.clientWidth > 600 ? 2 : 6}>
          <div className="datosproject">
          <CardTitle title={this.props.name} style={{padding:0}}/>
          <CardText style={{padding:0, paddingTop:'1%'}} >
            <div className="prodetails">
            <div style={{ width:'100%', height:'35vh',overflow:'scroll'}}>
                <ReactMarkdown source={this.props.description}/>
            </div>


              <LinearProgress mode="determinate" value={80} style={{marginTop:5}}/>

                <BottomNavigation style={{width:"100%"}}>
                    <BottomNavigationItem
                      style={{padding:0, margin:0, minWidth:'inherit'}}
                      label={this.props.followers}
                      icon={<Love/>}
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
