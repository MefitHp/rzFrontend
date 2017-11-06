/**
 * Created by BlisS on 22/03/17.
 */
import api from '../../Api/Django';
import React from 'react';
import LaBarra from '../laBarra/LaBarra';
import MainLoader from '../common/MainLoader';
//ChildComponents
import UserProjects from './UserProjects';
//MaterialUI
import {
    Card, CardText, FlatButton, Tabs, Tab, CardMedia, CardTitle, FloatingActionButton,
    CardActions, Dialog
} from 'material-ui';
//import ContentAdd from 'material-ui/svg-icons/content/add';
import * as backgroundImages from './portadas';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import SelectNewBackground from './SelectNewBackground';
import {white} from 'material-ui/styles/colors';
import UserWall from "./UserWall";
import Muro from '../../assets/muro-01.png';
import {Link} from 'react-router-dom';
import BasicInfo from './BasicInfo';

const images = backgroundImages.portadas;
const imagesForBackground = backgroundImages.portadasArray;

const facePic = "https://graph.facebook.com/";
const facePicHd = "/picture?height=500";

export class UserProfileDisplay extends React.Component {
    state = {
        open:false,
        bckImg: backgroundImages.otra
    };

    componentWillMount(){
        this.props.navBarNameActions.changeName('UserProfile')
            .then(
                r => {
                    console.log(this.props.navBarName);
                });

            {/*<LaBarra history={history} />*/}
            {/*{!true ? <MainLoader/> :*/}
                {/*<div  className="perfil-container">*/}
                    {/*<Card>*/}
                        {/*<CardText style={{textAlign:"center"}}>*/}
                            {/*<img style={styles.image} src={user.photoURL ? user.photoURL : "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>*/}
                            {/*<h2>{user.displayName}</h2>*/}
                            {/*<FlatButton*/}
                                {/*label="Acompleta tu información"*/}
                                {/*backgroundColor="lightblue"*/}
                            {/*/>*/}
                        {/*</CardText>*/}

    }

    showChangeBackground = () => {
        this.setState({open:true});
    };

    closeChangeBackground = () => {
        this.setState({open:false});
    };

    handleBackgroundChanged = (src) => {
        this.closeChangeBackground();
        const {user} = this.props;
        const newProfile = user.profile.profile;
        newProfile['background'] = images.indexOf(src);
        console.log(newProfile);
        this.props.actions.saveUser(newProfile.id, newProfile);
    };

    getImgFormat = () => {
        const {user} = this.props;
        let img;
        if (user !== undefined ){
            const profile = user.profile;
            if ( profile !== undefined){
                const profileDjango = profile.profile;
                if( profileDjango !== undefined){
                    const index = this.props.user.profile.profile.background;
                    img = imagesForBackground[index];
                }
            }
        }

        return img;
    };

    render(){
        const {history, fetched, user, userProjects} = this.props;
        let bckImg = this.getImgFormat();
        console.log(user);
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.closeChangeBackground}
            />
        ];
        return (
            <div>
                {/*<LaBarra history={history} />*!/*/}
                {!fetched ? <MainLoader/> :
                    <div className="escritorio">
                    <div  className="perfil-container">

                            <CardText
                                style={
                                    {
                                        position: 'relative',
                                        textAlign:"center",
                                        backgroundImage: bckImg,
                                        backgroundSize: 'cover',
                                        padding:0,

                                    }}>
                                <div
                                    style={
                                        {
                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            padding: 55, color:"white"
                                        }}>
                                    <img style={styles.image} src={user.photoURL ? facePic + user.providerData[0].uid + facePicHd : "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>
                                    <h2>{user.displayName}</h2>

                                    <EditIcon
                                        color={white}
                                        style={{position:'absolute', bottom: 20, left:20, cursor:'pointer'}}
                                        onClick={this.showChangeBackground}
                                    />
                                </div>
                            </CardText>

                        <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                            <SelectNewBackground
                                images={images}
                                handleBackgroundChanged={this.handleBackgroundChanged}
                            />
                        </Dialog>
                        <BasicInfo />
                        <Card style={{marginTop:20}}>
                            <Tabs >
                                <Tab label="Muro" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264"}}>
                                    <div className="muro">
                                        <Link to="/explorar">
                                            <button className="btn_wall">Explora los proyectos</button>
                                        </Link>
                                        <UserWall/>
                                    </div>
                                </Tab>
                                <Tab label="Proyectos" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264", borderLeft:"1px dotted #87316C", borderRight:"1px dotted #87316C"}}>
                                    <div className="muro">
                                        { userProjects.length === 0 &&

                                        <Link to="/">
                                            <button className="btn_wall">Crea tu proyecto</button>
                                        </Link>
                                        }
                                        <UserProjects fetched={fetched} projects={userProjects}/>
                                    </div>
                                </Tab>
                                <Tab
                                    label="Aportes"
                                    data-route="/home"
                                    style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264"}}
                                >
                                    <div className="muro">

                                    </div>
                                </Tab>
                            </Tabs>
                        </Card>

                    </div>
                    </div>
                }
            </div>
        );
    }

}

//UserProfileDisplay.propTypes = {};
const styles = {
    image:{
        borderRadius:"50%",
        width:"200px",
        height: "200px",
        border: '5px solid white'
    },
    botonFlotante:{
        position:"absolute",
        bottom:"5px",
        right:"5px",
        background: "white",

    }
};

