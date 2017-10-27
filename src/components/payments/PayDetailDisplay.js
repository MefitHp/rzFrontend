/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {CircularProgress} from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const img = "https://s-media-cache-ak0.pinimg.com/originals/c9/13/53/c9135320c7de02dbec0823e3c6c3afe9.png";


export const PayDetailDisplay = ({reward, fetched, description, title, amount, project}) => {
    console.log("projecto: ", project);
    const Detail = () => (
        <Card style={styles.card}>
            <CardHeader
                title={title}
                subtitle={project.name}
                avatar={img}
                actAsExpander={false}
                showExpandableButton={false}
            />
            <CardTitle title={title} subtitle={"$" + amount + "MXN"} expandable={false} />
            <CardText expandable={false}>
                {description}
            </CardText>

        </Card>
    );

    console.log(reward);
    return (
        <div>
            {!fetched ? <CircularProgress/>:
            <div>
                <Detail/>
            </div>
            }

        </div>
    );
};

//PayDetailDisplay.propTypes = {};

const styles = {
    card: {
        maxWidth:"500px",
        margin:"0 auto"
    }
};

