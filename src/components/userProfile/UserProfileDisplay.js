/**
 * Created by BlisS on 22/03/17.
 */

import React from 'react';

import MainLoader from '../common/MainLoader';
//ChildComponents
import UserProjects from './UserProjects';
//MaterialUI
import {
    Card, CardText, FlatButton, Tabs, Tab, Dialog} from 'material-ui';
//import ContentAdd from 'material-ui/svg-icons/content/add';
import * as backgroundImages from './portadas';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import SelectNewBackground from './SelectNewBackground';
import {white} from 'material-ui/styles/colors';
import UserWall from "./UserWall";
import UserContribution from './UserContribution';
import {Link} from 'react-router-dom';
import BasicInfo from './BasicInfo';
import FavoriteProjects from "./FavoriteProjects";
import {updateUser, getOwnProjects} from '../../Api/nodejs';
import firebase from '../../Api/firebase';

const images = backgroundImages.portadas;

//const imagesForBackground = backgroundImages.portadasArray;

//const facePic = "https://graph.facebook.com/";
//const facePicHd = "/picture?height=500";

export class UserProfileDisplay extends React.Component {
    state = {
        open:false,
        bckImg: backgroundImages.otra,
        user:{},
        fetched:null
    };

    componentWillMount(){
        // this.props.navBarNameActions.changeName('UserProfile')
        //     .then(
        //         r => {
        //             console.log(this.props.navBarName);
        //         });

        // {/*<LaBarra history={history} />*/}
        // {/*{!true ? <MainLoader/> :*/}
        //     {/*<div  className="perfil-container">*/}
        //         {/*<Card>*/}
        //             {/*<CardText style={{textAlign:"center"}}>*/}
        //                 {/*<img style={styles.image} src={user.photoURL ? user.photoURL : "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>*/}
        //                 {/*<h2>{user.displayName}</h2>*/}
        //                 {/*<FlatButton*/}
        //                     {/*label="Acompleta tu información"*/}
        //                     {/*backgroundColor="lightblue"*/}
        //                 {/*/>*/}
        //             {/*</CardText>*/}
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) return this.props.history.push('/login');
        this.setState({user, fetched:true})
        this.getProjects()
    }

    getProjects = () => {
        getOwnProjects()
        .then(projects=>{
            const {user} = this.state
            user.projects = projects
            this.setState({user})
        })
    }

    showChangeBackground = () => {
        this.setState({open:true});
    };

    closeChangeBackground = () => {
        this.setState({open:false});
    };

    handleBackgroundChanged = (src) => {
        console.log(src)
        this.closeChangeBackground();
        const {user} = this.state;
        //user['cover'] = images.indexOf(src);
        user.cover = src;
        updateUser(user)
        .then(user=>this.setState({user}))
        
    };

    changeProfilePic = (e) => {
        const {user} = this.state;
        const file = e.target.files[0]
        firebase.storage().ref('users/pics').child(user._id).put(file)
        .then(snap=>{
            user.photoURL = snap.downloadURL
            return updateUser(user)
            
        })
        .then(user=>this.setState({user}))

    }

    // getImgFormat = () => {
    //    // const {user} = this.props;
    //    const {user} = this.state;
    //     let img;
    //     if (user !== undefined ){
    //         const profile = user.profile;
    //         if ( profile !== undefined){
    //             const profileDjango = profile.profile;
    //             if( profileDjango !== undefined){
    //                 const index = this.props.user.profile.profile.background;
    //                 img = imagesForBackground[index];
    //             }
    //         }
    //     }

    //     return img;
    // };

    render(){
        //const {history, fetched, follows, updates, donaciones} = this.props;
        const {user, fetched} = this.state;
        const {username, donations=[], email, followingProjects=[], contacts, role, canPublish, projects, genre, cover, photoURL, age, tel, address, occupation, anotherEmail} = user;
        //let bckImg = this.getImgFormat();
        //console.log(user);
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
                                        backgroundImage: `url('${cover}')`,
                                        backgroundSize: 'cover',
                                        padding:0,

                                    }}>
                                <div
                                    style={
                                        {
                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            padding: 55, color:"white"
                                        }}>
                                    <img onClick={()=>this.profilePic.click()} style={styles.image} src={photoURL || "https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png"} alt="user pic"/>
                                    <input onChange={this.changeProfilePic} accept="images/*" ref={input=>this.profilePic=input} type="file" hidden /> 
                                    <h2>{username}</h2>

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
                            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                                <Tab label="Muro" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264"}}>
                                    <div className="muro">
                                        { [].length === 0 &&

                                        <Link to="/explorar">
                                            <button className="btn_wall">Explorar proyectos</button>
                                        </Link>
                                        }
                                        <UserWall updates={[]}/>
                                    </div>
                                </Tab>
                                {/* //2018 */}
                                {canPublish && <Tab label="Proyectos" style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264", borderLeft:"1px dotted #87316C", borderRight:"1px dotted #87316C"}}>
                                    <div className="muro">
                                        { projects.length === 0 &&
                                            <Link to="/new">
                                                <button className="btn_wall">Crea tu proyecto</button>
                                            </Link>
                                        }
                                        <UserProjects fetched={true} projects={projects}/>
                                    </div>
                                </Tab>}
                                <Tab
                                    label="Aportes"
                                    data-route="/home"

                                    style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264", borderLeft:"1px dotted #87316C", borderRight:"1px dotted #87316C"}}
                                >
                                    <div className="muro">
                                    { donations.length === 0 &&
                                        <Link to="/explorar">
                                            <button className="btn_wall">Explorar proyectos</button>
                                        </Link>
                                    }
                                        <UserContribution donaciones={donations} />
                                    </div>
                                </Tab>
                                <Tab
                                    label="Favoritos"
                                    data-route="/home"
                                    style={{backgroundColor:"white", borderBottom:"2px solid #87316C", color:"#5f6264"}}
                                >
                                    <div className="muro">

                                        { followingProjects.length === 0 &&

                                        <Link to="/explorar">
                                            <button className="btn_wall">Explorar proyectos</button>
                                        </Link>
                                        }

                                        <FavoriteProjects follows={followingProjects}/>



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
        border: '5px solid white',
        cursor: 'pointer'
    },
    botonFlotante:{
        position:"absolute",
        bottom:"5px",
        right:"5px",
        background: "white",

    }
};

