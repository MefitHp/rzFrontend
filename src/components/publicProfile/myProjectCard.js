import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class MyProjectCard extends Component{
  render(){
    return(
      <div>
        <Card >
          <CardMedia
            overlay={<CardTitle title="Pizza para todos" subtitle="Tengo hambre de nuevo" />}
          >
            <img src="https://i.ytimg.com/vi/uejsWreDgto/maxresdefault.jpg" alt="" />
          </CardMedia>
        </Card>
      </div>
    );
  }
}

export default MyProjectCard;
