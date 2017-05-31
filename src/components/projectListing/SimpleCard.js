import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import foto from '../../assets/card_photo.webp';
import user from '../../assets/bliss.jpg';



class SimpleCard extends Component{

    render(){
        const { item } = this.props;
        return(

            <Card
                onTouchTap={this.props.provisionalLink}
                style={{
                    margin:'20px',
                    cursor:'pointer'
                }}>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar={user}
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src={foto} alt="user" />
                </CardMedia>
                <CardTitle title={item.name} subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        );
    }
}

export default SimpleCard;