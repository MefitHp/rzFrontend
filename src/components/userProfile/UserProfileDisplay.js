/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import LaBarra from '../laBarra/LaBarra';
import MainLoader from '../common/MainLoader';
//ChildComponents
import UserProjects from './UserProjects';
//MaterialUI
import {Card, CardText, FlatButton, Tabs, Tab, FloatingActionButton} from 'material-ui';
//import ContentAdd from 'material-ui/svg-icons/content/add';


export const UserProfileDisplay = ({history, fetched, user, userProjects}) => {
    return (
        <div>

            <LaBarra history={history} />
            {!fetched ? <MainLoader/> :
                <div  className="perfil-container">
                    <Card>
                        <CardText style={{textAlign:"center"}}>
                            <img style={styles.image} src={user.photoURL ? user.photoURL : "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>
                            <h2>{user.displayName}</h2>
                            <FlatButton
                                label="Acompleta tu información"
                                backgroundColor="lightblue"
                            />
                        </CardText>

                    </Card>

                    <Card style={{marginTop:20}}>
                        <Tabs>
                            <Tab label="Muro" >
                                <div>
                                    <h2>Tab One</h2>
                                    <p>
                                        This is an example tab.
                                    </p>
                                    <p>
                                        You can put any sort of HTML or react component in here. It even keeps the component state!
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Proyectos" >
                                <div>
                                    <h3>Tus proyectos</h3>
                                    <UserProjects fetched={fetched} projects={userProjects}/>
                                </div>
                            </Tab>
                            <Tab
                                label="Aportes"
                                data-route="/home"
                            >
                                <div>
                                    <h2>Tab Three</h2>
                                    <p>
                                        This is a third example tab.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Card>

                </div>
            }
        </div>
    );
};

//UserProfileDisplay.propTypes = {};
const styles = {
    image:{
        borderRadius:"50%",
        width:"200px"
    },
    botonFlotante:{
        position:"absolute",
        bottom:"5px",
        right:"5px"
    }
};

